import { MutableRefObject, useEffect, useRef } from 'react';
import { OrNull } from '~/types';
import { useMemoizedRef } from '~/hooks';

/**
 * Monitors all click events and calls a provided callback
 * when the click event is registered outside the desired element.
 * @param onClickOutside A callback to be triggered when a click is registered outside the element
 * @returns A reference to set the element
 */
export function useClickOutside<TElement extends HTMLElement>(
  onClickOutside: (target?: HTMLElement) => void
): MutableRefObject<OrNull<TElement>> {
  const element = useRef<OrNull<TElement>>(null);

  const onClickOutsideCallbackRef = useMemoizedRef(onClickOutside);

  useEffect((): void | (() => void) => {
    function handleClick(event: Event): void {
      const target = event.target as HTMLElement;
      if (!element.current?.contains(target)) {
        onClickOutsideCallbackRef.current(target);
      }
    }

    document.addEventListener(`click`, handleClick);

    return (): void => {
      document.removeEventListener(`click`, handleClick);
    };
  }, []);

  return element;
}
