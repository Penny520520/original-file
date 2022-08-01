import { MutableRefObject, useEffect, useRef } from 'react';

/**
 * Memoizes a value and creates a reference to its most up to date value.
 * @param value The value to memoize
 * @returns A ref to the value memoized to the most up to date value
 */
export function useMemoizedRef<ValueType>(
  value: ValueType
): MutableRefObject<ValueType> {
  const valueRef = useRef<ValueType>(value);

  useEffect((): void => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
}
