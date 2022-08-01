import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { OrNull } from '~/types';

interface IUseFormResponse {
  form: MutableRefObject<OrNull<HTMLFormElement>>;
  responseMessage: string;
  setResponseMessage: Dispatch<SetStateAction<string>>;
}

/**
 * Manages the state of the form response
 * @returns The form response state
 */
export function useFormResponse(): IUseFormResponse {
  const form = useRef<OrNull<HTMLFormElement>>(null);

  const [responseMessage, setResponseMessage] = useState<string>(``);

  useEffect((): void | (() => void) => {
    function onSubmit(): void {
      setResponseMessage(``);
    }

    const currentForm = form.current;

    if (currentForm) {
      currentForm.addEventListener(`submit`, onSubmit);

      return (): void => {
        currentForm.removeEventListener(`submit`, onSubmit);
      };
    }
  }, []);

  useEffect((): void => {
    if (responseMessage) {
      form.current?.reset();
    }
  }, [responseMessage]);

  return {
    form,
    responseMessage,
    setResponseMessage,
  };
}
