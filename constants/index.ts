import { strings } from '~/localization';
import { CmsClient } from '~/packages';

export const cmsClient = CmsClient({
  projectId: `sjplthsi`,
  dataset: `production`,
  apiVersion: `2021-10-21`,
  useCdn: false,
});

export const pages = [
  strings.titleForProjectsPage,
  strings.titleForAboutPage,
  strings.titleForApproachPage,
  strings.titleForNewsPage,
  strings.titleForCareersPage,
  strings.titleForContactPage,
];
