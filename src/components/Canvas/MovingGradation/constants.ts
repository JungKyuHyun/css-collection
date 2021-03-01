export type RGB_TYPE = { r: number; g: number; b: number };

const COLORS: ReadonlyArray<RGB_TYPE> = [
  { r: 45, g: 74, b: 227 }, // blue
  { r: 250, g: 255, b: 89 }, // yellow
  { r: 255, g: 104, b: 248 }, // pupple
  { r: 44, g: 209, b: 252 }, // skyblue
  { r: 54, g: 233, b: 84 }, // green
];

const TOTAL_PARTICLES = 15;

const MAX_RADIUS = 900;

const MIN_RADIUS = 400;

const PI2 = Math.PI * 2;

export { COLORS, TOTAL_PARTICLES, MAX_RADIUS, MIN_RADIUS, PI2 };
