import { strings } from '~/localization';
import { useRouter } from 'next/router';
import { RenderEitherOr, RenderList } from '~/utils';
import {
  ArrowForContent,
  ContentPosition,
  Row,
  Typography,
} from '~/components';
import styles from './Breadcrumbs.styles.module.scss';
import Link from 'next/link';

export function Breadcrumbs(): JSX.Element {
  const { pathname, query } = useRouter();

  return (
    <RenderEitherOr
      ifTrue={pathname && pathname !== `/` && pathname}
      thenRender={path => (
        <Row className={styles.container}>
          <Link href="/" passHref={true}>
            <a>
              <Typography>{strings.homePageTitle}</Typography>
            </a>
          </Link>
          <RenderList
            items={path.split(`/`).filter(Boolean)}
            renderItem={(pathSegment, index, segments) => {
              const breadcrumb = pathSegment.startsWith(`[`)
                ? String(
                    query[pathSegment.replace(/\[/g, ``).replace(/\]/g, ``)]
                  ).replace(/_/g, ` `)
                : pathSegment.replace(/_/g, ` `);

              const breadcrumbHref = breadcrumb.replace(/\s/g, `_`);

              return (
                <Link
                  key={breadcrumb}
                  href={`/${
                    index === 0
                      ? ``
                      : `${segments[index - 1].replace(/\s/g, `_`)}/`
                  }${breadcrumbHref}`}
                  passHref={true}
                >
                  <a className={styles.segment}>
                    <ArrowForContent
                      contentPosition={ContentPosition.AFTER}
                      scale={0.6}
                    >
                      <Typography>{`${breadcrumb[0].toUpperCase()}${breadcrumb.substring(
                        1
                      )}`}</Typography>
                    </ArrowForContent>
                  </a>
                </Link>
              );
            }}
          />
        </Row>
      )}
    />
  );
}
