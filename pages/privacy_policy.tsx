import styles from 'styles/pages/PrivacyPolicyPage.styles.module.scss';
import { Breadcrumbs, Row, Typography } from '~/components';
import { mergeClassNames } from '~/utils';

export default function PrivacyPolicyPage() {
  return (
    <>
      <section
        className={mergeClassNames(
          styles.privacyPolicyPageBreadcrumbContainer,
          styles.pageItemContainer
        )}
      >
        <Row
          className={mergeClassNames(
            styles.privacyPolicyPageBreadcrumbRow,
            styles.pageItemRow
          )}
        >
          <Breadcrumbs />
        </Row>
      </section>
      <section
        className={mergeClassNames(
          styles.privacyPolicyPageItemContainer,
          styles.pageItemContainer
        )}
      >
        <Row
          className={mergeClassNames(
            styles.privacyPolicyPageItemRow,
            styles.pageItemRow
          )}
        >
          <Typography className={styles.privacyPolicyMainTitle} tag="h1">
            Privacy Policy
          </Typography>
          <Typography className={styles.privacyPolicyText}>
            Union Allied Capital Corporation and each of our affiliates and
            partnerships is committed to maintaining the accuracy,
            confidentiality and security of your personal information. This
            Privacy Policy describes the personal information that Union Allied
            Capital Corporation collects from or about you, how we use that
            information, and to whom we disclose that information.
          </Typography>
          <Typography tag="h2">COLLECTING PERSONAL INFORMATION</Typography>
          <Typography className={styles.privacyPolicyText}>
            Union Allied Capital Corporation collects personal information to
            better serve your needs, whether purchasing products and services
            from us or obtaining service or warranty work. In order to provide
            you with our wide variety of services, products and promotions, we
            may collect the following information:
          </Typography>
          <Typography className={styles.privacyPolicyText}>
            Contact and mailing information such as name, address, telephone
            numbers, fax numbers and email addresses. The plans, specifications
            and other particulars about the home that is being built for you.
            Municipal and legal descriptions for you home. Any other relevant
            information necessary to provide you with our products and services.
            We may need to collect other personal information depending on the
            circumstance, but we will ask you directly and ensure that you
            agree.
          </Typography>
          <Typography tag="h2">PERSONAL INFORMATION SECURITY</Typography>
          <Typography className={styles.privacyPolicyText}>
            Like you, Union Allied Capital Corporation values our personal
            information. Part of valuing your personal information is making
            sure that it is protected and kept confidential. We achieve this by:
          </Typography>
          <Typography className={styles.privacyPolicyText}>
            Having our employees sign a confidentiality agreement. Having up to
            date computer security such as passwords, encryption and firewalls.
            Where third parties are hired to assist us with providing products
            and services to you for your home, we have them sign a privacy and
            confidentiality agreement to ensure that your personal information
            is protected by them.
          </Typography>
          <Typography tag="h2">PERSONAL INFORMATION UPDATING</Typography>
          <Typography className={styles.privacyPolicyText}>
            Union Allied Capital Corporation wants to ensure that your personal
            information is always correct up to date. If your personal
            information changes or is incorrect, updates can be made by
            contacting your representative with the change and any other
            information you feel is necessary.
          </Typography>
          <Typography className={styles.privacyPolicyText}>
            We will keep your information as long as is necessary to continue to
            meet your customer needs and any legal requirements we may have.
            However, once your personal information no longer needed, we will
            destroy it.
          </Typography>
          <Typography tag="h2">PERSONAL DATA</Typography>
          <Typography className={styles.privacyPolicyText}>
            We only collect Personal Data from you, such as first and last name,
            phone number, e- mail, when you register to receive information. We
            collect data about your activities that does not personally or
            directly identify you when you visit our website, or the websites
            and online services where we display advertisements. This
            information may include the content you view, the date and time that
            you view this content, the products you purchase, or your location
            information associated with your IP address. We use the information
            we collect to serve you more relevant advertisements (referred to as
            “Retargeting”). We collect information about where you saw the ads
            we serve you and what ads you clicked on.
          </Typography>
          <Typography className={styles.privacyPolicyText}>
            As you browse www.Everbrightproperties.ca, online ad networks we
            work with may place anonymous cookies on your computer, and use
            similar technologies, in order to understand your interests based on
            your (anonymous) online activities, and thus to tailor more relevant
            ads to you. If you do not wish to receive such tailored advertising,
            you can visit this page to opt out of most companies that engage in
            such advertising. (This will not prevent you from seeing ads; the
            ads simply will not be delivered through these targeting methods.)
          </Typography>
          <Typography className={styles.privacyPolicyText}>
            We do not target ads to you based on sensitive personal data, such
            as information related to race or ethnic Everbright, political
            opinions, religious beliefs or other beliefs of a similar nature,
            trade union membership, physical or mental health or condition or
            sexual life. We may target ads based on data provided by Advertisers
            or partners alone or in combination with the data we collect
            ourselves. Any data used to serve targeted advertisements is
            de-identified and is not used to personally or directly identify
            you. In order to allow us to reach the best inventory online, we
            work with third party advertising companies (our &quot;Advertising
            Partners&quot;) to help us recognize you and serve relevant
            advertisements to you when you visit a website or online service in
            their network. We also work with Advertising Partners who help us
            recognize you across different devices in order to show you relevant
            advertisements. Our Advertising Partners may collect information
            about your activities on our website, and other websites or online
            services in their networks. We also work with third party companies
            to assist us with website analytics such as evaluating the use and
            operation of our website so that we can continue to enhance the
            website and our services.
          </Typography>
          <Typography className={styles.privacyPolicyText}>
            We and our third-party partners use session cookies and persistent
            cookies to make it easier for you to navigate and enhance the
            experience of our site, and to monitor and evaluate our
            website&apos;s operation and use.
          </Typography>
          <Typography className={styles.privacyPolicyText}>
            To modify or delete your personal information, or to opt out of
            future communications, please contact us at:
          </Typography>
          <section className={styles.privacyPolicyFooter}>
            <Typography className={styles.privacyPolicyText}>
              Union Allied Capital Corporation
            </Typography>
            <Typography className={styles.privacyPolicyText}>
              1115 - 8400 West Road
            </Typography>
            <Typography className={styles.privacyPolicyText}>
              Richmond, BC V6X 0S7
            </Typography>
            <Typography className={styles.privacyPolicyText}>
              info@unionallied.ca
            </Typography>
          </section>
        </Row>
      </section>
    </>
  );
}
