import { mergeClassNames, pxToRem } from '~/utils';
import styles from 'styles/pages/ProjectsPage.styles.module.scss';
import {
  Breadcrumbs,
  ContentCard,
  TwoItemContentGrid,
  Row,
  Select,
  Typography,
} from '~/components';
import { strings } from '~/localization';
import { CSSProperties } from 'react';
import Clark_1290 from 'public/Projects/1290_Clark.jpg';
import Kyle_Kelowna from 'public/Projects/Kyle_Kelowna.jpg';
import Adanac_1308 from 'public/Projects/1308_Adanac.jpg';
import Vanguard_Strata from 'public/Projects/Vanguard_Strata.jpg';
import Monogram from 'public/Projects/Monogram.jpg';
import Union_Bay from 'public/Projects/Union_Bay.jpg';
import High_Point_Park from 'public/Projects/High_Point_Park.jpg';
import Impact_Plaza_Development from 'public/Projects/Impact_Plaza_Development.jpg';
import Morningside from 'public/Projects/Morningside.jpg';
import Riverside from 'public/Projects/Riverside.jpg';

export default function ProjectsPage() {
  return (
    <>
      <ProjectsPageFirstSection />
      <ProjectsPageSecondSection />
    </>
  );
}

function ProjectsPageFirstSection(): JSX.Element {
  return (
    <section
      className={mergeClassNames(
        styles.projectsPageFirstSectionContainer,
        styles.pageItemContainer
      )}
    >
      <section
        className={mergeClassNames(
          styles.projectsPageFirstSectionItems,
          styles.pageItemRow
        )}
      >
        <Row className={styles.projectsPageBreadcrumbs}>
          <Breadcrumbs />
        </Row>
        <Row className={styles.projectsPageIntro}>
          <Typography tag="h1">{strings.titleForProjectsPage}</Typography>
          <section className={styles.projectsPageSelect}>
            <Select
              label={strings.projectsIndustrialSelectLabel}
              name={strings.projectsIndustrialSelectLabel}
              options={[
                {
                  href: `/projects/1290_Clark`,
                  name: `1290 Clark`,
                  value: `1290_Clark`,
                },
                {
                  href: `/projects/1308_Adanac`,
                  name: `1308 Adanac`,
                  value: `1308_Adanac`,
                },
                {
                  href: `/projects/Vanguard_Strata`,
                  name: `Vanguard`,
                  value: `Vanguard`,
                },
                {
                  href: `/projects/High_Point_Park`,
                  name: `High Point Park`,
                  value: `High_Point_Park`,
                },
                {
                  href: `/projects/Riverside`,
                  name: `Riverside`,
                  value: `Riverside`,
                },
                {
                  href: `/projects/Kyle_Kelowna`,
                  name: `Kyle Kelowna`,
                  value: `Kyle_Kelowna`,
                },
                {
                  href: `/projects/Morningside`,
                  name: `Morningside`,
                  value: `Morningside`,
                },
                {
                  disabled: true,
                  name: `HQ South Van - Ross Road`,
                  value: `HQ_South_Van-Ross_Road`,
                },
              ]}
            />
            <Select
              label={strings.projectsResidentialSelectLabel}
              name={strings.projectsResidentialSelectLabel}
              options={[
                {
                  href: `/projects/Impact_Plaza_Development`,
                  name: `Impact Plaza Development`,
                  value: `Impact_Plaza_Development`,
                },
                {
                  href: `/projects/Union_Bay`,
                  name: `Union Bay`,
                  value: `Union_Bay`,
                },
                {
                  href: `/projects/Monogram`,
                  name: `Monogram`,
                  value: `Monogram`,
                },
              ]}
            />
            <Select
              label={strings.projectsPropertyManagementSelectLabel}
              name={strings.projectsPropertyManagementSelectLabel}
              options={[
                {
                  disabled: true,
                  name: `3653 Wayburne`,
                  value: `3653_Wayburne`,
                },
                {
                  disabled: true,
                  name: `Kelowna 2`,
                  value: `Kelowna_2`,
                },
                {
                  disabled: true,
                  name: `13799 Commerce Parkway`,
                  value: `13799_Commerce_Parkway`,
                },
                {
                  disabled: true,
                  name: `12511 Vulcan`,
                  value: `12511_Vulcan`,
                },
              ]}
            />
          </section>
        </Row>
      </section>
    </section>
  );
}

