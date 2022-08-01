import { cmsClient } from '~/server/constants';
import { strings } from '~/localization';
import { SanityImageSource } from '~/server/packages';
import { imageSrcBuilder, imageSrcSetBuilder } from '~/server/utils';

type MainImage = {
  picture: {
    aspectRatio: number;
    asset: SanityImageSource;
  };
  title: string;
};

export interface INewsArticle {
  id: string;
  mainImage: {
    picture: {
      aspectRatio: number;
      src: string;
      srcSet: string;
    };
    title: string;
  };
  slug: string;
  title: string;
}

export async function getNewsArticlesAsync(
  count?: number
): Promise<Array<INewsArticle> | string> {
  const data = count
    ? await cmsClient.fetch<
        Array<
          Omit<INewsArticle, `mainImage`> & {
            mainImage: MainImage;
          }
        >
      >(
        `*[_type == 'newsArticle'] | order(publishedAt desc)[0...$count]{
          'id': _id,
          mainImage {
            'picture': {
              'aspectRatio': picture.asset->.metadata.dimensions.aspectRatio,
              'asset': picture.asset,
            },
            title,
          },
          'slug': slug.current,
          title,
        }`,
        { count }
      )
    : await cmsClient.fetch<
        Array<
          Omit<INewsArticle, `mainImage`> & {
            mainImage: MainImage;
          }
        >
      >(
        `*[_type == 'newsArticle'] | order(publishedAt desc){
          'id': _id,
          mainImage {
            'picture': {
              'aspectRatio': metadata.dimensions.aspectRatio,
              'asset': picture.asset,
            },
            title,
          },
          'slug': slug.current,
          title,
        }`
      );

  if (data) {
    return data.map(item => {
      const src = imageSrcBuilder(item.mainImage.picture.asset);
      const srcSet = imageSrcSetBuilder(item.mainImage.picture.asset);

      return {
        ...item,
        mainImage: {
          picture: {
            aspectRatio: item.mainImage.picture.aspectRatio,
            src,
            srcSet,
          },
          title: item.mainImage.title,
        },
      };
    });
  }

  return strings.internalServerErrorMessage;
}
