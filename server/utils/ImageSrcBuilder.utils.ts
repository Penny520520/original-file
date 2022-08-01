import { imageUrlBuilder, SanityImageSource } from '~/server/packages';
import { cmsClient } from '~/server/constants';

const builder = imageUrlBuilder(cmsClient);

export function imageSrcBuilder(source: SanityImageSource): string {
  return builder.image(source).width(3840).quality(100).url();
}
