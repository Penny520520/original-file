import Link from 'next/link';
import {
  ArrowForContent,
  ContentPosition,
  Row,
  Typography,
} from '~/components';
import styles from './ContactDetails.styles.module.scss';
import { pages } from '~/constants';
import { mergeClassNames, RenderList } from '~/utils';
import { strings } from '~/localization';

export function ContactDetails(): JSX.Element {
  return (
    <Row className={styles.contactDetailsRow}>
      <Row className={styles.contactDetailsRowFirstItem}>
        <section className={styles.contactDetailsColumn}>
          <RenderList
            items={pages}
            renderItem={page => {
              return (
                <Link
                  key={page}
                  href={`/${page.toLowerCase()}`}
                  passHref={true}
                >
                  <a
                    className={mergeClassNames(
                      styles.contactDetailsItem,
                      styles.contactDetailsLink
                    )}
                  >
                    <ArrowForContent
                      contentPosition={ContentPosition.AFTER}
                      scale={0.5}
                    >
                      <Typography className={styles.contactDetailsText}>
                        {page.toUpperCase()}
                      </Typography>
                    </ArrowForContent>
                  </a>
                </Link>
              );
            }}
          />
        </section>
        <section className={styles.contactDetailsColumn}>
          <section
            className={mergeClassNames(
              styles.contactDetailsItem,
              styles.contactDetailsAddress
            )}
          >
            <ArrowForContent
              arrowClassName={styles.contactDetailsAddressArrow}
              contentPosition={ContentPosition.AFTER}
              scale={0.5}
            >
              <section>
                <Typography className={styles.contactDetailsText}>
                  1115 - 8400 West Road,
                </Typography>
                <Typography className={styles.contactDetailsText}>
                  Richmond, BC V6X 0S7
                </Typography>
              </section>
            </ArrowForContent>
          </section>
          <section className={styles.contactDetailsItem}>
            <ArrowForContent
              contentPosition={ContentPosition.AFTER}
              scale={0.5}
            >
              <Typography className={styles.contactDetailsText}>
                +1 236 777 2203
              </Typography>
            </ArrowForContent>
          </section>
          <section className={styles.contactDetailsItem}>
            <ArrowForContent
              contentPosition={ContentPosition.AFTER}
              scale={0.5}
            >
              <Typography className={styles.contactDetailsText}>
                info@unionallied.ca
              </Typography>
            </ArrowForContent>
          </section>
        </section>
        <section className={styles.contactDetailsColumn}>
          <a
            className={mergeClassNames(
              styles.contactDetailsItem,
              styles.contactDetailsLink
            )}
            href="https://www.facebook.com/Union-Allied-Capital-Corporation-100299412285504"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ArrowForContent
              contentPosition={ContentPosition.AFTER}
              scale={0.5}
            >
              <Typography className={styles.contactDetailsText}>
                Facebook
              </Typography>
            </ArrowForContent>
          </a>
          <a
            className={mergeClassNames(
              styles.contactDetailsItem,
              styles.contactDetailsLink
            )}
            href="https://www.instagram.com/_unionallied_/?hl=en"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ArrowForContent
              contentPosition={ContentPosition.AFTER}
              scale={0.5}
            >
              <Typography className={styles.contactDetailsText}>
                Instagram
              </Typography>
            </ArrowForContent>
          </a>
        </section>
      </Row>
      <section className={styles.contactDetailsColumn}>
        <section className={styles.contactDetailsAboveCopyright}>
          <Link href="/privacy_policy" passHref={true}>
            <a
              className={mergeClassNames(
                styles.contactDetailsItem,
                styles.contactDetailsLink
              )}
            >
              <ArrowForContent
                contentPosition={ContentPosition.AFTER}
                scale={0.5}
              >
                <Typography className={styles.contactDetailsText}>
                  {strings.privacyPolicyText}
                </Typography>
              </ArrowForContent>
            </a>
          </Link>
          <Link href="/terms_of_use" passHref={true}>
            <a
              className={mergeClassNames(
                styles.contactDetailsItem,
                styles.contactDetailsLink
              )}
            >
              <ArrowForContent
                contentPosition={ContentPosition.AFTER}
                scale={0.5}
              >
                <Typography className={styles.contactDetailsText}>
                  {strings.termsOfUseText}
                </Typography>
              </ArrowForContent>
            </a>
          </Link>
        </section>
        <Typography
          className={mergeClassNames(
            styles.contactDetailsItem,
            styles.contactDetailsCopyright
          )}
        >
          <Typography className={styles.contactDetailsText}>
            &copy; Copyright 2022 | Union Allied Capital Corporation
          </Typography>
        </Typography>
      </section>
    </Row>
  );
}
