/**
 * Converts the given pixels to rems.
 * @param px The given pixels
 * @returns The given pixels in rems
 */
export function pxToRem(px: number): string {
  return `${px / 16}rem`;
}
