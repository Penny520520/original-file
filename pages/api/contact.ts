import { NextApiRequest, NextApiResponse } from 'next';
import {
  addMemberToMailingListAsync,
  IMailingListMember,
} from '~/server/utils';
import { Source } from '~/enums';
import { strings } from '~/localization';
import { ApiResponseJson } from '~/types';

export default async function contactAsync(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponseJson<string>>
): Promise<void> {
  try {
    if (req.method !== `POST`) {
      return res.status(405).json({
        error: strings.methodNotAllowedErrorMessage,
      });
    }

    const validationResult = validateContactRequestBody(req, res);

    if (!validationResult) {
      return;
    }

    const result = await addMemberToMailingListAsync({
      member: validationResult,
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

const allSources = Object.values(Source);

function validateContactRequestBody<
  RequestType extends NextApiRequest,
  ResponseType extends NextApiResponse
>(req: RequestType, res: ResponseType): void | IMailingListMember {
  const body = JSON.parse(req.body);

  if (typeof body.agreeToBeContacted !== `boolean`) {
    return res.status(422).json({
      error: strings
        .formatString(
          strings.invalidTypeErrorMessage,
          `Agree to be contacted`,
          typeof body.agreeToBeContacted,
          `boolean`
        )
        .toString(),
    });
  }

  if (![`string`, `undefined`].includes(typeof body.companyName)) {
    return res.status(422).json({
      error: strings
        .formatString(
          strings.invalidTypeErrorMessage,
          `Email`,
          typeof body.companyName,
          `string or undefined`
        )
        .toString(),
    });
  }

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

  if (typeof body.firstName !== `string`) {
    return res.status(422).json({
      error: strings
        .formatString(
          strings.invalidTypeErrorMessage,
          `First name`,
          typeof body.firstName,
          `string`
        )
        .toString(),
    });
  }

  if (![`string`, `undefined`].includes(typeof body.inquiry)) {
    return res.status(422).json({
      error: strings
        .formatString(
          strings.invalidTypeErrorMessage,
          `Inquiry`,
          typeof body.inquiry,
          `string or undefined`
        )
        .toString(),
    });
  }

  if (typeof body.lastName !== `string`) {
    return res.status(422).json({
      error: strings
        .formatString(
          strings.invalidTypeErrorMessage,
          `Last name`,
          typeof body.lastName,
          `string`
        )
        .toString(),
    });
  }

  if (![`string`, `undefined`].includes(typeof body.phoneNumber)) {
    return res.status(422).json({
      error: strings
        .formatString(
          strings.invalidTypeErrorMessage,
          `Phone number`,
          typeof body.phoneNumber,
          `string or undefined`
        )
        .toString(),
    });
  }

  if (!allSources.includes(body.source) && typeof body.source !== `undefined`) {
    return res.status(422).json({
      error: strings
        .formatString(
          strings.invalidTypeErrorMessage,
          `Source`,
          String(typeof body.source),
          `${allSources.join(` or `)} or undefined`
        )
        .toString(),
    });
  }

  if (![`string`, `undefined`].includes(typeof body.agentName)) {
    return res.status(422).json({
      error: strings
        .formatString(
          strings.invalidTypeErrorMessage,
          `Agent Name`,
          typeof body.agentName,
          `string or undefined`
        )
        .toString(),
    });
  }

  return body;
}
