import { PropsWithChildren } from 'react';
import { mergeClassNames, RenderEitherOr } from '~/utils';
import styles from './ArrowForContent.styles.module.scss';

export enum ContentPosition {
  AFTER = 'after',
  BEFORE = 'before',
  BOTH = 'Both',
}

interface IArrowForContentProps {
  arrowClassName?: string;
  contentPosition?: ContentPosition;
  hideArrow?: boolean;
  scale?: number;
}

export function ArrowForContent({
  arrowClassName,
  children,
  contentPosition = ContentPosition.BEFORE,
  hideArrow,
  scale = 1,
}: PropsWithChildren<IArrowForContentProps>): JSX.Element {
  const baseHeight = 16;
  const baseWidth = 25;
  const firstChild = Array.isArray(children) ? children[0] : children;
  const lastChild = Array.isArray(children) ? children[1] : children;

  return (
    <>
      <RenderEitherOr
        ifTrue={[ContentPosition.BEFORE, ContentPosition.BOTH].includes(
          contentPosition
        )}
        thenRender={<>{firstChild}</>}
      />
      <RenderEitherOr
        ifTrue={!hideArrow}
        thenRender={
          <svg
            className={mergeClassNames(styles.arrow, arrowClassName)}
            viewBox="0 0 120 80"
            height={scale * baseHeight}
            width={scale * baseWidth}
          >
            <line x1="0" y1="40" x2="100" y2="40"></line>
            <line x1="70" y1="10" x2="100" y2="43"></line>
            <line x1="70" y1="70" x2="100" y2="37"></line>
          </svg>
        }
      />
      <RenderEitherOr
        ifTrue={[ContentPosition.AFTER, ContentPosition.BOTH].includes(
          contentPosition
        )}
        thenRender={<>{lastChild}</>}
      />
    </>
  );
}
