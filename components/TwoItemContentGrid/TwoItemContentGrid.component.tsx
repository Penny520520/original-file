import { CSSProperties, PropsWithChildren } from 'react';
import styles from './TwoItemContentGrid.styles.module.scss';

interface ITwoItemContentGridProps {
  style?: CSSProperties;
}

export function TwoItemContentGrid({
  children,
  style,
}: PropsWithChildren<ITwoItemContentGridProps>): JSX.Element {
  return (
    <section className={styles.container} style={style}>
      {children}
    </section>
  );
}
