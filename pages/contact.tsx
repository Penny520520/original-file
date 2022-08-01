import { mergeClassNames, RenderEitherOr } from '~/utils';
import { fetch } from '~/packages';
import styles from 'styles/pages/ContactPage.styles.module.scss';
import {
  ArrowForContent,
  Breadcrumbs,
  ContentPosition,
  LineBreakText,
  Row,
  Select,
  Typography,
} from '~/components';
import { strings } from '~/localization';
import Image from 'next/image';
import { useBoolean, useFormResponse } from '~/hooks';
import { FormEvent } from 'react';
import { Source } from '~/enums';
import ContactPageCover from 'public/ContactPageCover.jpg';

export default function ContactPage() {
  return (
    <>
      <ContactPageFirstSection />
      <ContactPageSecondSection />
    </>
  );
}

function ContactPageFirstSection(): JSX.Element {
  return (
    <section
      className={mergeClassNames(
        styles.contactPageFirstSectionContainer,
        styles.pageItemContainer
      )}
    >
      <section
        className={mergeClassNames(
          styles.contactPageFirstSectionItems,
          styles.pageItemRow
        )}
      >
        <Row className={styles.contactPageBreadcrumbs}>
          <Breadcrumbs />
        </Row>
        <Row className={styles.contactPageIntro}>
          <Typography tag="h1">{strings.titleForContactPage}</Typography>
        </Row>
        <Row className={styles.contactPageFirstSectionItemRow}>
          <section className={styles.contactPageFirstSectionImage}>
            <Image
              alt={strings.titleForContactPage}
              layout="fill"
              placeholder="blur"
              priority={true}
              quality={100}
              src={ContactPageCover}
            />
          </section>
          <section className={styles.contactPageFirstSectionContent}>
            <section className={styles.contactPageFirstSectionContentItem}>
              <Typography tag="h2">{strings.officeLocationTitle}</Typography>
              <Typography>
                <LineBreakText text={strings.officeLocationText} />
              </Typography>
              <a
                className={styles.contactPageFirstSectionContentItemAction}
                href={`https://www.google.ca/maps?q=${strings.officeLocationText.replace(
                  /\{0\}/g,
                  ``
                )}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <ArrowForContent>
                  <Typography>{strings.officeLocationActionText}</Typography>
                </ArrowForContent>
              </a>
            </section>
            <section className={styles.contactPageFirstSectionContentItem}>
              <Typography tag="h2">{strings.emailTitle}</Typography>
              <Typography>info@unionallied.ca</Typography>
            </section>
            <section className={styles.contactPageFirstSectionContentItem}>
              <Typography tag="h2">{strings.phoneTitle}</Typography>
              <Typography>+1 236 777 2203</Typography>
            </section>
          </section>
        </Row>
      </section>
    </section>
  );
}

function ContactPageSecondSection(): JSX.Element {
  return (
    <section
      className={mergeClassNames(
        styles.contactPageSecondSectionContainer,
        styles.pageItemContainer
      )}
    >
      <section
        className={mergeClassNames(
          styles.contactPageSecondSectionItems,
          styles.pageItemRow
        )}
      >
        <Row className={styles.contactPageIntro}>
          <Typography tag="h2">{strings.subtitleForContactPage}</Typography>
        </Row>
        <Row className={styles.contactPageSecondSectionItemRow}>
          <ContactPageForm />
        </Row>
      </section>
    </section>
  );
}

interface IContactPageFormElements extends HTMLFormControlsCollection {
  agreeToBeContacted: HTMLInputElement;
  companyName: HTMLInputElement;
  email: HTMLInputElement;
  firstName: HTMLInputElement;
  inquiry: HTMLTextAreaElement;
  lastName: HTMLInputElement;
  phoneNumber: HTMLInputElement;
  source: HTMLSelectElement;
}

interface IContactPageFormElement extends HTMLFormElement {
  readonly elements: IContactPageFormElements;
}

export function ContactPageForm(): JSX.Element {
  const [submitting, submittingActions] = useBoolean();

  const { form, responseMessage, setResponseMessage } = useFormResponse();

  async function handleSubmitAsync(
    event: FormEvent<IContactPageFormElement>
  ): Promise<void> {
    submittingActions.setTrue();

    event.preventDefault();

    const response = await fetch(`/api/contact`, {
      body: JSON.stringify({
        agreeToBeContacted:
          event.currentTarget.elements.agreeToBeContacted.checked,
        companyName:
          event.currentTarget.elements.companyName.value || undefined,
        email: event.currentTarget.elements.email.value,
        firstName: event.currentTarget.elements.firstName.value,
        inquiry: event.currentTarget.elements.inquiry.value || undefined,
        lastName: event.currentTarget.elements.lastName.value,
        phoneNumber:
          event.currentTarget.elements.phoneNumber.value || undefined,
        source: event.currentTarget.elements.source.value || undefined,
      }),
      method: `POST`,
    });

    const json = await response.json();

    setResponseMessage(response.ok ? json.data : json.error);

    submittingActions.setFalse();
  }

  return (
    <form
      className={styles.contactPageForm}
      ref={form}
      onSubmit={handleSubmitAsync}
    >
      <fieldset
        className={styles.contactPageFormFieldset}
        disabled={submitting}
      >
        <section className={styles.contactPageFormPrimaryFields}>
          <input
            autoComplete="given-name"
            className={styles.contactPageFormInput}
            name="firstName"
            placeholder={strings.contactPageFormFirstNamePlaceholder}
            required={true}
            type="text"
          />
          <input
            autoComplete="family-name"
            className={styles.contactPageFormInput}
            name="lastName"
            placeholder={strings.contactPageFormLastNamePlaceholder}
            required={true}
            type="text"
          />
          <input
            autoComplete="email"
            className={styles.contactPageFormInput}
            name="email"
            placeholder={strings.contactPageFormEmailAddressPlaceholder}
            required={true}
            type="email"
          />
          <input
            autoComplete="tel"
            className={styles.contactPageFormInput}
            name="phoneNumber"
            placeholder={strings.contactPageFormPhoneNumberPlaceholder}
            required={true}
            type="tel"
          />
          <input
            className={styles.contactPageFormInput}
            name="companyName"
            placeholder={strings.contactPageFormCompanyPlaceholder}
            type="text"
          />
          <section className={styles.contactFormSelectFieldContainer}>
            <Select
              label={strings.contactPageFormSourcePlaceholder}
              name="source"
              options={Object.values(Source).map(source => ({
                name: source,
                value: source,
              }))}
            />
          </section>
        </section>
        <textarea
          className={styles.contactPageFormTextArea}
          name="inquiry"
          placeholder={strings.contactPageFormMessagePlaceholder}
          rows={5}
        />
        <section className={styles.contactFormCheckboxFieldContainer}>
          <input
            className={styles.contactPageFormInput}
            id="checkbox"
            name="agreeToBeContacted"
            type="checkbox"
          />
          <label htmlFor="checkbox">
            {strings.contactPageFormCheckboxText}
          </label>
        </section>
        <section className="responseMessage">
          <RenderEitherOr
            ifTrue={responseMessage}
            thenRender={message => {
              return <Typography>{message}</Typography>;
            }}
          />
        </section>
        <button
          className={styles.contactPageFormAction}
          disabled={submitting}
          type="submit"
        >
          <ArrowForContent contentPosition={ContentPosition.AFTER} scale={2}>
            <Typography className={styles.contactPageFormArrowActionText}>
              {submitting
                ? strings.contactPageFormSubmittingActionText
                : strings.contactPageFormSubmitActionText}
            </Typography>
          </ArrowForContent>
        </button>
      </fieldset>
    </form>
  );
}
