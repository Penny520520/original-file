import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from 'next';
import {
  getNewsArticleBySlugAsync,
  getNewsArticlesAsync,
  ISingleNewsArticle,
} from '~/server/utils';
import {
  ArrowForContent,
  Breadcrumbs,
  ContentCard,
  Typography,
} from '~/components';
import { mergeClassNames, RenderEitherOr } from '~/utils';
import styles from 'styles/pages/NewsArticlePage.styles.module.scss';
import { ParsedUrlQuery, PortableText } from '~/packages';
import { useImage } from '~/hooks';

export default function NewsArticlePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
): JSX.Element {
  return (
    <section
      className={mergeClassNames(styles.container, styles.pageItemContainer)}
    >
      <section
        className={mergeClassNames(styles.breadcrumbs, styles.pageItemRow)}
      >
        <Breadcrumbs />
      </section>
      <section className={mergeClassNames(styles.header, styles.pageItemRow)}>
        <Typography tag="h1">
          {props.newsArticle.slug.replace(/_/g, ` `)}
        </Typography>
      </section>
      <section className={mergeClassNames(styles.body, styles.pageItemRow)}>
        <PortableText
          content={props.newsArticle.body}
          serializers={{
            h1: NewsArticleTitle,
            h2: NewsArticleSubtitle,
            link: NewsArticleLink,
            newsArticleImage: NewsArticleImage,
            normal: NewsArticleText,
          }}
        />
      </section>
      <section className={mergeClassNames(styles.footer, styles.pageItemRow)}>
        <a
          href={props.newsArticle.href}
          rel="noopener noreferrer"
          target="_blank"
        >
          <ArrowForContent>Full article</ArrowForContent>
        </a>
      </section>
    </section>
  );
}

interface INewsArticleImageProps {
  _key: string;
  _type: 'newsArticleImage';
  alt: string;
  picture: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  title: string;
}

function NewsArticleImage(props: INewsArticleImageProps): JSX.Element {
  const { height, width, blurDataURL, loader, src } = useImage(
    props.picture.asset,
    {
      enableBlurUp: true,
    }
  );

  return (
    <section className={styles.newsArticleImageContainer}>
      <ContentCard
        alt={props.alt}
        aspectRatio={width / height}
        imageClassName={mergeClassNames(
          styles.newsArticleImage,
          styles.pageItemImage
        )}
        imageProps={{
          blurDataURL,
          layout: `fill`,
          loader,
          placeholder: `blur`,
          src,
        }}
        title={
          <RenderEitherOr
            ifTrue={props.title}
            thenRender={title => (
              <Typography className={styles.newsArticleImageTitle}>
                {title}
              </Typography>
            )}
          />
        }
      />
    </section>
  );
}

interface INewsArticleTitleProps {
  children: [string];
}

function NewsArticleTitle(props: INewsArticleTitleProps): JSX.Element {
  return (
    <Typography className={styles.newsArticleTitle} tag="h1">
      {props.children}
    </Typography>
  );
}

interface INewsArticleSubtitleProps {
  children: [string];
}

function NewsArticleSubtitle(props: INewsArticleSubtitleProps): JSX.Element {
  return (
    <Typography className={styles.newsArticleSubtitle} tag="h2">
      {props.children}
    </Typography>
  );
}

interface INewsArticleLinkProps {
  children: [string];
  href: string;
}

function NewsArticleLink(props: INewsArticleLinkProps): JSX.Element {
  return (
    <a
      className={styles.newsArticleLink}
      href={props.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {props.children}
    </a>
  );
}

interface INewsArticleTextProps {
  children: [string];
}

function NewsArticleText(props: INewsArticleTextProps): JSX.Element {
  return (
    <Typography className={styles.newsArticleText}>{props.children}</Typography>
  );
}

interface ISingleNewsPageParams extends ParsedUrlQuery {
  publishedDate: string;
}

export async function getStaticPaths(): Promise<
  GetStaticPathsResult<ISingleNewsPageParams>
> {
  const newsArticles = await getNewsArticlesAsync();

  return {
    fallback: false,
    paths:
      typeof newsArticles === `string`
        ? []
        : newsArticles.map(article => ({
            params: {
              publishedDate: article.slug,
            },
          })),
  };
}

interface ISingleNewsArticlePageProps {
  newsArticle: ISingleNewsArticle;
}

export async function getStaticProps(
  context: GetStaticPropsContext<ISingleNewsPageParams>
): Promise<GetStaticPropsResult<ISingleNewsArticlePageProps>> {
  if (context.params) {
    const newsArticle = await getNewsArticleBySlugAsync(
      context.params.publishedDate
    );

    if (typeof newsArticle !== `string`) {
      return {
        props: {
          newsArticle,
        },
      };
    }

    return {
      notFound: true,
    };
  }

  return {
    notFound: true,
  };
}
