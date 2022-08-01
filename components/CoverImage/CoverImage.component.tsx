import { Typography } from '~/components';
import Image, { ImageProps } from 'next/image';
import { mergeClassNames, RenderEitherOr } from '~/utils';
import styles from './CoverImage.styles.module.scss';
import { ReactNode } from 'react';

interface ICoverImageProps extends ImageProps {
  arrowForContent?: ReactNode;
  title?: string;
}

export function CoverImage({
  arrowForContent,
  alt = ``,
  className,
  title,
  ...props
}: ICoverImageProps): JSX.Element {
  return (
    <section className={mergeClassNames(styles.container, className)}>
      <Image {...props} alt={alt} />
      <RenderEitherOr
        ifTrue={title}
        thenRender={titleText => (
          <section className={styles.titleOverlay}>
            <section className={styles.title}>
              <RenderEitherOr
                ifTrue={arrowForContent}
                thenRender={<>{arrowForContent}</>}
                otherwiseRender={<Typography tag="h2">{titleText}</Typography>}
              />
            </section>
          </section>
        )}
      />
    </section>
  );
}
