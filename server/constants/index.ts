import { CmsClient } from '~/server/packages';

export const cmsClient = CmsClient({
  projectId: `sjplthsi`,
  dataset: `production`,
  apiVersion: `2021-10-21`,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});
