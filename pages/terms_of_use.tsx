import styles from 'styles/pages/TermsOfUsePage.styles.module.scss';
import { Breadcrumbs, Row, Typography } from '~/components';
import { mergeClassNames } from '~/utils';

export default function TermsOfUsePage() {
  return (
    <>
      <section
        className={mergeClassNames(
          styles.termsOfUsePageBreadcrumbContainer,
          styles.pageItemContainer
        )}
      >
        <Row
          className={mergeClassNames(
            styles.termsOfUsePageBreadcrumbRow,
            styles.pageItemRow
          )}
        >
          <Breadcrumbs />
        </Row>
      </section>
      <section
        className={mergeClassNames(
          styles.termsOfUsePageItemContainer,
          styles.pageItemContainer
        )}
      >
        <Row
          className={mergeClassNames(
            styles.termsOfUsePageItemRow,
            styles.pageItemRow
          )}
        >
          <Typography className={styles.termsOfUseMainTitle} tag="h1">
            Terms of Use
          </Typography>
          <Typography className={styles.termsOfUseText}>
            The material, images, renderings and information on this website is
            provided on an &apos;as is&apos; basis solely for the reader&apos;s
            general knowledge. The information is not intended to be a
            comprehensive review of all matters and developments concerning
            Union Allied Capital Corporation, and therefore assumes no
            responsibility and provides no warranty, either express or implied,
            as to its accuracy and or completeness. In no event will Union
            Allied Capital Corporation be liable for any special, incidental,
            indirect or consequential damages of any kind, or any damages
            whatsoever arising out of or in connection with the use or
            performance of this information, including without limitation, those
            resulting from loss of use, data or profits, whether or not advised
            of the possibility of damage. This site may contain links to
            external organizations. We do not control the relevance, timeliness,
            or accuracy of materials produced by other organizations, nor do we
            endorse their views, products or services. Your access and use of
            this website constitutes your agreement to be governed by the
            contents of the disclaimer set forth above.
          </Typography>
        </Row>
      </section>
    </>
  );
}
