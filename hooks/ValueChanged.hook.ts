import { useEffect, useRef } from 'react';
import { useBoolean } from '~/hooks';

/**
 * Lets the client code know whether the value has changed.
 * @returns The state of the value being changed
 */
export function useValueChanged<ValueType>(value: ValueType): boolean {
  const initialValue = useRef<ValueType>(value);
  const [valueChanged, actions] = useBoolean();

  useEffect((): void => {
    if (value !== initialValue.current) {
      actions.setTrue();
    }
  }, [value]);

  return valueChanged;
}
