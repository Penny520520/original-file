import { pages } from '~/constants';
import Link from 'next/link';
import { mergeClassNames } from '~/utils';
import styles from './Menu.styles.module.scss';
import { useValueChanged } from '~/hooks';

type MenuItem = {
  href: string;
  title: string;
};

const menuItems: Array<MenuItem> = pages.map(title => ({
  href: `/${title.toLowerCase()}`,
  title,
}));

interface IMenuProps {
  open: boolean;
}

export function Menu({ open }: IMenuProps): JSX.Element {
  const openStateHasChanged = useValueChanged(open);

  return (
    <section
      className={mergeClassNames(
        styles.container,
        openStateHasChanged && open && styles.containerIn,
        openStateHasChanged && !open && styles.containerOut
      )}
    >
      <section
        className={mergeClassNames(
          styles.menu,
          openStateHasChanged && !open && styles.menuClosed,
          openStateHasChanged && open && styles.menuOpen
        )}
      >
        {menuItems
          .map((menuItem: MenuItem): JSX.Element => {
            return (
              <Link key={menuItem.title} href={menuItem.href} passHref={true}>
                <a className={styles.menuItem} data-content={menuItem.title} />
              </Link>
            );
          })
          .reverse()}
      </section>
    </section>
  );
}
