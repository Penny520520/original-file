import Link from 'next/link';
import { useBoolean, useMemoizedRef } from '~/hooks';
import styles from './Header.styles.module.scss';
import { Menu } from './Menu';
import { MenuIcon } from './MenuIcon';
import Image from 'next/image';
import { strings } from '~/localization';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export function Header(): JSX.Element {
  const [menuOpen, { setFalse: closeMenu, toggleBoolean: toggleMenu }] =
    useBoolean();

  useCloseMenu(closeMenu);

  return (
    <header className={styles.container}>
      <Link href="/" passHref={true}>
        <a className={styles.homeAction}>
          <Image
            alt={strings.homePageTitle}
            layout="fill"
            priority={true}
            quality={100}
            src="/UnionAlliedLogo.svg"
          />
        </a>
      </Link>
      <button className={styles.menuAction} onClick={toggleMenu}>
        <MenuIcon menuOpen={menuOpen} />
      </button>
      <Menu open={menuOpen} />
    </header>
  );
}

function useCloseMenu(closeMenu: () => void): void {
  const { pathname } = useRouter();

  const closeMenuRef = useMemoizedRef(closeMenu);

  useEffect((): void => {
    closeMenuRef.current();
  }, [closeMenuRef, pathname]);
}
