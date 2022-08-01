import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { useBoolean, useMemoizedRef } from '~/hooks';
import { OrNull, OrUndefined } from '~/types';

interface IFieldStateArgs<FieldValueType> {
  error?: string;
  initialFieldValue: OrUndefined<FieldValueType>;
  submitted: boolean;
  validate(value: FieldValueType): OrNull<string>;
  resetError?: () => void;
}

interface IUseFieldState<TFieldValue> {
  displayFieldError: boolean;
  fieldError: string | null;
  fieldTouched: boolean;
  fieldValue: TFieldValue;
  handleFieldTouched(): void;
  setFieldValue: Dispatch<SetStateAction<TFieldValue>>;
  validateField(value: TFieldValue): void;
}

/**
 * Manages the field state.
 * @param initialFieldValue The initial value for the field
 * @param submitted Whether the form containing the field was submitted
 * @param validate A callback that validates the field
 * @param resetError A callback to reset the error
 * @returns The field state
 */
export function useFieldState<FieldValueType>({
  error,
  initialFieldValue,
  submitted,
  validate,
  resetError,
}: IFieldStateArgs<FieldValueType>): IUseFieldState<FieldValueType> {
  const [fieldTouched, { setTrue: handleFieldTouched }] = useBoolean();

  const [fieldError, setFieldError] = useState<string | null>(error ?? null);
  useEffect((): void => {
    if (error) {
      setFieldError(error);
    }
  }, [error]);

  const [fieldValue, setFieldValue] = useState<FieldValueType>(
    initialFieldValue ?? (`` as unknown as FieldValueType)
  );
  useEffect((): void => {
    if (initialFieldValue) {
      setFieldValue(initialFieldValue);
    }
  }, [initialFieldValue]);

  const fieldErrorRef = useMemoizedRef(fieldError);

  const resetErrorCallbackRef = useMemoizedRef(resetError);

  const validateField = useCallback(
    (value: FieldValueType): void => {
      if (fieldErrorRef.current) {
        resetErrorCallbackRef.current?.();
      }

      const validationError = validate(value);
      setFieldError(validationError);
    },
    [validate]
  );

  useLayoutEffect((): void => {
    if (fieldTouched || submitted) {
      validateField(fieldValue);
    }
  }, [fieldValue, fieldTouched, submitted, validateField]);

  return {
    displayFieldError: (submitted || fieldTouched) && Boolean(fieldError),
    fieldError,
    fieldTouched,
    fieldValue,
    handleFieldTouched,
    setFieldValue,
    validateField,
  };
}
