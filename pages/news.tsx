import { GetStaticPropsResult, InferGetStaticPropsType } from 'next';
import { getNewsArticlesAsync, INewsArticle } from '~/server/utils';
import { Breadcrumbs, ContentCard, Typography } from '~/components';
import { mergeClassNames, RenderList } from '~/utils';
import styles from 'styles/pages/NewsPage.styles.module.scss';

export default function NewsPage(
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
      <section className={mergeClassNames(styles.list, styles.pageItemRow)}>
        <RenderList
          items={props.newsArticles}
          renderItem={article => {
            return (
              <ContentCard
                key={article.id}
                alt={article.title}
                containerClassName={styles.listItem}
                href={`/news/${article.slug.replace(/\s/g, `_`)}`}
                imageClassName={styles.image}
                imageProps={{
                  layout: `fill`,
                  objectFit: `cover`,
                  src: article.mainImage.picture.src,
                }}
                subtitle={
                  <Typography className={styles.subtitle}>
                    {article.slug.replace(/_/g, ` `)}
                  </Typography>
                }
                title={
                  <Typography className={styles.title} tag="h2">
                    {article.title}
                  </Typography>
                }
              />
            );
          }}
        />
      </section>
    </section>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<{
    newsArticles: Array<INewsArticle>;
  }>
> {
  const newsArticles = await getNewsArticlesAsync();

  return {
    props: {
      newsArticles: typeof newsArticles === `string` ? [] : newsArticles,
    },
  };
}
