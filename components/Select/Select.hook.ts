import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import { ISelectOption } from './Select.component';

interface IUseSelect {
  selectedValueName: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export function useSelect(
  options: Array<ISelectOption>,
  initialValue = ``
): IUseSelect {
  const [value, setValue] = useState<string>(initialValue);

  const selectedValueName = useMemo((): string => {
    const matchingOption = options.find(option => option.value === value);
    return matchingOption ? matchingOption.name : ``;
  }, [options, value]);

  return {
    selectedValueName,
    value,
    setValue,
  };
}
