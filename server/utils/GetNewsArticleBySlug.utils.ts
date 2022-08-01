import { cmsClient } from '~/server/constants';
import { strings } from '~/localization';
import { PortableTextBlock } from '~/packages';

export interface ISingleNewsArticle {
  body: Array<PortableTextBlock>;
  href: string;
  slug: string;
}

export async function getNewsArticleBySlugAsync(
  slug: string
): Promise<ISingleNewsArticle | string> {
  const data = await cmsClient.fetch<ISingleNewsArticle>(
    `*[_type == 'newsArticle' && slug.current == $slug][0]{
      body,
      'href': fullArticleLink,
      'slug': slug.current,
    }`,
    { slug }
  );

  if (data) {
    return data;
  }

  return strings.internalServerErrorMessage;
}
