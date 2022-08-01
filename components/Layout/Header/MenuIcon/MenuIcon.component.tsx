import { RenderEitherOr } from '~/utils';
import styles from './MenuIcon.styles.module.scss';

interface IMenuIconProps {
  menuOpen: boolean;
}

export function MenuIcon({ menuOpen }: IMenuIconProps): JSX.Element {
  return (
    <svg viewBox="0 0 100 100" width="25" height="20">
      <RenderEitherOr
        ifTrue={menuOpen}
        thenRender={<MenuOpenIcon />}
        otherwiseRender={<MenuClosedIcon />}
      />
    </svg>
  );
}

function MenuClosedIcon(): JSX.Element {
  return (
    <>
      <line
        className={styles.menuClosedIconLine}
        x1="0"
        y1="8"
        x2="50"
        y2="8"
      />
      <line
        className={styles.menuClosedIconLine}
        x1="50"
        y1="33"
        x2="100"
        y2="33"
      />
      <line
        className={styles.menuClosedIconLine}
        x1="0"
        y1="58"
        x2="50"
        y2="58"
      />
      <line
        className={styles.menuClosedIconLine}
        x1="50"
        y1="83"
        x2="100"
        y2="83"
      />
    </>
  );
}

function MenuOpenIcon(): JSX.Element {
  return (
    <>
      <line
        className={styles.menuOpenIconLine}
        x1="0"
        y1="0"
        x2="100"
        y2="100"
      />
      <line
        className={styles.menuOpenIconLine}
        x1="0"
        y1="100"
        x2="100"
        y2="0"
      />
    </>
  );
}
