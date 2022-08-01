import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { CSSProperties, ReactNode } from 'react';
import { ArrowForContent } from '~/components';
import { useBoolean } from '~/hooks';
import { mergeClassNames, RenderEitherOr } from '~/utils';
import styles from './ContentCard.styles.module.scss';

interface IContentCardProps {
  alt: string;
  aspectRatio?: number;
  containerClassName?: string;
  imageClassName: string;
  imageProps: ImageProps;
  href?: string;
  subtitle?: ReactNode;
  title?: ReactNode;
}

export function ContentCard({
  containerClassName,
  href,
  ...props
}: IContentCardProps): JSX.Element {
  const [showArrow, actions] = useBoolean();

  return (
    <RenderEitherOr
      ifTrue={href}
      thenRender={link => {
        return (
          <Link href={link} passHref={true}>
            <a
              className={containerClassName}
              onBlur={actions.setFalse}
              onFocus={actions.setTrue}
              onMouseLeave={actions.setFalse}
              onMouseOver={actions.setTrue}
            >
              <Content {...props} showArrow={showArrow} />
            </a>
          </Link>
        );
      }}
      otherwiseRender={
        <section>
          <Content {...props} showArrow={showArrow} />
        </section>
      }
    />
  );
}

interface IContentProps extends IContentCardProps {
  showArrow: boolean;
}

function Content({
  alt,
  aspectRatio,
  imageClassName,
  imageProps,
  showArrow,
  subtitle,
  title,
}: IContentProps): JSX.Element {
  return (
    <>
      <section
        className={imageClassName}
        style={
          typeof aspectRatio === `number`
            ? ({
                [`--content-card-image-aspect-ratio`]: aspectRatio,
              } as CSSProperties)
            : undefined
        }
      >
        <ArrowForContent
          arrowClassName={mergeClassNames(
            styles.arrow,
            showArrow && styles.arrowHovered
          )}
        />
        <Image alt={alt} {...imageProps} />
      </section>
      <section>
        {title}
        {subtitle}
      </section>
    </>
  );
}
