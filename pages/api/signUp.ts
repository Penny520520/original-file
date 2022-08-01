import { NextApiRequest, NextApiResponse } from 'next';
import {
  addMemberToMailingListAsync,
  IMailingListMember,
} from '~/server/utils';
import { strings } from '~/localization';
import { ApiResponseJson } from '~/types';

export default async function signUpAsync(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponseJson<string>>
): Promise<void> {
  try {
    if (req.method !== `POST`) {
      return res.status(405).json({
        error: strings.methodNotAllowedErrorMessage,
      });
    }

    const validationResult = validateSignUpRequestBody(req, res);

    if (!validationResult) {
      return;
    }

    const result = await addMemberToMailingListAsync({
      member: {
        ...validationResult,
        agreeToBeContacted: false,
      },
    });

    if (result) {
      return res.status(result.status).json({ error: result.error });
    } else {
      return res.status(200).json({ data: strings.successMessage });
    }
  } catch {
    res.status(500).json({ error: strings.internalServerErrorMessage });
  }
}

function validateSignUpRequestBody<
  RequestType extends NextApiRequest,
  ResponseType extends NextApiResponse
>(req: RequestType, res: ResponseType): void | IMailingListMember {
  const body = JSON.parse(req.body);

  if (typeof body.email !== `string`) {
    return res.status(422).json({
      error: strings
        .formatString(
          strings.invalidTypeErrorMessage,
          `Email`,
          typeof body.email,
          `string`
        )
        .toString(),
    });
  }

  return body;
}
