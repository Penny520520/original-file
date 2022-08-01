import { NextApiHandler } from 'next';
import { strings } from '~/localization';
import { ApiResponseJson } from '~/types';

/**
 * Middleware that manages all errors thrown by an api request handler for the api route.
 * @param handler A api request handler for the api route
 * @returns A callback that is ready to recieve the api request
 */
export function apiErrorMiddleware<ApiResponseDataType = undefined>(
  handler: NextApiHandler<ApiResponseJson<ApiResponseDataType>>
): NextApiHandler<ApiResponseJson<ApiResponseDataType>> {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error: unknown) {
      console.error(error);

      if (error instanceof Error) {
        res.status(422).json({ error: error.message });
      } else if (typeof error === `string`) {
        res.status(422).json({ error });
      } else {
        res.status(500).json({ error: strings.internalServerErrorMessage });
      }
    }
  };
}
