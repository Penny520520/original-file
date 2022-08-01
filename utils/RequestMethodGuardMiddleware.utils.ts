import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { ApiMethod } from '~/enums';
import { strings } from '~/localization';
import { ApiResponseJson } from '~/types';

/**
 * Middleware that guards an api request handler to make sure
 * it only receives requests of the allowed methods.
 * @param methods The methods that will be allowed for this request
 * @returns A callback that is ready to recieve the  api request handler
 */
export function requestMethodGuardMiddleware<ApiResponseDataType = undefined>(
  ...methods: Array<ApiMethod>
): (
  handler: NextApiHandler<ApiResponseJson<ApiResponseDataType>>
) => NextApiHandler<ApiResponseJson<ApiResponseDataType>> {
  return handler => {
    return async (req, res) => {
      if (
        req.method &&
        methods.map(String).includes(req.method.toUpperCase())
      ) {
        await handler(req, res);
      } else {
        res.status(405).json({ error: strings.methodNotAllowedErrorMessage });
      }
    };
  };
}

export const deleteRequestMethodGuardMiddleware: <ApiResponseDataType>(
  handler: NextApiHandler<ApiResponseJson<ApiResponseDataType>>
) => NextApiHandler<ApiResponseJson<ApiResponseDataType>> =
  requestMethodGuardMiddleware(ApiMethod.DELETE);

export const getRequestMethodGuardMiddleware: <ApiResponseDataType>(
  handler: NextApiHandler<ApiResponseJson<ApiResponseDataType>>
) => NextApiHandler<ApiResponseJson<ApiResponseDataType>> =
  requestMethodGuardMiddleware(ApiMethod.GET);

export const postRequestMethodGuardMiddleware: <ApiResponseDataType>(
  handler: NextApiHandler<ApiResponseJson<ApiResponseDataType>>
) => NextApiHandler<ApiResponseJson<ApiResponseDataType>> =
  requestMethodGuardMiddleware(ApiMethod.POST);

export const putRequestMethodGuardMiddleware: <ApiResponseDataType>(
  handler: NextApiHandler<ApiResponseJson<ApiResponseDataType>>
) => NextApiHandler<ApiResponseJson<ApiResponseDataType>> =
  requestMethodGuardMiddleware(ApiMethod.PUT);
