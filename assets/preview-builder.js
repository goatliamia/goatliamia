// Auto-generated offline preview bundle (zero CORS issues over file://)
window.PIXEL_PROFILE = (function() {
// Pure zero-dependency 1-bit pixel SVG generator
// Compatible with both Node.js (GitHub Actions) and browser preview

const ACCENTS = {
  emerald: {
    dark: '#39d353',
    light: '#1a7f37',
    label: 'Terminal Green',
  },
  amber: {
    dark: '#ffb000',
    light: '#c97a00',
    label: 'Playdate Amber',
  },
  cyan: {
    dark: '#58d1ff',
    light: '#0969da',
    label: 'Pixel Cyan',
  },
  mono: {
    dark: '#e6edf3',
    light: '#1f2328',
    label: 'Pure 1-bit',
  },
};

const THEMES = {
  dark: {
    ink: '#e6edf3',
    inkMuted: '#7d8590',
    inkFaint: '#30363d',
    surface: '#0d1117',
    panelBg: '#11161d',
    screenBg: '#090d12',
    skyNight: '#0b1017',
    skyDay: '#161d27',
  },
  light: {
    ink: '#1f2328',
    inkMuted: '#656d76',
    inkFaint: '#d0d7de',
    surface: '#ffffff',
    panelBg: '#f6f8fa',
    screenBg: '#1f2328',
    skyNight: '#1c2128',
    skyDay: '#eef2f6',
  },
};

// Crisp 5x7 pixel bitmap font (each row is 5 bits, MSB on left)
const FONT_5X7 = {
  ' ': [0, 0, 0, 0, 0, 0, 0],
  A: [0b01110, 0b10001, 0b10001, 0b11111, 0b10001, 0b10001, 0b10001],
  B: [0b11110, 0b10001, 0b10001, 0b11110, 0b10001, 0b10001, 0b11110],
  C: [0b01110, 0b10001, 0b10000, 0b10000, 0b10000, 0b10001, 0b01110],
  D: [0b11100, 0b10010, 0b10001, 0b10001, 0b10001, 0b10010, 0b11100],
  E: [0b11111, 0b10000, 0b10000, 0b11110, 0b10000, 0b10000, 0b11111],
  F: [0b11111, 0b10000, 0b10000, 0b11110, 0b10000, 0b10000, 0b10000],
  G: [0b01110, 0b10001, 0b10000, 0b10111, 0b10001, 0b10001, 0b01110],
  H: [0b10001, 0b10001, 0b10001, 0b11111, 0b10001, 0b10001, 0b10001],
  I: [0b01110, 0b00100, 0b00100, 0b00100, 0b00100, 0b00100, 0b01110],
  J: [0b00111, 0b00010, 0b00010, 0b00010, 0b10010, 0b10010, 0b01100],
  K: [0b10001, 0b10010, 0b10100, 0b11000, 0b10100, 0b10010, 0b10001],
  L: [0b10000, 0b10000, 0b10000, 0b10000, 0b10000, 0b10000, 0b11111],
  M: [0b10001, 0b11011, 0b10101, 0b10101, 0b10001, 0b10001, 0b10001],
  N: [0b10001, 0b11001, 0b10101, 0b10011, 0b10001, 0b10001, 0b10001],
  O: [0b01110, 0b10001, 0b10001, 0b10001, 0b10001, 0b10001, 0b01110],
  P: [0b11110, 0b10001, 0b10001, 0b11110, 0b10000, 0b10000, 0b10000],
  Q: [0b01110, 0b10001, 0b10001, 0b10001, 0b10101, 0b10010, 0b01101],
  R: [0b11110, 0b10001, 0b10001, 0b11110, 0b10100, 0b10010, 0b10001],
  S: [0b01111, 0b10000, 0b10000, 0b01110, 0b00001, 0b00001, 0b11110],
  T: [0b11111, 0b00100, 0b00100, 0b00100, 0b00100, 0b00100, 0b00100],
  U: [0b10001, 0b10001, 0b10001, 0b10001, 0b10001, 0b10001, 0b01110],
  V: [0b10001, 0b10001, 0b10001, 0b10001, 0b01010, 0b01010, 0b00100],
  W: [0b10001, 0b10001, 0b10001, 0b10101, 0b10101, 0b11011, 0b10001],
  X: [0b10001, 0b10001, 0b01010, 0b00100, 0b01010, 0b10001, 0b10001],
  Y: [0b10001, 0b10001, 0b01010, 0b00100, 0b00100, 0b00100, 0b00100],
  Z: [0b11111, 0b00001, 0b00010, 0b00100, 0b01000, 0b10000, 0b11111],
  '0': [0b01110, 0b10001, 0b10011, 0b10101, 0b11001, 0b10001, 0b01110],
  '1': [0b00100, 0b01100, 0b00100, 0b00100, 0b00100, 0b00100, 0b01110],
  '2': [0b01110, 0b10001, 0b00001, 0b00110, 0b01000, 0b10000, 0b11111],
  '3': [0b11110, 0b00001, 0b00001, 0b01110, 0b00001, 0b00001, 0b11110],
  '4': [0b00010, 0b00110, 0b01010, 0b10010, 0b11111, 0b00010, 0b00010],
  '5': [0b11111, 0b10000, 0b11110, 0b00001, 0b00001, 0b10001, 0b01110],
  '6': [0b01110, 0b10000, 0b10000, 0b11110, 0b10001, 0b10001, 0b01110],
  '7': [0b11111, 0b00001, 0b00010, 0b00100, 0b01000, 0b01000, 0b01000],
  '8': [0b01110, 0b10001, 0b10001, 0b01110, 0b10001, 0b10001, 0b01110],
  '9': [0b01110, 0b10001, 0b10001, 0b01111, 0b00001, 0b00001, 0b01110],
  '.': [0b00000, 0b00000, 0b00000, 0b00000, 0b00000, 0b01100, 0b01100],
  ',': [0b00000, 0b00000, 0b00000, 0b00000, 0b00100, 0b00100, 0b01000],
  ':': [0b00000, 0b00100, 0b00100, 0b00000, 0b00100, 0b00100, 0b00000],
  '/': [0b00001, 0b00010, 0b00010, 0b00100, 0b01000, 0b01000, 0b10000],
  '-': [0b00000, 0b00000, 0b00000, 0b11111, 0b00000, 0b00000, 0b00000],
  '_': [0b00000, 0b00000, 0b00000, 0b00000, 0b00000, 0b00000, 0b11111],
  '&': [0b01100, 0b10010, 0b10100, 0b01000, 0b10101, 0b10010, 0b01101],
  '+': [0b00000, 0b00100, 0b00100, 0b11111, 0b00100, 0b00100, 0b00000],
  '!': [0b00100, 0b00100, 0b00100, 0b00100, 0b00100, 0b00000, 0b00100],
  '@': [0b01110, 0b10001, 0b10111, 0b10101, 0b10110, 0b10000, 0b01110],
  '#': [0b01010, 0b01010, 0b11111, 0b01010, 0b11111, 0b01010, 0b01010],
  '>': [0b10000, 0b01000, 0b00100, 0b00010, 0b00100, 0b01000, 0b10000],
};

// Smaller 3x5 micro pixel font for crisp compact metadata
const FONT_3X5 = {
  ' ': [0, 0, 0, 0, 0],
  A: [0b010, 0b101, 0b111, 0b101, 0b101],
  B: [0b110, 0b101, 0b110, 0b101, 0b110],
  C: [0b011, 0b100, 0b100, 0b100, 0b011],
  D: [0b110, 0b101, 0b101, 0b101, 0b110],
  E: [0b111, 0b100, 0b110, 0b100, 0b111],
  F: [0b111, 0b100, 0b110, 0b100, 0b100],
  G: [0b011, 0b100, 0b101, 0b101, 0b011],
  H: [0b101, 0b101, 0b111, 0b101, 0b101],
  I: [0b111, 0b010, 0b010, 0b010, 0b111],
  J: [0b001, 0b001, 0b001, 0b101, 0b010],
  K: [0b101, 0b101, 0b110, 0b101, 0b101],
  L: [0b100, 0b100, 0b100, 0b100, 0b111],
  M: [0b101, 0b111, 0b111, 0b101, 0b101],
  N: [0b110, 0b101, 0b101, 0b101, 0b101],
  O: [0b010, 0b101, 0b101, 0b101, 0b010],
  P: [0b110, 0b101, 0b110, 0b100, 0b100],
  Q: [0b010, 0b101, 0b101, 0b111, 0b011],
  R: [0b110, 0b101, 0b110, 0b101, 0b101],
  S: [0b011, 0b100, 0b010, 0b001, 0b110],
  T: [0b111, 0b010, 0b010, 0b010, 0b010],
  U: [0b101, 0b101, 0b101, 0b101, 0b111],
  V: [0b101, 0b101, 0b101, 0b101, 0b010],
  W: [0b101, 0b101, 0b111, 0b111, 0b101],
  X: [0b101, 0b101, 0b010, 0b101, 0b101],
  Y: [0b101, 0b101, 0b010, 0b010, 0b010],
  Z: [0b111, 0b001, 0b010, 0b100, 0b111],
  '0': [0b111, 0b101, 0b101, 0b101, 0b111],
  '1': [0b010, 0b110, 0b010, 0b010, 0b111],
  '2': [0b110, 0b001, 0b010, 0b100, 0b111],
  '3': [0b110, 0b001, 0b010, 0b001, 0b110],
  '4': [0b101, 0b101, 0b111, 0b001, 0b001],
  '5': [0b111, 0b100, 0b110, 0b001, 0b110],
  '6': [0b011, 0b100, 0b111, 0b101, 0b111],
  '7': [0b111, 0b001, 0b010, 0b010, 0b010],
  '8': [0b111, 0b101, 0b111, 0b101, 0b111],
  '9': [0b111, 0b101, 0b111, 0b001, 0b110],
  '.': [0b000, 0b000, 0b000, 0b000, 0b010],
  ':': [0b000, 0b010, 0b000, 0b010, 0b000],
  '/': [0b001, 0b001, 0b010, 0b100, 0b100],
  '-': [0b000, 0b000, 0b111, 0b000, 0b000],
  '&': [0b010, 0b101, 0b010, 0b101, 0b011],
  '+': [0b000, 0b010, 0b111, 0b010, 0b000],
  '>': [0b100, 0b010, 0b001, 0b010, 0b100],
  ',': [0b000, 0b000, 0b000, 0b010, 0b100],
};

function renderPixelText(text, x, y, pixelSize, fill, font = '5x7', letterSpacing = 1) {
  const map = font === '3x5' ? FONT_3X5 : FONT_5X7;
  const cols = font === '3x5' ? 3 : 5;
  const str = String(text || '').toUpperCase();
  const segments = [];
  let cursorX = x;

  for (const ch of str) {
    const glyph = map[ch] || map[' '];
    for (let r = 0; r < glyph.length; r++) {
      const rowBits = glyph[r];
      let c = 0;
      while (c < cols) {
        if ((rowBits >> (cols - 1 - c)) & 1) {
          let run = 1;
          while (c + run < cols && ((rowBits >> (cols - 1 - (c + run))) & 1)) {
            run++;
          }
          const rx = cursorX + c * pixelSize;
          const ry = y + r * pixelSize;
          const rw = run * pixelSize;
          const rh = pixelSize;
          segments.push(`M${rx} ${ry}h${rw}v${rh}h-${rw}z`);
          c += run;
        } else {
          c++;
        }
      }
    }
    cursorX += (cols + letterSpacing) * pixelSize;
  }

  const width = Math.max(0, cursorX - x - letterSpacing * pixelSize);
  return {
    svg: segments.length ? `<path d="${segments.join('')}" fill="${fill}"/>` : '',
    width,
  };
}

function measurePixelText(text, pixelSize, font = '5x7', letterSpacing = 1) {
  const cols = font === '3x5' ? 3 : 5;
  const len = String(text || '').length;
  if (!len) return 0;
  return (len * cols + (len - 1) * letterSpacing) * pixelSize;
}

// Convert ASCII sprite lines into compact horizontal-run SVG <path> per palette key
function renderSprite(lines, originX, originY, scale, palette) {
  const paths = {};
  for (let r = 0; r < lines.length; r++) {
    const row = lines[r];
    let c = 0;
    while (c < row.length) {
      const ch = row[c];
      if (palette[ch]) {
        let run = 1;
        while (c + run < row.length && row[c + run] === ch) run++;
        if (!paths[ch]) paths[ch] = [];
        const x = (originX + c) * scale;
        const y = (originY + r) * scale;
        const w = run * scale;
        const h = scale;
        paths[ch].push(`M${x} ${y}h${w}v${h}h-${w}z`);
        c += run;
      } else {
        c++;
      }
    }
  }
  return Object.entries(paths)
    .map(([ch, d]) => `<path d="${d.join('')}" fill="${palette[ch]}"/>`)
    .join('\n');
}

function pxRect(x, y, w, h, scale, fill, extra = '') {
  return `<rect x="${x * scale}" y="${y * scale}" width="${w * scale}" height="${h * scale}" fill="${fill}"${extra ? ' ' + extra : ''}/>`;
}

// ---------- HERO MICRO-ECOSYSTEM SVG (840 x 260, virtual 210 x 65 @ 4px) ----------

function buildHeroSvg({
  theme = 'dark',
  accent = 'emerald',
  timeOfDay = 'night', // 'day' | 'night'
  activityState = 'active', // 'active' | 'idle'
  plantStage = 'bloom', // 'bloom' | 'sprout' | 'dormant'
  displayName = 'PIXEL.DEV',
  tagline = 'CRAFTING MINIMAL CODE & PIXELS',
  streakDays = 14,
  recentCommits = 26,
  focus = 'BUILDING',
  localTimeStr = '22:40',
} = {}) {
  const S = 4; // 1 virtual pixel = 4px
  const W = 210 * S; // 840
  const H = 65 * S; // 260
  const t = THEMES[theme] || THEMES.dark;
  const acc = (ACCENTS[accent] || ACCENTS.emerald)[theme === 'light' ? 'light' : 'dark'];
  const isNight = timeOfDay === 'night';
  const isActive = activityState === 'active';
  const effectivePlant = isActive ? plantStage : 'dormant';
  const uid = `h_${theme[0]}_${timeOfDay[0]}_${activityState[0]}`;

  // Accent text / telemetry values
  const sysStatus = isActive ? 'SYS // ONLINE' : 'SYS // STANDBY';
  const phaseLabel = isNight ? `NIGHT ${localTimeStr}` : `DAY ${localTimeStr}`;
  const plantLabel =
    effectivePlant === 'bloom' ? 'BLOOM' : effectivePlant === 'sprout' ? 'SPROUT' : 'DORMANT';
  const focusLabel = isActive ? focus : 'RESTING';

  // Left side typography (pixel-crisp)
  const statusText = renderPixelText(sysStatus, 10 * S, 7 * S, 2, t.inkMuted, '3x5', 1);
  const phaseW = measurePixelText(phaseLabel, 2, '3x5', 1);
  const phaseText = renderPixelText(phaseLabel, 96 * S - phaseW, 7 * S, 2, t.inkMuted, '3x5', 1);

  const safeName = String(displayName || 'PIXEL.DEV').slice(0, 13);
  const nameScale = safeName.length > 10 ? 3 : 4;
  const nameY = safeName.length > 10 ? 20 * S : 18 * S;
  const nameRendered = renderPixelText(safeName, 6 * S, nameY, nameScale, t.ink, '5x7', 1);
  const cursorX = 6 * S + nameRendered.width + nameScale * 2;
  const cursorY = nameY;
  const cursorW = nameScale * 3;
  const cursorH = nameScale * 7;

  const safeTagline = String(tagline || '').slice(0, 38);
  const taglineRendered = renderPixelText(safeTagline, 6 * S, 37 * S, 2, t.inkMuted, '3x5', 1);

  // Telemetry 3-column bar at bottom-left
  const col1Label = renderPixelText('STREAK', 6 * S, 48 * S, 2, t.inkMuted, '3x5', 1);
  const col1Val = renderPixelText(`${streakDays}D`, 6 * S, 54 * S, 2, t.ink, '5x7', 1);

  const col2Label = renderPixelText('FLORA', 36 * S, 48 * S, 2, t.inkMuted, '3x5', 1);
  const col2Val = renderPixelText(
    plantLabel,
    36 * S,
    54 * S,
    2,
    effectivePlant === 'bloom' ? acc : t.ink,
    '5x7',
    1
  );

  const col3Label = renderPixelText('MODE', 68 * S, 48 * S, 2, t.inkMuted, '3x5', 1);
  const col3Val = renderPixelText(focusLabel.slice(0, 8), 68 * S, 54 * S, 2, t.ink, '5x7', 1);

  // ---------- RIGHT SCENE: ABOVE THE CLOUDS + PIXEL GOAT (x 104..204, y 4..60) ----------
  // In Light+Night, invert diorama interior into a crisp obsidian starlit 1-bit plate
  const darkScene = theme === 'dark' || isNight;
  const scInk = darkScene ? '#e6edf3' : '#1f2328';
  const scMuted = darkScene ? '#8b949e' : '#656d76';
  const scFaint = darkScene ? '#30363d' : '#d0d7de';
  const scSky = isNight
    ? theme === 'dark'
      ? '#0b1017'
      : '#161b22'
    : theme === 'dark'
      ? '#141b24'
      : '#f6f8fa';
  const scFill = darkScene ? '#11161d' : '#ffffff';
  const scCloudBody = darkScene ? '#1c232e' : '#ffffff';
  const scAcc = (ACCENTS[accent] || ACCENTS.emerald)[darkScene ? 'dark' : 'light'];

  // Upper Sky Elements (x: 105..203, y: 5..35)
  const nightSkySvg = `
    ${pxRect(105, 5, 98, 40, S, scSky)}
    <!-- Soft dither horizon mist above cloud deck -->
    ${pxRect(105, 31, 98, 14, S, `url(#${uid}_d25_mist)`)}
    <!-- Crisp pixel crescent moon (top-left) -->
    ${renderSprite(
      [
        '...####.',
        '..####..',
        '.####...',
        '####....',
        '####....',
        '.####...',
        '..####..',
        '...####.',
      ],
      111,
      9,
      S,
      { '#': scInk }
    )}
    <!-- Twinkling starfield across upper sky -->
    <g class="star-a">
      ${pxRect(126, 10, 1, 1, S, scInk)}
      ${pxRect(156, 12, 1, 1, S, scInk)}
      ${pxRect(184, 9, 1, 1, S, scInk)}
      ${pxRect(197, 17, 1, 1, S, scInk)}
    </g>
    <g class="star-b">
      ${pxRect(137, 15, 1, 1, S, scInk)}
      ${pxRect(168, 9, 1, 1, S, scInk)}
      ${pxRect(192, 13, 1, 1, S, scInk)}
    </g>
    <g class="star-c">
      ${pxRect(145, 9, 1, 1, S, scAcc)}
      ${pxRect(176, 15, 1, 1, S, scAcc)}
      ${pxRect(121, 19, 1, 1, S, scMuted)}
    </g>
    <!-- Drifting high-altitude night clouds -->
    <g class="cloud-slow">
      ${renderSprite(
        [
          '....#####......',
          '..#########....',
          '.###########...',
          '#############..',
        ],
        125,
        17,
        S,
        { '#': `url(#${uid}_d50_sc)` }
      )}
      ${renderSprite(
        [
          '..####...',
          '.######..',
          '########.',
        ],
        172,
        19,
        S,
        { '#': `url(#${uid}_d50_sc)` }
      )}
    </g>
  `;

  const daySkySvg = `
    ${pxRect(105, 5, 98, 40, S, scSky)}
    <!-- Subtle upper zenith dither -->
    ${pxRect(105, 5, 98, 7, S, `url(#${uid}_d25_sc)`, 'opacity="0.45"')}
    <!-- Minimalist pixel sun (top-left) -->
    ${renderSprite(
      [
        '...#...',
        '.#.a.#.',
        '..aaa..',
        '#.aaa.#',
        '..aaa..',
        '.#.a.#.',
        '...#...',
      ],
      111,
      9,
      S,
      { '#': scMuted, a: scAcc }
    )}
    <!-- Crisp drifting daytime pixel clouds (two parallax speeds) -->
    <g class="cloud-slow">
      ${renderSprite(
        [
          '....######.....',
          '..##oooooo##...',
          '.#oooooooooo#..',
          '#oooooooooooo#.',
          '.############..',
        ],
        124,
        10,
        S,
        { '#': scInk, o: scCloudBody }
      )}
      ${renderSprite(
        [
          '...#####....',
          '.##ooooo##..',
          '#ooooooooo#.',
          '.#########..',
        ],
        177,
        15,
        S,
        { '#': scInk, o: scCloudBody }
      )}
    </g>
    <g class="cloud-mid">
      ${renderSprite(
        [
          '..####...',
          '.#oooo#..',
          '#oooooo#.',
          '.######..',
        ],
        155,
        18,
        S,
        { '#': scMuted, o: scCloudBody }
      )}
    </g>
  `;

  // Distant floating cloud bank behind workspace (y: 36..45)
  const backCloudBankSvg = `
    <g class="cloud-drift-subtle" opacity="0.65">
      ${renderSprite(
        [
          '....#####..........######................#####..........######.....',
          '..#########......##########............#########......##########...',
          '.###########....############..#####...###########....############..',
          '###################################################################',
        ],
        102,
        41,
        S,
        { '#': `url(#${uid}_d25_sc)` }
      )}
    </g>
  `;

  // Main Sculpted 1-bit Cloud Terrace & Sea of Clouds (y: 43..59)
  const cloudTerraceSvg = `
    <!-- Base cloud sea underside dither -->
    ${pxRect(105, 45, 98, 14, S, `url(#${uid}_d50_sc)`)}
    <!-- Sculpted puffy cloud body along terrace top -->
    ${renderSprite(
      [
        '..####........................................................................................####..',
        '.#oooo##....................................................................................##oooo#.',
        '#ooooooo####################################################################################ooooooo#',
        'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
        'oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
        'oooooooooooo##ooooooooooooooo###ooooooooooooooooo##ooooooooooooooooo###ooooooooooooooo##oooooooooooo',
        '###oooooo#######oooooooooo#########ooooooooooo########ooooooooooo#########ooooooooo#######oooooo####',
        '####oooo#########oooooooo###########ooooooooo##########ooooooooo###########ooooooo#########oooo#####',
      ],
      104,
      43,
      S,
      { '#': scInk, o: scCloudBody }
    )}
    <!-- Crisp horizon rim under props -->
    ${pxRect(105, 45, 98, 1, S, scInk)}
  `;

  // Alpine Potted Plant perched on cloud terrace (x: 111, y: 31..45)
  const potSprite = renderSprite(
    [
      '..#########..',
      '...#######...',
      '...#.#.#.#...',
      '....#####....',
      '....#####....',
    ],
    111,
    40,
    S,
    { '#': scInk }
  );

  let foliageSvg = '';
  if (effectivePlant === 'bloom') {
    const flowerF1 = renderSprite(
      [
        '......a......',
        '.....aaa.....',
        '......a......',
        '......#......',
        '....##.##....',
        '...###.###...',
        '......#......',
      ],
      111,
      31,
      S,
      { '#': scInk, a: scAcc }
    );
    const flowerF2 = renderSprite(
      [
        '.......a.....',
        '......aaa....',
        '.......a.....',
        '......#......',
        '.....##.##...',
        '....###.###..',
        '......#......',
      ],
      111,
      31,
      S,
      { '#': scInk, a: scAcc }
    );
    const stemBase = renderSprite(
      [
        '....##.##....',
        '.....###.....',
      ],
      111,
      38,
      S,
      { '#': scInk }
    );
    foliageSvg = `
      ${stemBase}
      <g class="sway-a">${flowerF1}</g>
      <g class="sway-b">${flowerF2}</g>
    `;
  } else if (effectivePlant === 'sprout') {
    foliageSvg = renderSprite(
      [
        '....##.##....',
        '...###.###...',
        '......#......',
        '......#......',
      ],
      111,
      36,
      S,
      { '#': scInk }
    );
  } else {
    foliageSvg = renderSprite(
      [
        '.....##......',
        '....#..#.....',
        '.......#.....',
      ],
      111,
      37,
      S,
      { '#': scMuted }
    );
  }

  // Compact Retro Terminal on the clouds (x: 132, y: 26..45)
  const computerShell = renderSprite(
    [
      '.####################.',
      '#oooooooooooooooooooo#',
      '#o##################o#',
      '#o#ssssssssssssssss#o#',
      '#o#ssssssssssssssss#o#',
      '#o#ssssssssssssssss#o#',
      '#o#ssssssssssssssss#o#',
      '#o#ssssssssssssssss#o#',
      '#o#ssssssssssssssss#o#',
      '#o#ssssssssssssssss#o#',
      '#o#ssssssssssssssss#o#',
      '#o##################o#',
      '#oooooooooooooooooooo#',
      '#oo####ooooooooooaaoo#',
      '.####################.',
      '......##########......',
      '....##############....',
      '.####################.',
      '######################',
    ],
    132,
    26,
    S,
    {
      '#': scInk,
      o: scFill,
      s: '#090d12',
      a: isActive ? scAcc : scMuted,
    }
  );

  // CRT Screen Content (x: 135..150, y: 29..36)
  const crtContent = isActive
    ? `
      ${pxRect(137, 30, 5, 1, S, '#7d8590')}
      ${pxRect(143, 30, 4, 1, S, scAcc)}
      ${pxRect(138, 32, 9, 1, S, '#e6edf3')}
      ${pxRect(138, 34, 6, 1, S, '#7d8590')}
      <g class="blink-fast">${pxRect(145, 34, 2, 1, S, scAcc)}</g>
      ${pxRect(137, 36, 3, 1, S, '#30363d')}
    `
    : `
      <g class="idle-dot">${pxRect(139, 32, 2, 2, S, '#7d8590')}</g>
    `;

  // Coffee Mug (x: 158, y: 39..45) + Animated Steam
  const mugSvg = renderSprite(
    [
      '######..',
      '#oooo###',
      '#oooo#.#',
      '#oooo###',
      '#oooo#..',
      '.####...',
    ],
    158,
    39,
    S,
    { '#': scInk, o: scFill }
  );

  const steamSvg = isActive
    ? `
      <g class="steam-a">
        ${renderSprite(
          [
            '.#..#.',
            '#..#..',
            '.#..#.',
            '..#..#',
          ],
          158,
          34,
          S,
          { '#': scMuted }
        )}
      </g>
      <g class="steam-b">
        ${renderSprite(
          [
            '#..#..',
            '.#..#.',
            '..#..#',
            '.#..#.',
          ],
          158,
          34,
          S,
          { '#': scMuted }
        )}
      </g>
    `
    : '';

  // 1-bit Pixel Mountain Goat on the Cloud Deck (x: 173, y: 30..45)
  let goatSvg = '';
  if (isActive) {
    const goatBody = renderSprite(
      [
        '.......##.##.........',
        '......#..#...........',
        '.....#####...........',
        '..##########.........',
        '.####o######.........',
        '.########............',
        '..##..#####..........',
        '...#..##########.....',
        '......############...',
        '......############...',
        '......############...',
        '.......##########....',
        '.......###....###....',
        '.......#.#....#.#....',
        '.......#.#....#.#....',
      ],
      173,
      30,
      S,
      { '#': scInk, o: scSky }
    );
    const goatBlink = `
      <g class="goat-blink">
        ${pxRect(178, 34, 1, 1, S, scInk)}
      </g>
    `;
    const tailF1 = renderSprite(
      [
        '..#.',
        '##..',
      ],
      190,
      37,
      S,
      { '#': scInk }
    );
    const tailF2 = renderSprite(
      [
        '...#',
        '###.',
      ],
      190,
      37,
      S,
      { '#': scInk }
    );
    goatSvg = `
      ${goatBody}
      ${goatBlink}
      <g class="tail-a">${tailF1}</g>
      <g class="tail-b">${tailF2}</g>
    `;
  } else {
    // Sleeping curled-up pixel mountain goat on the clouds + floating Zzz
    const goatSleep = renderSprite(
      [
        '.......##.##.........',
        '......#..#...........',
        '.....#####...........',
        '..##########.........',
        '.###########.........',
        '.########............',
        '..##..###########....',
        '...#..############.#.',
        '.....###############.',
        '.....##############..',
        '......############...',
      ],
      173,
      34,
      S,
      { '#': scInk }
    );
    const z1 = renderPixelText('Z', 188 * S, 30 * S, 2, scMuted, '3x5', 1).svg;
    const z2 = renderPixelText('Z', 192 * S, 26 * S, 2, scMuted, '3x5', 1).svg;
    goatSvg = `
      ${goatSleep}
      <g class="zzz-1">${z1}</g>
      <g class="zzz-2">${z2}</g>
    `;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" shape-rendering="crispEdges" role="img" aria-label="${safeName} — 1-bit Cloud Goat Profile">
  <defs>
    <!-- 1-bit Bayer Dither Patterns -->
    <pattern id="${uid}_d50_ink" width="8" height="8" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="4" height="4" fill="${t.inkFaint}"/>
      <rect x="4" y="4" width="4" height="4" fill="${t.inkFaint}"/>
    </pattern>
    <pattern id="${uid}_d25_sc" width="8" height="8" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="4" height="4" fill="${scFaint}"/>
    </pattern>
    <pattern id="${uid}_d50_sc" width="8" height="8" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="4" height="4" fill="${scFaint}"/>
      <rect x="4" y="4" width="4" height="4" fill="${scFaint}"/>
    </pattern>
    <pattern id="${uid}_d25_mist" width="8" height="8" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="4" height="4" fill="#233042"/>
    </pattern>
    <clipPath id="${uid}_scene_clip">
      <rect x="${105 * S}" y="${5 * S}" width="${98 * S}" height="${54 * S}"/>
    </clipPath>
  </defs>

  <style>
    .blink-cursor { animation: blink 1.1s steps(1) infinite; }
    .blink-fast { animation: blink 0.9s steps(1) infinite; }
    .pulse-led { animation: ledPulse 2.4s steps(1) infinite; }
    .star-a { animation: twinkle 3.2s steps(1) infinite; }
    .star-b { animation: twinkle 4.1s steps(1) 1.1s infinite; }
    .star-c { animation: twinkle 2.7s steps(1) 0.5s infinite; }
    .cloud-slow { animation: cloudDriftA 22s steps(22) infinite; }
    .cloud-mid { animation: cloudDriftB 15s steps(15) infinite; }
    .cloud-drift-subtle { animation: cloudBob 12s steps(6) infinite; }
    .steam-a { animation: frameA 1.6s steps(1) infinite; }
    .steam-b { animation: frameB 1.6s steps(1) infinite; }
    .sway-a { animation: frameA 4.4s steps(1) infinite; }
    .sway-b { animation: frameB 4.4s steps(1) infinite; }
    .tail-a { animation: tailA 3.4s steps(1) infinite; }
    .tail-b { animation: tailB 3.4s steps(1) infinite; }
    .goat-blink { opacity: 0; animation: goatBlink 5.0s steps(1) infinite; }
    .zzz-1 { animation: zzz1 2.8s steps(1) infinite; }
    .zzz-2 { animation: zzz2 2.8s steps(1) infinite; }
    .idle-dot { animation: idleDrift 6s steps(6) infinite; }

    @keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
    @keyframes ledPulse { 0%, 72% { opacity: 1; } 73%, 100% { opacity: 0.25; } }
    @keyframes twinkle { 0%, 62% { opacity: 1; } 63%, 88% { opacity: 0.2; } 89%, 100% { opacity: 1; } }
    @keyframes cloudDriftA { 0% { transform: translateX(-24px); } 50% { transform: translateX(20px); } 100% { transform: translateX(-24px); } }
    @keyframes cloudDriftB { 0% { transform: translateX(16px); } 50% { transform: translateX(-20px); } 100% { transform: translateX(16px); } }
    @keyframes cloudBob { 0%, 100% { transform: translateX(0px); } 50% { transform: translateX(12px); } }
    @keyframes frameA { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
    @keyframes frameB { 0%, 49% { opacity: 0; } 50%, 100% { opacity: 1; } }
    @keyframes tailA { 0%, 76% { opacity: 1; } 77%, 100% { opacity: 0; } }
    @keyframes tailB { 0%, 76% { opacity: 0; } 77%, 100% { opacity: 1; } }
    @keyframes goatBlink { 0%, 92% { opacity: 0; } 93%, 97% { opacity: 1; } 98%, 100% { opacity: 0; } }
    @keyframes zzz1 { 0%, 30% { opacity: 0; } 31%, 85% { opacity: 1; } 86%, 100% { opacity: 0; } }
    @keyframes zzz2 { 0%, 58% { opacity: 0; } 59%, 95% { opacity: 1; } 96%, 100% { opacity: 0; } }
    @keyframes idleDrift {
      0% { transform: translate(0px, 0px); }
      33% { transform: translate(24px, 8px); }
      66% { transform: translate(12px, -4px); }
      100% { transform: translate(0px, 0px); }
    }
  </style>

  <!-- Subtle 1-bit Corner Registration Marks (Transparent Canvas) -->
  ${pxRect(2, 2, 3, 1, S, t.inkFaint)}
  ${pxRect(2, 2, 1, 3, S, t.inkFaint)}
  ${pxRect(2, 62, 3, 1, S, t.inkFaint)}
  ${pxRect(2, 60, 1, 3, S, t.inkFaint)}

  <!-- LEFT HALF: Minimal Editorial Telemetry -->
  <g>
    <!-- Live Status LED -->
    <g class="pulse-led">
      ${pxRect(6, 7, 2, 2, S, isActive ? acc : t.inkMuted)}
    </g>
    ${statusText.svg}
    ${phaseText.svg}

    <!-- 1-bit Dithered Hairline Divider -->
    ${pxRect(6, 13, 90, 1, S, `url(#${uid}_d50_ink)`)}

    <!-- Pixel Display Name + Blinking Block Cursor -->
    ${nameRendered.svg}
    <rect class="blink-cursor" x="${cursorX}" y="${cursorY}" width="${cursorW}" height="${cursorH}" fill="${acc}"/>

    <!-- Pixel Tagline -->
    ${taglineRendered.svg}

    <!-- Bottom Telemetry Divider -->
    ${pxRect(6, 44, 90, 1, S, `url(#${uid}_d50_ink)`)}

    <!-- 3-Column Micro Telemetry -->
    ${col1Label.svg}
    ${col1Val.svg}
    ${pxRect(31, 48, 1, 11, S, t.inkFaint)}
    ${col2Label.svg}
    ${col2Val.svg}
    ${pxRect(63, 48, 1, 11, S, t.inkFaint)}
    ${col3Label.svg}
    ${col3Val.svg}
  </g>

  <!-- RIGHT HALF: Above the Clouds + Pixel Mountain Goat -->
  <g>
    <!-- Subtle 1-bit Dither Drop Shadow -->
    ${pxRect(106, 6, 100, 56, S, `url(#${uid}_d50_ink)`)}

    <!-- Outer 1-bit Frame (cut pixel corners) -->
    ${pxRect(105, 4, 98, 1, S, t.ink)}
    ${pxRect(105, 59, 98, 1, S, t.ink)}
    ${pxRect(104, 5, 1, 54, S, t.ink)}
    ${pxRect(203, 5, 1, 54, S, t.ink)}

    <!-- Clipped Cloud Sanctuary Scene -->
    <g clip-path="url(#${uid}_scene_clip)">
      ${isNight ? nightSkySvg : daySkySvg}
      ${backCloudBankSvg}
      ${cloudTerraceSvg}

      <!-- Cloud Terrace Props: Alpine Plant, Terminal, Coffee, Pixel Goat -->
      ${potSprite}
      ${foliageSvg}
      ${computerShell}
      ${crtContent}
      ${mugSvg}
      ${steamSvg}
      ${goatSvg}

      <!-- Bottom-Left Micro Caption Pill inside Cloud Sea -->
      ${(() => {
        const capText = `${recentCommits} COMMITS / 30D`;
        const cap = renderPixelText(capText, 110 * S, 51 * S, 2, scInk, '3x5', 1);
        const pillW = cap.width + 4 * S;
        return `<rect x="${108 * S}" y="${49 * S}" width="${pillW}" height="${7 * S}" fill="${scFill}"/>
        ${cap.svg}`;
      })()}
    </g>
  </g>
</svg>`;
}

// ---------- 1-BIT CLOUD-GOAT RUNNER (CHROME DINO STYLE CONTRIBUTION TRACK, 840 x 168) ----------

function buildSkylineSvg({
  theme = 'dark',
  accent = 'mono',
  weeks = [],
  totalCommits = 482,
} = {}) {
  const S = 4;
  const W = 210 * S; // 840
  const H = 42 * S; // 168
  const t = THEMES[theme] || THEMES.dark;
  const acc = (ACCENTS[accent] || ACCENTS.mono)[theme === 'light' ? 'light' : 'dark'];
  const uid = `r_${theme[0]}_${accent[0]}`;

  // Normalize 50 weeks of real GitHub contribution data across x: 5..205
  const cols = 50;
  const data =
    weeks.length >= cols
      ? weeks.slice(-cols)
      : Array.from({ length: cols }, (_, i) => weeks[i] ?? 0);
  const maxVal = Math.max(1, ...data);
  const groundY = 34; // crisp Dino horizon line in vpx
  const bgMaxH = 13;

  // Classic Chrome Dino HUD: left label + right HI 00000 score
  const headerLeft = renderPixelText('GOAT RUNNER // 50W', 5 * S, 2 * S, 2, t.inkMuted, '3x5', 1);
  const scoreStr = `HI ${String(totalCommits).padStart(5, '0')}`;
  const scoreW = measurePixelText(scoreStr, 2, '3x5', 1);
  const headerRight = renderPixelText(scoreStr, 205 * S - scoreW, 2 * S, 2, t.ink, '3x5', 1);

  // Layer 1 (Background): Subtle 1-bit dither silhouette of all 50 real contribution weeks
  const bgRidgeSvg = [];
  for (let i = 0; i < cols; i++) {
    const val = data[i];
    if (val <= 0) continue;
    const ratio = val / maxVal;
    const h = Math.max(2, Math.round(ratio * bgMaxH));
    const x = 5 + i * 4;
    const topY = groundY - h;
    const fill = ratio >= 0.65 ? `url(#${uid}_d50)` : `url(#${uid}_d25)`;
    bgRidgeSvg.push(pxRect(x, topY, 3, h, S, fill));
  }

  // Seamless repeating parallax clouds (tile width = 200 vpx = 800px)
  const buildCloudTile = (offsetX) => `
    ${renderSprite(
      [
        '...#####....',
        '.#########..',
        '###########.',
      ],
      offsetX + 38,
      11,
      S,
      { '#': t.inkFaint }
    )}
    ${renderSprite(
      [
        '..####...',
        '.######..',
        '########.',
      ],
      offsetX + 126,
      13,
      S,
      { '#': t.inkFaint }
    )}
    ${renderSprite(
      [
        '..###..',
        '.#####.',
      ],
      offsetX + 178,
      10,
      S,
      { '#': t.inkFaint }
    )}
  `;

  // Seamless repeating Chrome-Dino scrolling ground pebbles + 3 pixel obstacles (tile width = 200 vpx)
  // Goat center is at x = 33 vpx; obstacles at x = 83 (25%), x = 143 (55%), x = 197 (82%)
  const buildTrackTile = (offsetX) => {
    // Ground dust speckles & dashes
    const speckles = [
      [12, 35, 3], [27, 36, 2], [44, 35, 4], [63, 36, 2],
      [77, 35, 2], [96, 36, 5], [115, 35, 3], [131, 36, 2],
      [154, 35, 4], [171, 36, 3], [188, 35, 2], [202, 36, 2],
    ]
      .map(([sx, sy, sw]) => pxRect(offsetX + sx, sy, sw, 1, S, t.inkMuted))
      .join('');

    // Obstacle 1 (x = 80..86, center 83, height 8): Classic pixel cactus
    const cactusTall = renderSprite(
      [
        '...#...',
        '#..#...',
        '#..#..#',
        '#..#..#',
        '####..#',
        '...####',
        '...#...',
        '...#...',
      ],
      offsetX + 80,
      groundY - 8,
      S,
      { '#': t.ink }
    );

    // Obstacle 2 (x = 138..148, center 143, height 6): Double commit cactus cluster
    const cactusDouble = renderSprite(
      [
        '..#.....#..',
        '#.#...#.#..',
        '###.#.#.#.#',
        '..###.###.#',
        '..#.....###',
        '..#.....#..',
      ],
      offsetX + 138,
      groundY - 6,
      S,
      { '#': t.ink }
    );

    // Obstacle 3 (x = 193..200, center 197, height 7): Sharp pixel commit spire
    const spire = renderSprite(
      [
        '...a...',
        '...#...',
        '..###..',
        '..###.#',
        '.#####.',
        '#######',
        '#######',
      ],
      offsetX + 193,
      groundY - 7,
      S,
      { '#': t.ink, a: acc }
    );

    return `${speckles}${cactusTall}${cactusDouble}${spire}`;
  };

  // Right-facing Galloping 1-bit Pixel Mountain Goat (x: 24..43, y: 20..34)
  const goatTorso = renderSprite(
    [
      '.........##.##......',
      '...........#..#.....',
      '..........#####.....',
      '.........##########.',
      '.........######o####',
      '............########',
      '..........#####..##.',
      '.#..##########...#..',
      '..############......',
      '...###########......',
      '...##########.......',
    ],
    24,
    20,
    S,
    { '#': t.ink, o: t.surface }
  );

  // Gallop Frame A (legs stretched wide)
  const legsA = renderSprite(
    [
      '..##........##......',
      '.#...........##.....',
      '#.............#.....',
    ],
    24,
    31,
    S,
    { '#': t.ink }
  );

  // Gallop Frame B (legs tucked together)
  const legsB = renderSprite(
    [
      '....##....##........',
      '.....#....#.........',
      '.....#...#..........',
    ],
    24,
    31,
    S,
    { '#': t.ink }
  );

  // Minimal axis labels below ground
  const labels = [
    { text: '50W AGO', x: 5 * S },
    { text: '25W AGO', x: 96 * S },
    { text: 'NOW', x: 205 * S - measurePixelText('NOW', 2, '3x5', 1) },
  ]
    .map((l) => renderPixelText(l.text, l.x, 38 * S, 2, t.inkMuted, '3x5', 1).svg)
    .join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" shape-rendering="crispEdges" role="img" aria-label="1-bit Cloud Goat Contribution Runner">
  <defs>
    <pattern id="${uid}_d25" width="8" height="8" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="4" height="4" fill="${t.inkFaint}"/>
    </pattern>
    <pattern id="${uid}_d50" width="8" height="8" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="4" height="4" fill="${t.inkMuted}"/>
      <rect x="4" y="4" width="4" height="4" fill="${t.inkMuted}"/>
    </pattern>
    <clipPath id="${uid}_track_clip">
      <rect x="${5 * S}" y="${8 * S}" width="${200 * S}" height="${29 * S}"/>
    </clipPath>
  </defs>

  <style>
    .track-scroll { animation: scrollTrack 8s steps(200) infinite; }
    .cloud-scroll { animation: scrollTrack 24s steps(100) infinite; }
    .goat-jump { animation: goatJump 8s steps(1) infinite; }
    .run-a { animation: runA 0.24s steps(1) infinite; }
    .run-b { animation: runB 0.24s steps(1) infinite; }

    @keyframes scrollTrack {
      0% { transform: translateX(0px); }
      100% { transform: translateX(-800px); }
    }
    @keyframes runA { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
    @keyframes runB { 0%, 49% { opacity: 0; } 50%, 100% { opacity: 1; } }

    /* Synchronized parabolic pixel jumps peaking at 25%, 55%, and 82% */
    @keyframes goatJump {
      0%, 17% { transform: translateY(0px); }
      19% { transform: translateY(-16px); }
      21% { transform: translateY(-32px); }
      23% { transform: translateY(-44px); }
      25% { transform: translateY(-48px); }
      27% { transform: translateY(-44px); }
      29% { transform: translateY(-32px); }
      31% { transform: translateY(-16px); }
      33%, 47% { transform: translateY(0px); }

      49% { transform: translateY(-16px); }
      51% { transform: translateY(-32px); }
      53% { transform: translateY(-44px); }
      55% { transform: translateY(-48px); }
      57% { transform: translateY(-44px); }
      59% { transform: translateY(-32px); }
      61% { transform: translateY(-16px); }
      63%, 74% { transform: translateY(0px); }

      76% { transform: translateY(-16px); }
      78% { transform: translateY(-32px); }
      80% { transform: translateY(-44px); }
      82% { transform: translateY(-48px); }
      84% { transform: translateY(-44px); }
      86% { transform: translateY(-32px); }
      88% { transform: translateY(-16px); }
      90%, 100% { transform: translateY(0px); }
    }
  </style>

  <!-- Chrome-Dino HUD Bar -->
  ${headerLeft.svg}
  ${headerRight.svg}
  ${pxRect(5, 7, 200, 1, S, `url(#${uid}_d25)`)}

  <!-- Clipped Infinite Runner Stage -->
  <g clip-path="url(#${uid}_track_clip)">
    <!-- Subtle 50-Week Real Contribution Ridge Silhouette in Background -->
    <g opacity="0.34">
      ${bgRidgeSvg.join('\n      ')}
    </g>

    <!-- Parallax High-Altitude Pixel Clouds -->
    <g class="cloud-scroll" opacity="0.65">
      ${buildCloudTile(0)}
      ${buildCloudTile(200)}
    </g>

    <!-- Scrolling Obstacles & Ground Dust -->
    <g class="track-scroll">
      ${buildTrackTile(0)}
      ${buildTrackTile(200)}
    </g>

    <!-- Crisp Chrome-Dino Ground Horizon -->
    ${pxRect(5, groundY, 200, 1, S, t.ink)}

    <!-- Galloping & Jumping 1-bit Pixel Mountain Goat -->
    <g class="goat-jump">
      ${goatTorso}
      <g class="run-a">${legsA}</g>
      <g class="run-b">${legsB}</g>
    </g>
  </g>

  <!-- Subtle Timeline Ticks -->
  ${labels}
</svg>`;
}

// ---------- 1-BIT PIXEL PROJECT SHOWCASE CARD SVG (408 x 136) ----------

function escapeXml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatStars(n) {
  if (typeof n !== 'number' || Number.isNaN(n)) return '0';
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}K`;
  return String(n);
}

function buildProjectCardSvg({
  theme = 'dark',
  accent = 'mono',
  id = 'card',
  role = 'AUTHOR // TOOL',
  title = 'PROJECT',
  lines = ['', ''],
  tags = 'JS',
  stars = 0,
  icon = 'tree', // 'tree' | 'graph'
} = {}) {
  const W = 408;
  const H = 136;
  const t = THEMES[theme] || THEMES.dark;
  const acc = (ACCENTS[accent] || ACCENTS.mono)[theme === 'light' ? 'light' : 'dark'];
  const uid = `c_${id}_${theme[0]}`;

  const roleRendered = renderPixelText(role, 28, 16, 2, t.inkMuted, '3x5', 1);
  const starStr = formatStars(stars);
  const starTextW = measurePixelText(starStr, 2, '3x5', 1);
  const starTextX = 384 - starTextW;
  const starRendered = renderPixelText(starStr, starTextX, 16, 2, t.ink, '3x5', 1);

  // Tiny 5x5 pixel star icon to the left of the star count
  const starIconX = Math.floor((starTextX - 16) / 2);
  const starGlyph = renderSprite(
    [
      '..#..',
      '.###.',
      '#####',
      '.###.',
      '.#.#.',
    ],
    starIconX,
    8,
    2,
    { '#': acc }
  );

  // Crisp 5x7 pixel title (scale 2 -> 14px tall)
  const titleRendered = renderPixelText(title, 18, 44, 2, t.ink, '5x7', 1);
  const tagsRendered = renderPixelText(tags, 18, 108, 2, t.inkMuted, '3x5', 1);

  // Subtle bottom-right 1-bit pixel icon (tree for trajectory-tree, node graph for archify)
  const miniIcon =
    icon === 'graph'
      ? renderSprite(
          [
            '.###.......',
            '.#.#..###..',
            '.###..#.#..',
            '..#...###..',
            '..#####....',
            '......###..',
            '......#.#..',
            '......###..',
          ],
          181,
          50,
          2,
          { '#': t.inkMuted }
        )
      : renderSprite(
          [
            '....###....',
            '....#.#....',
            '....###....',
            '.....#.....',
            '.#########.',
            '.#...#...#.',
            '###.###.###',
            '###.###.###',
          ],
          181,
          50,
          2,
          { '#': t.inkMuted }
        );

  const line1 = escapeXml(lines[0] || '');
  const line2 = escapeXml(lines[1] || '');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" shape-rendering="crispEdges" role="img" aria-label="${escapeXml(title)}">
  <defs>
    <pattern id="${uid}_d50" width="8" height="8" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="4" height="4" fill="${t.inkFaint}"/>
      <rect x="4" y="4" width="4" height="4" fill="${t.inkFaint}"/>
    </pattern>
  </defs>

  <style>
    .card-dot { animation: cardPulse 2.8s steps(1) infinite; }
    @keyframes cardPulse { 0%, 72% { opacity: 1; } 73%, 100% { opacity: 0.25; } }
    .desc {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 11.5px;
      fill: ${t.inkMuted};
    }
  </style>

  <!-- 1-bit Dither Drop Shadow -->
  <rect x="6" y="6" width="402" height="130" fill="url(#${uid}_d50)"/>

  <!-- Card Body (cut pixel corners) -->
  <rect x="2" y="2" width="398" height="126" fill="${t.panelBg}"/>
  <rect x="4" y="0" width="394" height="2" fill="${t.ink}"/>
  <rect x="4" y="128" width="394" height="2" fill="${t.ink}"/>
  <rect x="2" y="2" width="2" height="126" fill="${t.ink}"/>
  <rect x="398" y="2" width="2" height="126" fill="${t.ink}"/>

  <!-- Header Row: Role + Live Stars -->
  <rect class="card-dot" x="18" y="18" width="4" height="4" fill="${acc}"/>
  ${roleRendered.svg}
  ${starGlyph}
  ${starRendered.svg}

  <!-- Dithered Hairline -->
  <rect x="18" y="32" width="366" height="2" fill="url(#${uid}_d50)"/>

  <!-- Pixel Title -->
  ${titleRendered.svg}

  <!-- Clean Monospace Description -->
  <text x="18" y="77" class="desc" shape-rendering="auto">${line1}</text>
  <text x="18" y="94" class="desc" shape-rendering="auto">${line2}</text>

  <!-- Footer Tags + Mini Pixel Glyph -->
  ${tagsRendered.svg}
  ${miniIcon}
</svg>`;
}

  const DEFAULT_CONFIG = {
  "username": "goatliamia",
  "displayName": "GOATLIAMIA",
  "tagline": "AGENT TOOLS // ABOVE THE CLOUDS",
  "timezoneOffset": 8,
  "accent": "mono",
  "focus": "BUILDING",
  "bio": "Building agent tools, trace visualizers, and quiet minimal interfaces — somewhere above the clouds.",
  "now": "Working on trajectory-tree & contributing Code Analysis + Story choreography to archify.",
  "projects": [
    {
      "id": "trajectory",
      "repo": "goatliamia/trajectory-tree",
      "url": "https://github.com/goatliamia/trajectory-tree",
      "role": "AUTHOR // TOOL",
      "title": "TRAJECTORY-TREE",
      "lines": [
        "Agent trace visualizer, eval metrics",
        "& evidence-linked reports."
      ],
      "tags": "JS // AGENT EVAL",
      "icon": "tree",
      "fallbackStars": 8
    },
    {
      "id": "archify",
      "repo": "tt-a1i/archify",
      "url": "https://github.com/tt-a1i/archify",
      "role": "CONTRIBUTOR // OSS",
      "title": "TT-A1I/ARCHIFY",
      "lines": [
        "Interactive diagrams — Code Analysis,",
        "Atlas & Story choreography."
      ],
      "tags": "CODE ANALYSIS // STORY",
      "icon": "graph",
      "fallbackStars": 98678
    }
  ],
  "links": [
    {
      "label": "github",
      "url": "https://github.com/goatliamia"
    },
    {
      "label": "trajectory-tree",
      "url": "https://github.com/goatliamia/trajectory-tree"
    },
    {
      "label": "archify",
      "url": "https://github.com/tt-a1i/archify"
    }
  ]
};
  const DEFAULT_STATS = {
  "weeks": [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    55,
    111,
    69,
    11,
    35,
    17,
    0,
    4,
    27,
    83,
    53,
    35,
    42,
    7
  ],
  "totalCommits": 549,
  "recentCommits30d": 154,
  "recentCommits7d": 11,
  "streakDays": 0
};
  const DEFAULT_CLOCK = {
  "timeOfDay": "night",
  "localTimeStr": "01:56"
};
  const CARD_STARS = {
  "trajectory": 9,
  "archify": 100477
};
  return {
    ACCENTS,
    THEMES,
    buildHeroSvg,
    buildSkylineSvg,
    buildProjectCardSvg,
    DEFAULT_CONFIG,
    DEFAULT_STATS,
    DEFAULT_CLOCK,
    CARD_STARS,
  };
})();
