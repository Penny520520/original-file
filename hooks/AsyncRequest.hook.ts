import { ApiResponseJson, OrNull, OrUndefined } from '~/types';
import { fetch } from '~/packages';

import { ApiMethod } from '~/enums';
import { useCallback } from 'react';

interface IUseAsyncRequestArgs {
  body?: OrUndefined<OrNull<BodyInit>>;
  endpoint: string;
  method?: ApiMethod;
  query?: string;
}

interface IUseAsyncRequestResponseType<ReturnedDataType> {
  (args: IUseAsyncRequestArgs): Promise<ReturnedDataType>;
}

/**
 * Generates a function that issues an async request.
 * @returns The function that issues the async request
 */
export function useAsyncRequest<
  ReturnedDataType = undefined
>(): IUseAsyncRequestResponseType<OrUndefined<ReturnedDataType>> {
  return useCallback(
    async ({
      body,
      endpoint,
      method,
      query,
    }: IUseAsyncRequestArgs): Promise<OrUndefined<ReturnedDataType>> => {
      // * Create a new AbortController instance for this request
      const controller = new AbortController();

      const promise = fetch(
        `${window.location.origin}/api${endpoint}${query ?? ``}`,
        {
          body,
          headers: {
            [`Content-Type`]: `application/json`,
          },
          method,
          // * Pass the signal to the request
          signal: controller.signal,
        }
      );

      // * Cancel the request if the server cache calls the `promise.cancel` method
      // * This is the abort procedure specifically for React Query.
      // TODO: Update this if a different server cache is used
      //@ts-ignore
      promise.cancel = () => controller.abort();

      const response = await promise;

      const json = (await response.json()) as ApiResponseJson<ReturnedDataType>;

      if (json.error) {
        throw new Error(json.error);
      }

      return json.data;
    },
    []
  );
}
