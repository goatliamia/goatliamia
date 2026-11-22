import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildHeroSvg, buildSkylineSvg } from './svg-builder.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const assetsDir = path.join(rootDir, 'assets');
const configPath = path.join(rootDir, 'profile.config.json');

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// Realistic organic demo contribution curve (50 weeks)
const DEMO_WEEKS = [
  4, 7, 12, 9, 3, 0, 5, 11, 16, 22,
  14, 8, 6, 10, 19, 25, 18, 12, 4, 2,
  8, 15, 21, 17, 9, 6, 13, 24, 29, 19,
  11, 7, 3, 9, 16, 20, 14, 18, 27, 23,
  15, 10, 6, 12, 19, 26, 22, 17, 24, 28,
];

function getLocalClock(offsetHours = 8) {
  const now = new Date();
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60_000;
  const local = new Date(utcMs + offsetHours * 3_600_000);
  const hh = String(local.getHours()).padStart(2, '0');
  const mm = String(local.getMinutes()).padStart(2, '0');
  const isNight = local.getHours() >= 19 || local.getHours() < 6;
  return {
    timeOfDay: isNight ? 'night' : 'day',
    localTimeStr: `${hh}:${mm}`,
  };
}

async function fetchGitHubStats(username, token) {
  if (!token || !username) return null;

  const query = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'pixel-profile-generator',
      },
      body: JSON.stringify({ query, variables: { login: username } }),
    });

    if (!res.ok) {
      console.warn(`GitHub API returned ${res.status}, falling back to demo stats.`);
      return null;
    }

    const json = await res.json();
    const cal = json?.data?.user?.contributionsCollection?.contributionCalendar;
    if (!cal) return null;

    const allDays = cal.weeks.flatMap((w) => w.contributionDays);
    const weeklyTotals = cal.weeks.map((w) =>
      w.contributionDays.reduce((sum, d) => sum + d.contributionCount, 0)
    );

    const last7 = allDays.slice(-7).reduce((s, d) => s + d.contributionCount, 0);
    const last30 = allDays.slice(-30).reduce((s, d) => s + d.contributionCount, 0);

    // Current consecutive day streak (allowing today to be 0 if yesterday was active)
    let streak = 0;
    for (let i = allDays.length - 1; i >= 0; i--) {
      if (allDays[i].contributionCount > 0) {
        streak++;
      } else if (i === allDays.length - 1) {
        continue;
      } else {
        break;
      }
    }

    return {
      weeks: weeklyTotals.slice(-50),
      totalCommits: cal.totalContributions,
      recentCommits30d: last30,
      recentCommits7d: last7,
      streakDays: streak,
    };
  } catch (err) {
    console.warn(`GitHub API fetch failed (${err.message}), using demo stats.`);
    return null;
  }
}

function buildPreviewBundle(stats, clock) {
  // Strip ESM `export ` so it works seamlessly via <script> even over file://
  const builderSrc = fs
    .readFileSync(path.join(__dirname, 'svg-builder.mjs'), 'utf8')
    .replace(/^export\s+/gm, '');

  return `// Auto-generated offline preview bundle (zero CORS issues over file://)
window.PIXEL_PROFILE = (function() {
${builderSrc}
  const DEFAULT_CONFIG = ${JSON.stringify(config, null, 2)};
  const DEFAULT_STATS = ${JSON.stringify(stats, null, 2)};
  const DEFAULT_CLOCK = ${JSON.stringify(clock, null, 2)};
  return {
    ACCENTS,
    THEMES,
    buildHeroSvg,
    buildSkylineSvg,
    DEFAULT_CONFIG,
    DEFAULT_STATS,
    DEFAULT_CLOCK,
  };
})();
`;
}

async function main() {
  fs.mkdirSync(assetsDir, { recursive: true });

  const envUser = process.env.GITHUB_USERNAME || process.env.GITHUB_REPOSITORY_OWNER || config.username;
  const envToken = process.env.GITHUB_TOKEN || '';
  const live = await fetchGitHubStats(envUser, envToken);

  const stats = live || {
    weeks: DEMO_WEEKS,
    totalCommits: DEMO_WEEKS.reduce((a, b) => a + b, 0),
    recentCommits30d: 89,
    recentCommits7d: 24,
    streakDays: 14,
  };

  const clock = getLocalClock(config.timezoneOffset ?? 8);
  const activityState = stats.recentCommits7d > 0 ? 'active' : 'idle';
  const plantStage =
    stats.recentCommits30d >= 15 ? 'bloom' : stats.recentCommits30d >= 4 ? 'sprout' : 'dormant';

  const heroBase = {
    accent: config.accent || 'emerald',
    timeOfDay: clock.timeOfDay,
    activityState,
    plantStage,
    displayName: config.displayName || config.username,
    tagline: config.tagline || '',
    streakDays: stats.streakDays,
    recentCommits: stats.recentCommits30d,
    focus: config.focus || 'BUILDING',
    localTimeStr: clock.localTimeStr,
  };

  const files = {
    'hero-dark.svg': buildHeroSvg({ ...heroBase, theme: 'dark' }),
    'hero-light.svg': buildHeroSvg({ ...heroBase, theme: 'light' }),
    'skyline-dark.svg': buildSkylineSvg({
      theme: 'dark',
      accent: config.accent || 'emerald',
      weeks: stats.weeks,
      totalCommits: stats.totalCommits,
    }),
    'skyline-light.svg': buildSkylineSvg({
      theme: 'light',
      accent: config.accent || 'emerald',
      weeks: stats.weeks,
      totalCommits: stats.totalCommits,
    }),
    'preview-builder.js': buildPreviewBundle(stats, clock),
  };

  for (const [name, content] of Object.entries(files)) {
    fs.writeFileSync(path.join(assetsDir, name), content, 'utf8');
  }

  console.log(
    `Generated profile assets (${live ? 'live GitHub API' : 'demo mode'}): ` +
      `phase=${clock.timeOfDay}, state=${activityState}, plant=${plantStage}`
  );
}

main();
