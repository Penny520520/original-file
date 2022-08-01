import { Fragment } from 'react';
import { RenderEitherOr, RenderList } from '~/utils';
import styles from './LineBreakText.styles.module.scss';

interface ILineBreakTextProps {
  separator?: string;
  text: string;
  renderTextItem?(textItem: string, index: number): JSX.Element;
}

export function LineBreakText({
  separator = `{0}`,
  text,
  renderTextItem,
}: ILineBreakTextProps): JSX.Element {
  return (
    <RenderList
      items={text.split(separator).map(textItem => textItem.trim())}
      renderItem={(
        textItem: string,
        index: number,
        array: Array<string>
      ): JSX.Element => {
        return (
          <Fragment key={textItem}>
            <RenderEitherOr
              ifTrue={renderTextItem}
              thenRender={renderTextItemCallback => {
                return renderTextItemCallback(textItem, index);
              }}
              otherwiseRender={<span className={styles.text}>{textItem}</span>}
            />
            <RenderEitherOr
              ifTrue={index + 1 !== array.length}
              thenRender={<br />}
            />
          </Fragment>
        );
      }}
    />
  );
}
