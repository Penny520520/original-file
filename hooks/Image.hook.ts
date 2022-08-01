import { cmsClient } from '~/constants';
import {
  SanityImageSource,
  useNextSanityImage,
  UseNextSanityImageOptions,
  UseNextSanityImageProps,
} from '~/packages';

interface IUseImageOptions extends UseNextSanityImageOptions {
  enableBlurUp?: true;
}

interface IUseImage extends Required<UseNextSanityImageProps> {
  placeholder: `blur`;
}

export function useImage(
  image: SanityImageSource,
  options?: IUseImageOptions
): IUseImage {
  return useNextSanityImage(cmsClient, image, options);
}
