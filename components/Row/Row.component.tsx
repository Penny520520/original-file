import { CSSProperties, ReactNode } from 'react';
import { mergeClassNames } from '~/utils';
import styles from './Row.styles.module.scss';

interface IRowProps {
  className?: string;
  children?: ReactNode | Array<ReactNode>;
  style?: CSSProperties;
}

export function Row({ children, className, style }: IRowProps): JSX.Element {
  return (
    <section
      className={mergeClassNames(styles.container, className)}
      style={style}
    >
      {children}
    </section>
  );
}
