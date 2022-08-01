import { strings } from '~/localization';
import {
  ApproachPageAccordion,
  ArrowForContent,
  Breadcrumbs,
  ContentPosition,
  MidContentImage,
  Row,
  Typography,
} from '~/components';
import styles from 'styles/pages/ApproachPage.styles.module.scss';
import { mergeClassNames, pxToRem } from '~/utils';
import Image from 'next/image';
import { CSSProperties } from 'react';
import ApproachPageCover from 'public/ApproachPageCover.jpg';
import ApproachPageCover2 from 'public/ApproachPageCover2.jpg';
import ApproachPageCover3 from 'public/ApproachPageCover3.jpg';

export default function ApproachPage() {
  return (
    <>
      <ApproachPageFirstSection />
      <ApproachPageSecondSection />
      <MidContentImage
        alt={strings.approachPageTitle}
        aspectRatio="1.5"
        bottomColor="#e6f5fa"
        image={ApproachPageCover3}
        topColor="#ffffff"
      />
      <ApproachPageThirdSection />
    </>
  );
}

function ApproachPageFirstSection(): JSX.Element {
  return (
    <section
      className={mergeClassNames(
        styles.approachPageFirstSection,
        styles.pageItemContainer
      )}
    >
      <section
        className={mergeClassNames(
          styles.approachPageFirstSectionItems,
          styles.pageItemRow
        )}
      >
        <Row className={styles.approachPageBreadcrumbs}>
          <Breadcrumbs />
        </Row>
        <Row className={styles.approachPageIntro}>
          <Typography tag="h1">{strings.approachPageTitle}</Typography>
          <Typography className={styles.approachPageIntroText}>
            {strings.approachPageIntroParagraph}
          </Typography>
        </Row>
        <Row
          className={styles.approachPageFirstSectionItemRow}
          style={{ [`--row-gap`]: pxToRem(64) } as CSSProperties}
        >
          <section className={styles.approachPageFirstSectionImage}>
            <Image
              alt={strings.cultivatingConnectionsTitle}
              layout="fill"
              placeholder="blur"
              priority={true}
              quality={100}
              src={ApproachPageCover}
            />
          </section>
          <section
            className={mergeClassNames(
              styles.approachPageFirstSectionText,
              styles.approachPageFirstSectionItemRowTopText
            )}
          >
            <Typography tag="h2">
              {strings.cultivatingConnectionsTitle}
            </Typography>
            <Typography>{strings.cultivatingConnectionsText}</Typography>
          </section>
        </Row>
        <Row
          className={styles.approachPageFirstSectionItemRow}
          style={{ [`--row-gap`]: pxToRem(64) } as CSSProperties}
        >
          <section
            className={mergeClassNames(
              styles.approachPageFirstSectionText,
              styles.approachPageFirstSectionItemRowBottomText
            )}
          >
            <Typography tag="h2">{strings.buildingForGoodTitle}</Typography>
            <Typography>{strings.buildingForGoodText}</Typography>
          </section>
          <section className={styles.approachPageFirstSectionImage}>
            <Image
              alt={strings.buildingForGoodTitle}
              layout="fill"
              placeholder="blur"
              priority={true}
              quality={100}
              src={ApproachPageCover2}
            />
          </section>
        </Row>
      </section>
    </section>
  );
}

function ApproachPageSecondSection(): JSX.Element {
  return (
    <section
      className={mergeClassNames(
        styles.approachPageSecondSection,
        styles.pageItemContainer
      )}
    >
      <section
        className={mergeClassNames(
          styles.approachPageSecondSectionItems,
          styles.pageItemRow
        )}
      >
        <Row className={styles.approachPageSecondSectionTitle}>
          <ArrowForContent contentPosition={ContentPosition.AFTER} scale={0.5}>
            <Typography>
              {strings.approachPageSecondaryTitle.toUpperCase()}
            </Typography>
          </ArrowForContent>
        </Row>
        <Row className={styles.approachPageIntro}>
          <Typography tag="h2">
            {strings.developmentAndConstructionTitle}
          </Typography>
          <Typography className={styles.approachPageIntroText}>
            {strings.developmentAndConstructionText}
          </Typography>
        </Row>
        <section className={styles.approachPageSecondSectionAccordion}>
          <ApproachPageAccordion />
        </section>
      </section>
    </section>
  );
}

function ApproachPageThirdSection(): JSX.Element {
  return (
    <section
      className={mergeClassNames(
        styles.approachPageThirdSection,
        styles.pageItemContainer
      )}
    >
      <section
        className={mergeClassNames(
          styles.approachPageThirdSectionItems,
          styles.pageItemRow
        )}
      >
        <Row className={styles.approachPageThirdSectionTitle}>
          <ArrowForContent contentPosition={ContentPosition.AFTER} scale={0.8}>
            <Typography>
              {strings.approachPageThirdTitle.toUpperCase()}
            </Typography>
          </ArrowForContent>
        </Row>
        <Row className={styles.approachPageIntro}>
          <Typography tag="h2">{strings.investmentCapitalTitle}</Typography>
          <Typography className={styles.approachPageIntroText}>
            {strings.investmentCapitalText}
          </Typography>
        </Row>
        <br />
        <br />
        <Row className={styles.approachPageIntro}>
          <Typography tag="h2">{strings.industryLeaderTitle}</Typography>
          <Typography className={styles.approachPageIntroText}>
            {strings.industryLeaderText}
          </Typography>
        </Row>
      </section>
    </section>
  );
}