function ProjectsPageSecondSection(): JSX.Element {
  return (
    <section
      className={mergeClassNames(
        styles.projectsPageSecondSectionContainer,
        styles.pageItemContainer
      )}
    >
      <section
        className={mergeClassNames(
          styles.projectsPageSecondSectionItems,
          styles.pageItemRow
        )}
      >
        <TwoItemContentGrid
          style={
            {
              [`--container-rows-gap`]: pxToRem(64),
              [`--row-items-gap`]: pxToRem(64),
            } as CSSProperties
          }
        >
          <section
            data-row={true}
            style={
              {
                [`--row-first-item-width`]: `65%`,
              } as CSSProperties
            }
          >
            <ContentCard
              alt="1290 Clark"
              href="/projects/1290_Clark"
              imageClassName={mergeClassNames(
                styles.projectsPageItemImage,
                styles.pageItemImage
              )}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Clark_1290,
              }}
              subtitle={
                <Typography className={styles.projectsPageItemSubtitle}>
                  {strings._1290ClarkSubtitle}
                </Typography>
              }
              title={
                <Typography className={styles.projectsPageItemTitle} tag="h2">
                  1290 Clark
                </Typography>
              }
            />
            <ContentCard
              alt="Kyle Kelowna"
              href="/projects/Kyle_Kelowna"
              imageClassName={mergeClassNames(
                styles.projectsPageItemImage,
                styles.pageItemImage
              )}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Kyle_Kelowna,
              }}
              subtitle={
                <Typography className={styles.projectsPageItemSubtitle}>
                  {strings.kyleKelownaSubtitle}
                </Typography>
              }
              title={
                <Typography className={styles.projectsPageItemTitle} tag="h2">
                  Kyle Kelowna
                </Typography>
              }
            />
          </section>
          <section
            data-row={true}
            style={
              {
                [`--row-first-item-width`]: `50%`,
                [`--row-last-item-width`]: `35%`,
              } as CSSProperties
            }
          >
            <ContentCard
              alt="1308 Adanac"
              href="/projects/1308_Adanac"
              imageClassName={mergeClassNames(
                styles.projectsPageItemImage,
                styles.pageItemImage
              )}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Adanac_1308,
              }}
              subtitle={
                <Typography className={styles.projectsPageItemSubtitle}>
                  {strings._1308AdanacSubtitle}
                </Typography>
              }
              title={
                <Typography className={styles.projectsPageItemTitle} tag="h2">
                  1308 Adanac
                </Typography>
              }
            />
            <ContentCard
              alt="Vanguard Strata"
              href="/projects/Vanguard_Strata"
              imageClassName={mergeClassNames(
                styles.projectsPageItemImage,
                styles.pageItemImage
              )}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Vanguard_Strata,
              }}
              subtitle={
                <Typography className={styles.projectsPageItemSubtitle}>
                  {strings.vanguardStrataSubtitle}
                </Typography>
              }
              title={
                <Typography className={styles.projectsPageItemTitle} tag="h2">
                  Vanguard Strata
                </Typography>
              }
            />
          </section>
          <section
            data-row={true}
            style={
              {
                [`--row-first-item-width`]: `35%`,
                [`--row-last-item-width`]: `35%`,
              } as CSSProperties
            }
          >
            <ContentCard
              alt="Monogram Townhomes"
              href="/projects/Monogram"
              imageClassName={mergeClassNames(
                styles.projectsPageItemImage,
                styles.pageItemImage
              )}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Monogram,
              }}
              subtitle={
                <Typography className={styles.projectsPageItemSubtitle}>
                  {strings.monogramTownhomesSubtitle}
                </Typography>
              }
              title={
                <Typography className={styles.projectsPageItemTitle} tag="h2">
                  Monogram Townhomes
                </Typography>
              }
            />
            <ContentCard
              alt="Union Bay Townhomes"
              href="/projects/Union_Bay"
              imageClassName={mergeClassNames(
                styles.projectsPageItemImage,
                styles.pageItemImage
              )}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Union_Bay,
              }}
              subtitle={
                <Typography className={styles.projectsPageItemSubtitle}>
                  {strings.unionBayTownhousesSubtitle}
                </Typography>
              }
              title={
                <Typography className={styles.projectsPageItemTitle} tag="h2">
                  Union Bay Townhomes
                </Typography>
              }
            />
          </section>
          <section
            data-row={true}
            style={
              {
                [`--row-first-item-width`]: `65%`,
              } as CSSProperties
            }
          >
            <ContentCard
              alt="High Point Park"
              href="/projects/High_Point_Park"
              imageClassName={mergeClassNames(
                styles.projectsPageItemImage,
                styles.pageItemImage
              )}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: High_Point_Park,
              }}
              title={
                <Typography className={styles.projectsPageItemTitle} tag="h2">
                  High Point Park
                </Typography>
              }
            />
            <ContentCard
              alt="Impact Plaza Development"
              href="/projects/Impact_Plaza_Development"
              imageClassName={mergeClassNames(
                styles.projectsPageItemImage,
                styles.pageItemImage
              )}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Impact_Plaza_Development,
              }}
              title={
                <Typography className={styles.projectsPageItemTitle} tag="h2">
                  Impact Plaza Development
                </Typography>
              }
            />
          </section>
          <section
            data-row={true}
            style={
              {
                [`--row-first-item-width`]: `50%`,
                [`--row-last-item-width`]: `35%`,
              } as CSSProperties
            }
          >
            <ContentCard
              alt="Morningside"
              href="/projects/Morningside"
              imageClassName={mergeClassNames(
                styles.projectsPageItemImage,
                styles.pageItemImage
              )}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Morningside,
              }}
              title={
                <Typography className={styles.projectsPageItemTitle} tag="h2">
                  Morningside
                </Typography>
              }
            />
            <ContentCard
              alt="Riverside"
              href="/projects/Riverside"
              imageClassName={mergeClassNames(
                styles.projectsPageItemImage,
                styles.pageItemImage
              )}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Riverside,
              }}
              title={
                <Typography className={styles.projectsPageItemTitle} tag="h2">
                  Riverside
                </Typography>
              }
            />
          </section>
        </TwoItemContentGrid>
      </section>
    </section>
  );
}
