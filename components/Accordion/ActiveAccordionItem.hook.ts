import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { OrNull } from '~/types';

interface IUseActiveAccordionItem {
  activeAccordionItemIndex: OrNull<number>;
  clearActiveAccordionItemIndex(): void;
  setActiveAccordionItemIndex: Dispatch<SetStateAction<OrNull<number>>>;
  toggleActiveAccordionItemIndex(index: number): void;
}

/**
 * Manages the state of the active accordion item.
 * @returns The state of the active accordion item
 */
export function useActiveAccordionItem(): IUseActiveAccordionItem {
  const [activeAccordionItemIndex, setActiveAccordionItemIndex] =
    useState<OrNull<number>>(null);

  const clearActiveAccordionItemIndex = useCallback((): void => {
    setActiveAccordionItemIndex(null);
  }, []);

  const toggleActiveAccordionItemIndex = useCallback((index: number): void => {
    setActiveAccordionItemIndex(
      (currentActiveAccordionItemIndex: OrNull<number>): OrNull<number> => {
        return currentActiveAccordionItemIndex === index ? null : index;
      }
    );
  }, []);

  return {
    activeAccordionItemIndex,
    clearActiveAccordionItemIndex,
    setActiveAccordionItemIndex,
    toggleActiveAccordionItemIndex,
  };
}
