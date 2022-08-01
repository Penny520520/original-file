import { imageUrlBuilder, SanityImageSource } from '~/server/packages';
import { cmsClient } from '~/server/constants';

const builder = imageUrlBuilder(cmsClient);

export function imageSrcSetBuilder(source: SanityImageSource): string {
  const image_640 = builder.image(source).width(640).quality(100).url();
  const image_750 = builder.image(source).width(750).quality(100).url();
  const image_828 = builder.image(source).width(828).quality(100).url();
  const image_1080 = builder.image(source).width(1080).quality(100).url();
  const image_1200 = builder.image(source).width(1200).quality(100).url();
  const image_1920 = builder.image(source).width(1920).quality(100).url();
  const image_2048 = builder.image(source).width(2048).quality(100).url();
  const image_3840 = builder.image(source).width(3840).quality(100).url();

  return `
    ${image_640} 640w,
    ${image_750} 750w,
    ${image_828} 828w,
    ${image_1080} 1080w,
    ${image_1200} 1200w,
    ${image_1920} 1920w,
    ${image_2048} 2048w,
    ${image_3840} 3840w
  `;
}
