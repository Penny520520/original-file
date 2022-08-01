import { useState } from 'react';

/**
 * Manages the state of form field errors
 * @returns The form field errors state
 */
export function useFormFieldErrors<
  FormFields extends Record<string, unknown>
>() {
  return useState<Partial<Record<keyof FormFields, string>>>({});
}
