import Link from 'next/link';
import { fetch } from '~/packages';
import { CSSProperties, FormEvent } from 'react';
import { ArrowForContent, Row, Typography } from '~/components';
import { useBoolean, useFormResponse } from '~/hooks';
import { strings } from '~/localization';
import styles from './ContactForm.styles.module.scss';
import { RenderEitherOr } from '~/utils';

interface IContactFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
}

interface IContactFormElement extends HTMLFormElement {
  readonly elements: IContactFormElements;
}

export function ContactForm(): JSX.Element {
  const [submitting, submittingActions] = useBoolean();

  const { form, responseMessage, setResponseMessage } = useFormResponse();

  async function handleSubmitAsync(
    event: FormEvent<IContactFormElement>
  ): Promise<void> {
    submittingActions.setTrue();

    event.preventDefault();

    const response = await fetch(`/api/signUp`, {
      body: JSON.stringify({ email: event.currentTarget.elements.email.value }),
      method: `POST`,
    });

    const json = await response.json();

    setResponseMessage(response.ok ? json.data : json.error);

    submittingActions.setFalse();
  }

  return (
    <Row className={styles.contactFormRow}>
      <form
        className={styles.contactForm}
        ref={form}
        onSubmit={handleSubmitAsync}
      >
        <Typography className={styles.contactFormTitle} tag="h2">
          {strings.formatString(
            strings.contactFormTitle,
            <span className={styles.contactFormTitleUniqueText}>
              {strings.contactFormTitleUniqueText}
            </span>
          )}
        </Typography>
        <fieldset className={styles.contactFormFieldset} disabled={submitting}>
          <input
            autoComplete="email"
            className={styles.contactFormInput}
            name="email"
            placeholder={strings.contactFormInputPlaceholder}
            required={true}
            type="email"
          />
          <button
            className={styles.contactFormAction}
            disabled={submitting}
            style={
              {
                [`--character-count`]: strings.contactFormActionText.length - 2,
              } as CSSProperties
            }
            type="submit"
          >
            <ArrowForContent hideArrow={submitting} scale={0.8}>
              <Typography className={styles.contactFormArrowActionText}>
                {submitting
                  ? strings.contactFormSubmittingActionText.toUpperCase()
                  : strings.contactFormActionText.toUpperCase()}
              </Typography>
            </ArrowForContent>
          </button>
        </fieldset>
        <section className="responseMessage">
          <RenderEitherOr
            ifTrue={responseMessage}
            thenRender={message => {
              return <Typography>{message}</Typography>;
            }}
          />
        </section>
      </form>
      <Link href="/contact" passHref={true}>
        <a className={styles.contactFormAnchorTag}>
          <ArrowForContent>
            <Typography>{strings.titleForContactPage.toUpperCase()}</Typography>
          </ArrowForContent>
        </a>
      </Link>
    </Row>
  );
}
