import { MutableRefObject, PropsWithChildren, useEffect, useRef } from 'react';
import { useValueChanged } from '~/hooks';
import { OrNull } from '~/types';
import { mergeClassNames } from '~/utils';
import styles from './AccordionContentItem.styles.module.scss';

interface IAccordionContentItemProps {
  isActive: boolean;
  scrollContentIntoView: boolean;
}

export function AccordionContentItem({
  children,
  isActive,
  scrollContentIntoView,
}: PropsWithChildren<IAccordionContentItemProps>): JSX.Element {
  const isActiveHasChanged = useValueChanged(isActive);

  const itemRef = useScrollActiveItemIntoView(
    isActiveHasChanged && isActive,
    scrollContentIntoView
  );

  return (
    <section
      className={mergeClassNames(
        styles.item,
        isActiveHasChanged && !isActive && styles.itemHidden,
        isActiveHasChanged && isActive && styles.itemVisible
      )}
      ref={itemRef}
    >
      {children}
    </section>
  );
}

function useScrollActiveItemIntoView(
  isActive: boolean,
  scrollContentIntoView: boolean
): MutableRefObject<OrNull<HTMLElement>> {
  const itemRef = useRef<OrNull<HTMLElement>>(null);

  useEffect((): void => {
    if (isActive && scrollContentIntoView) {
      itemRef.current?.scrollIntoView({ behavior: `smooth`, block: `nearest` });
    }
  }, [isActive, scrollContentIntoView]);

  return itemRef;
}
