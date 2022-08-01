/**
 * Converts the given points to rems.
 * @param pt The given points
 * @returns The given points in rems
 */
export function ptToRem(pt: number): string {
  return `${pt * 0.0836}rem`;
}
