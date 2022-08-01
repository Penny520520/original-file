import { ReactNode, useEffect, useState } from 'react';
import { ArrowForContent, ContentPosition } from '~/components';
import { pxToRem, RenderList } from '~/utils';
import styles from './Accordion.styles.module.scss';
import { AccordionContentItem } from './AccordionContentItem.component';
import { useActiveAccordionItem } from './ActiveAccordionItem.hook';

interface IAccordionItem {
  content: ReactNode;
  keyAsString: string;
  title: ReactNode;
}

interface IRenderAccordionItemArgs {
  accordionTitleClassName: string;
  accordionTitleAtiveClassName: string;
  disableHover: boolean;
  isActive: boolean;
  item: IAccordionItem;
  renderArrowForContent(): JSX.Element;
  resetActiveItem(): void;
  selectAsActiveItem(): void;
  toggleAsActiveItem(): void;
}

interface IAccordionProps<TAccordionItem extends IAccordionItem> {
  arrowScale?: number;
  items: Array<TAccordionItem>;
  renderAccordionItem(args: IRenderAccordionItemArgs): JSX.Element;
}

export function Accordion<TAccordionItem extends IAccordionItem>({
  arrowScale = 1,
  items,
  renderAccordionItem,
}: IAccordionProps<TAccordionItem>): JSX.Element {
  const mobile = useMatchMedia(`(max-width: ${pxToRem(960)})`);

  const {
    activeAccordionItemIndex,
    clearActiveAccordionItemIndex,
    setActiveAccordionItemIndex,
    toggleActiveAccordionItemIndex,
  } = useActiveAccordionItem();

  function selectActiveItem(index: number): () => void {
    return (): void => {
      setActiveAccordionItemIndex(index);
    };
  }

  return (
    <section className={styles.container}>
      <section className={styles.accordionTitles}>
        <RenderList
          items={items}
          renderItem={(item: TAccordionItem, index: number): JSX.Element => {
            function handleToggleActiveAccordionItemIndex(): void {
              toggleActiveAccordionItemIndex(index);
            }

            return renderAccordionItem({
              accordionTitleClassName: styles.accordionTitle,
              accordionTitleAtiveClassName: styles.accordionTitleActive,
              isActive: activeAccordionItemIndex === index,
              item,
              disableHover: mobile,
              renderArrowForContent(): JSX.Element {
                return (
                  <ArrowForContent
                    contentPosition={ContentPosition.AFTER}
                    scale={arrowScale}
                  >
                    {item.title}
                  </ArrowForContent>
                );
              },
              resetActiveItem: clearActiveAccordionItemIndex,
              selectAsActiveItem: selectActiveItem(index),
              toggleAsActiveItem: handleToggleActiveAccordionItemIndex,
            });
          }}
        />
      </section>
      <section className={styles.accordionContentContainer}>
        <RenderList
          items={items}
          renderItem={(item: IAccordionItem, index: number): JSX.Element => {
            return (
              <AccordionContentItem
                key={item.keyAsString}
                isActive={activeAccordionItemIndex === index}
                scrollContentIntoView={mobile}
              >
                {item.content}
              </AccordionContentItem>
            );
          }}
        />
      </section>
    </section>
  );
}

function useMatchMedia(mediaQuery: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect((): void | (() => void) => {
    function handleResize(container: typeof window): () => void {
      return (): void => {
        setMatches(container.matchMedia(mediaQuery).matches);
      };
    }

    if (window) {
      setMatches(window.matchMedia(mediaQuery).matches);

      window.addEventListener(`resize`, handleResize(window));

      return (): void => {
        window.removeEventListener(`resize`, handleResize(window));
      };
    }
  }, [mediaQuery]);

  return matches;
}
