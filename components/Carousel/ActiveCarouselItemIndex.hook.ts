import { useEffect, useRef, useState } from 'react';
import { useMemoizedRef } from '~/hooks';

/**
 * Manages the state of the active carousel item index.
 * @param items The carousel items
 * @returns The active carousel item index
 */
export function useActiveCarouselItemIndex<TCarouselItem>(
  ...items: Array<TCarouselItem>
): number {
  const numberOfCarouselItems = useMemoizedRef(items.length);

  const [activeCarouselItemIndex, setActiveCarouselItemIndex] =
    useState<number>(0);
  const activeCarouselItemDurationMs = useRef<number>(5000);

  useEffect((): (() => void) => {
    const interval = setInterval((): void => {
      setActiveCarouselItemIndex(
        (currentActiveCarouselItemIndex: number): number =>
          (currentActiveCarouselItemIndex + 1) % numberOfCarouselItems.current
      );
    }, activeCarouselItemDurationMs.current);

    return (): void => {
      clearInterval(interval);
    };
  }, [numberOfCarouselItems]);

  return activeCarouselItemIndex;
}
