import styles from './MidContentImage.styles.module.scss';
import { mergeClassNames } from '~/utils';
import Image from 'next/image';
import { CSSProperties } from 'react';
import { Property } from 'csstype';

interface IMidContentImageProps {
  alt: string;
  aspectRatio: Property.AspectRatio;
  bottomColor: string;
  image: StaticImageData;
  topColor: string;
}

export function MidContentImage({
  alt,
  aspectRatio,
  bottomColor,
  image,
  topColor,
}: IMidContentImageProps): JSX.Element {
  return (
    <section
      className={mergeClassNames(
        styles.midContentImageSection,
        styles.pageItemContainer
      )}
    >
      <section
        className={styles.midContentImageSectionTopBlock}
        style={{ [`--bg-color`]: topColor } as CSSProperties}
      />
      <section
        className={styles.midContentImageSectionBottomBlock}
        style={{ [`--bg-color`]: bottomColor } as CSSProperties}
      />
      <section
        className={mergeClassNames(styles.midContentRow, styles.pageItemRow)}
      >
        <section
          className={styles.midContentImageSectionImageContainer}
          style={{ aspectRatio }}
        >
          <Image
            alt={alt}
            layout="fill"
            placeholder="blur"
            priority={true}
            quality={100}
            src={image}
          />
        </section>
      </section>
    </section>
  );
}
