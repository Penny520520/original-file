import { strings } from '~/localization';
import {
  Accordion,
  ArrowForContent,
  Breadcrumbs,
  ContentPosition,
  LineBreakText,
  Row,
  Typography,
} from '~/components';
import styles from 'styles/pages/CareersPage.styles.module.scss';
import { mergeClassNames } from '~/utils';
import Image from 'next/image';
import CareersPageCover from 'public/CareersPageCover.jpg';

export default function CareersPage() {
  return (
    <>
      <CareersPageFirstSection />
      <CareersPageSecondSection />
    </>
  );
}

function CareersPageFirstSection(): JSX.Element {
  return (
    <section
      className={mergeClassNames(
        styles.careersPageFirstSection,
        styles.pageItemContainer
      )}
    >
      <section
        className={mergeClassNames(
          styles.careersPageFirstSectionItems,
          styles.pageItemRow
        )}
      >
        <section className={styles.careersPageBreadcrumbs}>
          <Breadcrumbs />
        </section>
        <section className={styles.careersPageIntro}>
          <Typography tag="h1">{strings.careersPageTitle}</Typography>
          <Typography className={styles.careersPageIntroText}>
            {strings.careersPageIntroParagraph}
          </Typography>
        </section>
        <section className={styles.careersPageImage}>
          <Image
            alt={strings.careersPageTitle}
            layout="fill"
            placeholder="blur"
            priority={true}
            quality={100}
            src={CareersPageCover}
          />
        </section>
      </section>
    </section>
  );
}

function CareersPageSecondSection(): JSX.Element {
  return (
    <section
      className={mergeClassNames(
        styles.careersPageSecondSection,
        styles.pageItemContainer
      )}
    >
      <section
        className={mergeClassNames(
          styles.careersPageSecondSectionItems,
          styles.pageItemRow
        )}
      >
        <Row className={styles.careersPageSecondSectionTitle}>
          <ArrowForContent contentPosition={ContentPosition.AFTER} scale={0.5}>
            <Typography>
              {strings.currentOpportunitiesTitle.toUpperCase()}
            </Typography>
          </ArrowForContent>
        </Row>
        <Accordion
          arrowScale={2}
          items={[
            {
              content: (
                <CareerItem
                  commitment="Full-time Position"
                  content={strings.marketingManagerCareerDescription}
                  datePosted="Oct 20, 2021"
                  location="Richmond, BC, Canada"
                  title={strings.marketingManagerCareerTitle}
                />
              ),
              keyAsString: strings.marketingManagerCareerTitle,
              title: (
                <Typography
                  className={styles.careersPageSecondSectionAccordionTitle}
                  tag="h2"
                >
                  {strings.marketingManagerCareerTitle}
                </Typography>
              ),
            },
            {
              content: (
                <CareerItem
                  commitment="Full-time Position"
                  content={strings.humanResourceCareerDescription}
                  datePosted="Oct 20, 2021"
                  location="Richmond, BC, Canada"
                  title={strings.humanResourceCareerTitle}
                />
              ),
              keyAsString: strings.humanResourceCareerTitle,
              title: (
                <Typography
                  className={styles.careersPageSecondSectionAccordionTitle}
                  tag="h2"
                >
                  {strings.humanResourceCareerTitle}
                </Typography>
              ),
            },
            {
              content: (
                <CareerItem
                  commitment="Full-time Position"
                  content={strings.officeAdministrationCareerDescription}
                  datePosted="Oct 20, 2021"
                  location="Richmond, BC, Canada"
                  title={strings.officeAdministrationCareerTitle}
                />
              ),
              keyAsString: strings.officeAdministrationCareerTitle,
              title: (
                <Typography
                  className={styles.careersPageSecondSectionAccordionTitle}
                  tag="h2"
                >
                  {strings.officeAdministrationCareerTitle}
                </Typography>
              ),
            },
          ]}
          renderAccordionItem={({
            accordionTitleClassName,
            accordionTitleAtiveClassName,
            isActive,
            item,
            renderArrowForContent,
            toggleAsActiveItem,
          }) => {
            return (
              <button
                key={item.keyAsString}
                className={mergeClassNames(
                  accordionTitleClassName,
                  styles.careersPageSecondSectionAccordionAction,
                  isActive && accordionTitleAtiveClassName
                )}
                onClick={toggleAsActiveItem}
              >
                {renderArrowForContent()}
              </button>
            );
          }}
        />
      </section>
    </section>
  );
}

interface ICareerItemProps {
  commitment: string;
  content: string;
  datePosted: string;
  location: string;
  title: string;
}

function CareerItem({
  commitment,
  content,
  datePosted,
  location,
  title,
}: ICareerItemProps): JSX.Element {
  return (
    <section className={styles.careersPageAccordionContent}>
      <section className={styles.careersPageAccordionTopContent}>
        <section className={styles.careersPageAccordionTopContentText}>
          <Typography>
            {strings.formatString(strings.datePostedText, datePosted)}
          </Typography>
          <Typography>{commitment}</Typography>
          <Typography>{location}</Typography>
        </section>
        <a
          className={styles.careersPageAccordionTopContentAction}
          href={`mailto:info@unionallied.ca?subject=${`Apply for ${title} role at Union Allied Corporation`.replace(
            /\s/g,
            `%20`
          )}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <ArrowForContent scale={0.8}>
            <Typography>{strings.applyNowActionText}</Typography>
          </ArrowForContent>
        </a>
      </section>
      <section>
        <LineBreakText
          text={content}
          renderTextItem={textItem => (
            <Typography className={styles.careerContentItem}>
              {textItem}
            </Typography>
          )}
        />
      </section>
    </section>
  );
}
