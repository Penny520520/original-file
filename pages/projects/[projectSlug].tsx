import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from 'next';
import { ParsedUrlQuery } from '~/packages';
import {
  ArrowForContent,
  Breadcrumbs,
  ContentCard,
  ContentPosition,
  CoverImage,
  LineBreakText,
  Row,
  Typography,
} from '~/components';
import styles from 'styles/pages/ProjectPage.styles.module.scss';
import { mergeClassNames, pxToRem, RenderEitherOr } from '~/utils';
import { strings } from '~/localization';
import { CSSProperties } from 'react';
import Adanac_1308 from 'public/Projects/1308_Adanac.jpg';
import Adanac_1308_Dining_Space from 'public/Projects/1308_Adanac_Dining_Space.jpg';
import Adanac_1308_Common_Rooftop_Patio from 'public/Projects/1308_Adanac_Common_Rooftop_Patio.jpg';
import Adanac_1308_Multi_Use_Building from 'public/Projects/1308_Adanac_Multi_Use_Building.jpg';
import Adanac_1308_Office_Area from 'public/Projects/1308_Adanac_Office_Area.jpg';
import Adanac_1308_1 from 'public/Projects/1308_Adanac_1.jpg';
import Adanac_1308_2 from 'public/Projects/1308_Adanac_2.jpg';
import Adanac_1308_Rendering_1 from 'public/Projects/1308_Adanac_Rendering_1.jpg';
import Adanac_1308_Rendering_2 from 'public/Projects/1308_Adanac_Rendering_2.jpg';
import Adanac_1308_3 from 'public/Projects/1308_Adanac_3.jpg';
import Adanac_1308_4 from 'public/Projects/1308_Adanac_4.jpg';
import Adanac_1308_5 from 'public/Projects/1308_Adanac_5.jpg';
import Adanac_1308_6 from 'public/Projects/1308_Adanac_6.jpg';
import Adanac_1308_7 from 'public/Projects/1308_Adanac_7.jpg';
import Clark_1290 from 'public/Projects/1290_Clark.jpg';
import Clark_1290_Dollhouse from 'public/Projects/Clark_1290_Dollhouse.jpg';
import Clark_1290_Lab_1 from 'public/Projects/Clark_1290_Lab_1.jpg';
import Clark_1290_Lab_2 from 'public/Projects/Clark_1290_Lab_2.jpg';
import Clark_1290_Office_1 from 'public/Projects/Clark_1290_Office_1.jpg';
import Clark_1290_Office_2 from 'public/Projects/Clark_1290_Office_2.jpg';
import High_Point_Park from 'public/Projects/High_Point_Park.jpg';
import High_Point_Park_Aerial_View from 'public/Projects/High_Point_Park_Aerial_View.jpg';
import High_Point_Park_Dollhouse_1 from 'public/Projects/High_Point_Park_Dollhouse_1.jpg';
import High_Point_Park_Dollhouse_2 from 'public/Projects/High_Point_Park_Dollhouse_2.jpg';
import Impact_Plaza_Development from 'public/Projects/Impact_Plaza_Development.jpg';
import Impact_Plaza_Development_Aerial_Night from 'public/Projects/Impact_Plaza_Development_Aerial_Night.jpg';
import Impact_Plaza_Development_Elevation_1 from 'public/Projects/Impact_Plaza_Development_Elevation_1.jpg';
import Impact_Plaza_Development_Elevation_2 from 'public/Projects/Impact_Plaza_Development_Elevation_2.jpg';
import Impact_Plaza_Development_Elevation_3 from 'public/Projects/Impact_Plaza_Development_Elevation_3.jpg';
import Impact_Plaza_Development_Street_View_1 from 'public/Projects/Impact_Plaza_Development_Street_View_1.jpg';
import Impact_Plaza_Development_Street_View_2 from 'public/Projects/Impact_Plaza_Development_Street_View_2.jpg';
import Kyle_Kelowna from 'public/Projects/Kyle_Kelowna.jpg';
import Kyle_Kelowna_1 from 'public/Projects/Kyle_Kelowna_1.jpg';
import Kyle_Kelowna_2 from 'public/Projects/Kyle_Kelowna_2.jpg';
import Kyle_Kelowna_3 from 'public/Projects/Kyle_Kelowna_3.jpg';
import Kyle_Kelowna_4 from 'public/Projects/Kyle_Kelowna_4.jpg';
import Kyle_Kelowna_5 from 'public/Projects/Kyle_Kelowna_5.jpeg';
import Kyle_Kelowna_6 from 'public/Projects/Kyle_Kelowna_6.png';
import Monogram from 'public/Projects/Monogram.jpg';
import Morningside from 'public/Projects/Morningside.jpg';
import Morningside_Avenue_Elevation from 'public/Projects/Morningside_Avenue_Elevation.jpg';
import Morningside_McNicoll_Avenue_Elevation from 'public/Projects/Morningside_McNicoll_Avenue_Elevation.jpg';
import Morningside_South_Elevation from 'public/Projects/Morningside_South_Elevation.jpg';
import Riverside from 'public/Projects/Riverside.jpg';
import Riverside_11151_Horseshoe_Way_1 from 'public/Projects/Riverside_11151_Horseshoe_Way_1.jpg';
import Riverside_11151_Horseshoe_Way_2 from 'public/Projects/Riverside_11151_Horseshoe_Way_2.jpg';
import Riverside_11151_Horseshoe_Way_3 from 'public/Projects/Riverside_11151_Horseshoe_Way_3.jpg';
import Riverside_11151_Horseshoe_Way_4 from 'public/Projects/Riverside_11151_Horseshoe_Way_4.jpg';
import Riverside_11151_Horseshoe_Way_5 from 'public/Projects/Riverside_11151_Horseshoe_Way_5.jpg';
import Riverside_11171_Horseshoe_Way_1 from 'public/Projects/Riverside_11171_Horseshoe_Way_1.jpg';
import Riverside_11171_Horseshoe_Way_2 from 'public/Projects/Riverside_11171_Horseshoe_Way_2.jpg';
import Riverside_11171_Horseshoe_Way_3 from 'public/Projects/Riverside_11171_Horseshoe_Way_3.jpg';
import Riverside_Horseshoe_Way_Street_View from 'public/Projects/Riverside_Horseshoe_Way_Street_View.jpg';
import Union_Bay from 'public/Projects/Union_Bay.jpg';
import Union_Bay_Aerial_View_1 from 'public/Projects/Union_Bay_Aerial_View_1.jpg';
import Union_Bay_Aerial_View_2 from 'public/Projects/Union_Bay_Aerial_View_2.jpg';
import Union_Bay_Siteplan from 'public/Projects/Union_Bay_Siteplan.jpg';
import Union_Bay_Street_View from 'public/Projects/Union_Bay_Street_View.jpg';
import Vanguard_Strata from 'public/Projects/Vanguard_Strata.jpg';
import Vanguard_Strata_Court_Yard_View from 'public/Projects/Vanguard_Strata_Court_Yard_View.jpg';
import Vanguard_Strata_Dining_Space from 'public/Projects/Vanguard_Strata_Dining_Space.jpg';
import Vanguard_Strata_Dollhouse from 'public/Projects/Vanguard_Strata_Dollhouse.jpg';
import Vanguard_Strata_Landscaping from 'public/Projects/Vanguard_Strata_Landscaping.jpg';
import Vanguard_Strata_Showrooms from 'public/Projects/Vanguard_Strata_Showrooms.jpg';

export default function ProjectPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <>
      <ProjectPageFirstSection />
      <ProjectPageCoverImage
        projectSlug={props.projectSlug}
        projectTitle={props.projectTitle}
      />
      <ProjectPageSecondSection {...props} />
    </>
  );
}

function ProjectPageFirstSection(): JSX.Element {
  return (
    <section
      className={mergeClassNames(
        styles.projectPageSection,
        styles.pageItemContainer
      )}
    >
      <Row
        className={mergeClassNames(
          styles.projectPageSectionItems,
          styles.pageItemRow
        )}
      >
        <Breadcrumbs />
      </Row>
    </section>
  );
}

interface IProjectPageCoverImageProps {
  projectSlug: string;
  projectTitle: string;
}

function ProjectPageCoverImage({
  projectSlug,
  projectTitle,
}: IProjectPageCoverImageProps): JSX.Element {
  switch (projectSlug) {
    case `1290_Clark`: {
      return (
        <CoverImage
          alt={projectTitle}
          className={styles.projectPageMainCoverImage}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          priority={true}
          quality={100}
          src={Clark_1290}
        />
      );
    }

    case `High_Point_Park`: {
      return (
        <CoverImage
          alt={projectTitle}
          className={styles.projectPageMainCoverImage}
          layout="fill"
          objectFit="cover"
          priority={true}
          quality={100}
          src={High_Point_Park}
        />
      );
    }

    case `Impact_Plaza_Development`: {
      return (
        <CoverImage
          alt={projectTitle}
          className={styles.projectPageMainCoverImage}
          layout="fill"
          objectFit="cover"
          priority={true}
          quality={100}
          src={Impact_Plaza_Development}
        />
      );
    }

    case `Kyle_Kelowna`: {
      return (
        <CoverImage
          alt={projectTitle}
          className={styles.projectPageMainCoverImage}
          layout="fill"
          objectFit="cover"
          priority={true}
          quality={100}
          src={Kyle_Kelowna}
        />
      );
    }

    case `Morningside`: {
      return (
        <CoverImage
          alt={projectTitle}
          className={styles.projectPageMainCoverImage}
          layout="fill"
          objectFit="cover"
          priority={true}
          quality={100}
          src={Morningside}
        />
      );
    }

    case `Riverside`: {
      return (
        <CoverImage
          alt={projectTitle}
          className={styles.projectPageMainCoverImage}
          layout="fill"
          objectFit="cover"
          priority={true}
          quality={100}
          src={Riverside}
        />
      );
    }

    case `Vanguard_Strata`: {
      return (
        <CoverImage
          alt={projectTitle}
          className={styles.projectPageMainCoverImage}
          layout="fill"
          objectFit="cover"
          priority={true}
          quality={100}
          src={Vanguard_Strata}
        />
      );
    }

    case `1308_Adanac`: {
      return (
        <CoverImage
          alt={projectTitle}
          className={styles.projectPageMainCoverImage}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          priority={true}
          quality={100}
          src={Adanac_1308}
        />
      );
    }

    case `Monogram`: {
      return (
        <CoverImage
          alt={projectTitle}
          className={styles.projectPageMainCoverImage}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          priority={true}
          quality={100}
          src={Monogram}
        />
      );
    }

    case `Union_Bay`: {
      return (
        <CoverImage
          alt={projectTitle}
          className={styles.projectPageMainCoverImage}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          priority={true}
          quality={100}
          src={Union_Bay}
        />
      );
    }

    default: {
      return <></>;
    }
  }
}

function ProjectPageSecondSection({
  projectAddress,
  projectArchitect,
  projectBuilding,
  projectCompletion,
  projectLotSize,
  projectSalesAndMarketing,
  projectSite,
  projectStatus,
  projectSlug,
  projectTitle,
}: IProjectPageProps): JSX.Element {
  function getProjectAddress(): string {
    switch (projectSlug) {
      case `1290_Clark`: {
        return `1290 Clark Drive, Vancouver, BC`;
      }

      case `Kyle_Kelowna`: {
        return `2648 Kyle Road, Kelowna, BC`;
      }
      case `High_Point_Park`: {
        return `7415 LOWLAND DRIVE, BURNABY, BC`;
      }
      case `Vanguard_Strata`: {
        return `4720 Vanguard Road, Richmond, BC`;
      }

      case `1308_Adanac`: {
        return `1308 Adanac, Vancouver, BC`;
      }

      case `Impact_Plaza_Development`: {
        return `10040 152nd St. Surrey, BC`;
      }

      case `Riverside`: {
        return `11151, 11171, 11191 Horseshoe Way, Richmond, BC`;
      }

      default: {
        return ``;
      }
    }
  }

  function renderProjectPageInformation(): JSX.Element {
    switch (projectSlug) {
      // case `High_Point_Park`:
      case `Morningside`:
      case `Riverside`: {
        return <></>;
      }

      case `Impact_Plaza_Development`: {
        return (
          <>
            <br />
            <br />
          </>
        );
      }

      default: {
        return (
          <Row
            className={mergeClassNames(
              styles.projectPageInformation,
              styles.pageItemRow
            )}
          >
            <ProjectPageInformation slug={projectSlug} />
          </Row>
        );
      }
    }
  }

  return (
    <section
      className={mergeClassNames(
        styles.projectPageSection,
        styles.pageItemContainer
      )}
    >
      <Row
        className={mergeClassNames(
          styles.projectPageSectionItems,
          styles.pageItemRow
        )}
      >
        <Typography className={styles.projectPageTitle} tag="h1">
          {projectTitle}
        </Typography>
        <section className={styles.projectPageDescription}>
          <RenderEitherOr
            ifTrue={typeof projectAddress === `string` && projectAddress}
            thenRender={address => (
              <section className={styles.projectPageDescriptionContent}>
                <section className={styles.projectPageDescriptionSectionTitle}>
                  <ArrowForContent
                    contentPosition={ContentPosition.AFTER}
                    scale={0.5}
                  >
                    <Typography>{strings.projectPageAddressTitle}</Typography>
                  </ArrowForContent>
                </section>
                <Typography
                  className={styles.projectPageDescriptionSectionText}
                >
                  <LineBreakText text={address} />
                </Typography>
                <a
                  className={styles.projectPageDescriptionSectionAction}
                  href={`https://www.google.ca/maps?q=${getProjectAddress()}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ArrowForContent
                    contentPosition={ContentPosition.AFTER}
                    scale={0.5}
                  >
                    <Typography
                      className={styles.projectPageDescriptionSectionTitle}
                    >
                      {strings.googleMapActionText}
                    </Typography>
                  </ArrowForContent>
                </a>
              </section>
            )}
          />
          <RenderEitherOr
            ifTrue={typeof projectSite === `string` && projectSite}
            thenRender={site => (
              <section className={styles.projectPageDescriptionContent}>
                <section className={styles.projectPageDescriptionSectionTitle}>
                  <ArrowForContent
                    contentPosition={ContentPosition.AFTER}
                    scale={0.5}
                  >
                    <Typography>{strings.projectPageSiteTitle}</Typography>
                  </ArrowForContent>
                </section>
                <Typography
                  className={styles.projectPageDescriptionSectionText}
                >
                  <LineBreakText text={site} />
                </Typography>
              </section>
            )}
          />
          <RenderEitherOr
            ifTrue={typeof projectBuilding === `string` && projectBuilding}
            thenRender={building => (
              <section className={styles.projectPageDescriptionContent}>
                <section className={styles.projectPageDescriptionSectionTitle}>
                  <ArrowForContent
                    contentPosition={ContentPosition.AFTER}
                    scale={0.5}
                  >
                    <Typography>{strings.projectPageBuildingTitle}</Typography>
                  </ArrowForContent>
                </section>
                <Typography
                  className={styles.projectPageDescriptionSectionText}
                >
                  <LineBreakText text={building} />
                </Typography>
              </section>
            )}
          />
          <RenderEitherOr
            ifTrue={typeof projectLotSize === `string` && projectLotSize}
            thenRender={lotSize => (
              <section className={styles.projectPageDescriptionContent}>
                <section className={styles.projectPageDescriptionSectionTitle}>
                  <ArrowForContent
                    contentPosition={ContentPosition.AFTER}
                    scale={0.5}
                  >
                    <Typography>{strings.projectPageBuildingTitle}</Typography>
                  </ArrowForContent>
                </section>
                <Typography
                  className={styles.projectPageDescriptionSectionText}
                >
                  <LineBreakText text={lotSize} />
                </Typography>
              </section>
            )}
          />
          <RenderEitherOr
            ifTrue={typeof projectStatus === `string` && projectStatus}
            thenRender={status => (
              <section className={styles.projectPageDescriptionContent}>
                <section className={styles.projectPageDescriptionSectionTitle}>
                  <ArrowForContent
                    contentPosition={ContentPosition.AFTER}
                    scale={0.5}
                  >
                    <Typography>{strings.projectPageStatusTitle}</Typography>
                  </ArrowForContent>
                </section>
                <Typography
                  className={styles.projectPageDescriptionSectionText}
                >
                  <LineBreakText text={status} />
                </Typography>
              </section>
            )}
          />
          <RenderEitherOr
            ifTrue={typeof projectCompletion === `string` && projectCompletion}
            thenRender={completion => (
              <section className={styles.projectPageDescriptionContent}>
                <section className={styles.projectPageDescriptionSectionTitle}>
                  <ArrowForContent
                    contentPosition={ContentPosition.AFTER}
                    scale={0.5}
                  >
                    <Typography>
                      {strings.projectPageCompletionTitle}
                    </Typography>
                  </ArrowForContent>
                </section>
                <Typography
                  className={styles.projectPageDescriptionSectionText}
                >
                  <LineBreakText text={completion} />
                </Typography>
              </section>
            )}
          />
          <RenderEitherOr
            ifTrue={typeof projectArchitect === `string` && projectArchitect}
            thenRender={architect => (
              <section className={styles.projectPageDescriptionContent}>
                <section className={styles.projectPageDescriptionSectionTitle}>
                  <ArrowForContent
                    contentPosition={ContentPosition.AFTER}
                    scale={0.5}
                  >
                    <Typography>{strings.projectPageArchitectTitle}</Typography>
                  </ArrowForContent>
                </section>
                <Typography
                  className={styles.projectPageDescriptionSectionText}
                >
                  <LineBreakText text={architect} />
                </Typography>
              </section>
            )}
          />
          <RenderEitherOr
            ifTrue={
              typeof projectSalesAndMarketing === `string` &&
              projectSalesAndMarketing
            }
            thenRender={salesAndMarketing => (
              <section className={styles.projectPageDescriptionContent}>
                <section className={styles.projectPageDescriptionSectionTitle}>
                  <ArrowForContent
                    contentPosition={ContentPosition.AFTER}
                    scale={0.5}
                  >
                    <Typography>
                      {strings.projectPageSalesAndMarketingTitle}
                    </Typography>
                  </ArrowForContent>
                </section>
                <Typography
                  className={styles.projectPageDescriptionSectionText}
                >
                  <LineBreakText text={salesAndMarketing} />
                </Typography>
              </section>
            )}
          />
        </section>
      </Row>
      {renderProjectPageInformation()}
      <Row
        className={mergeClassNames(
          styles.projectPageImages,
          styles.pageItemRow
        )}
      >
        <ProjectPageImages slug={projectSlug} />
      </Row>
    </section>
  );
}

interface IProjectPageInformationProps {
  slug: string;
}

function ProjectPageInformation({
  slug,
}: IProjectPageInformationProps): JSX.Element {
  switch (slug) {
    case `1290_Clark`: {
      return (
        <section className={styles.projectPageInformationLeft}>
          <Typography
            style={{ [`--font-size`]: pxToRem(32) } as CSSProperties}
            tag="h2"
          >
            Strategically situated between Strathcona and Grandview-Woodland,
            these modern office and industrial spaces will play a major role in
            the rejuvenation of an entire neighborhood.
          </Typography>
          <Typography style={{ [`--font-weight`]: `bold` } as CSSProperties}>
            An industrial building can have style without sacrificing
            exceptional function. Featuring a unique blend of glazing, cement
            and corrugated metal panels, this will be an inspiring place to work
            whether you&apos;re getting the job done in an office or on the
            factory floor.
          </Typography>
          <Typography style={{ [`--color`]: `#959595` } as CSSProperties}>
            With a location that provides quick access to the Port of Vancouver
            and Downtown Vancouver, employees can easily service clients and
            products can efficiently get to market. Add in amenities for
            cyclists, lots of parking and an eco-conscious design and this
            becomes a beacon for the next wave of development in the area.
          </Typography>
        </section>
      );
    }
    case `High_Point_Park`: {
      return (
        <>
          <section className={styles.projectPageInformationLeft}>
            <Typography
              style={{ [`--font-size`]: pxToRem(32) } as CSSProperties}
              tag="h2"
            >
              Industrial strata owner/user & investment opportunity in South
              Burnaby.
            </Typography>
            <Typography style={{ [`--font-weight`]: `bold` } as CSSProperties}>
              24 light industrial strata units; 4 buildings totalling 81,723
              square feet.
            </Typography>
            <Typography style={{ [`--color`]: `#959595` } as CSSProperties}>
              Union Allied is pleased to present High Point Park - a 4-building,
              24-unit light industrial strata development with units starting
              from 3,062 square feet. This presents a unique opportunity for
              owner/users and investors to acquire sought-after industrial real
              estate.
            </Typography>
            <Typography style={{ [`--color`]: `#959595` } as CSSProperties}>
              Its central location close to vital highways and other major
              businesses and amenities make this an excellent opportunity to
              acquire a valuable industrial property in the growing Burnaby
              area. Construction is expected to start Q1 2023 and the project
              will be delivered in two phases, with phase 1 delivered in Q2 2024
              and phase 2 delivered in Q2 2025.
            </Typography>
          </section>
          <section className={styles.projectPageInformationActions}>
            <a
              className={styles.projectPageInformationAction}
              href="https://www.unionallied.ca/high_point_park"
              rel="noopener noreferrer"
              target="_blank"
            >
              <ArrowForContent>
                <Typography>{strings.websiteTitle}</Typography>
              </ArrowForContent>
            </a>
            <a
              className={styles.projectPageInformationAction}
              download={true}
              href="/Projects/High_Point_Park_Brochure.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              <ArrowForContent>
                <Typography>{strings.brochureTitle}</Typography>
              </ArrowForContent>
            </a>
            {/* <a
              className={styles.projectPageInformationAction}
              download={true}
              href="/Projects/High_Point_Park_Floorplan.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              <ArrowForContent>
                <Typography>{strings.floorplanTitle}</Typography>
              </ArrowForContent>
            </a> */}
            {/* <a
              className={styles.projectPageInformationAction}
              download={true}
              href="/Projects/Kyle_Kelowna_PricingSheet.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              <ArrowForContent>
                <Typography>{strings.pricingSheetTitle}</Typography>
              </ArrowForContent>
            </a> */}
          </section>
        </>
      );
    }
    case `Kyle_Kelowna`: {
      return (
        <>
          <section className={styles.projectPageInformationLeft}>
            <Typography
              style={{ [`--font-size`]: pxToRem(32) } as CSSProperties}
              tag="h2"
            >
              The next level opportunity in Industrial ownership.
            </Typography>
            <Typography style={{ [`--font-weight`]: `bold` } as CSSProperties}>
              20 industrial / office strata units with a total of 34,575 sf in
              west kelowna.
            </Typography>
            <Typography style={{ [`--color`]: `#959595` } as CSSProperties}>
              Kyle Kelowna gives investors the chance to lease new cutting-edge,
              industry-leading industrial space in an up-and-coming sector in
              the Kelowna Area, BC. Offering 20 lots for a total of 34,575 SF
              including concrete mezzanine space, Kyle Kelowna features
              top-of-the-line specifications including a 24&apos; clear ceiling
              height, 12&apos; x 14&apos; grade-level loading doors, 100A
              3-phase electrical service and a full sprinkler system. Create
              your next opportunity at West Kelowna&apos;s newest industrial
              development before the competition comes along.
            </Typography>
          </section>
          <section className={styles.projectPageInformationActions}>
            <a
              className={styles.projectPageInformationAction}
              href="http://kyle-kelowna.unionallied.ca/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <ArrowForContent>
                <Typography>{strings.websiteTitle}</Typography>
              </ArrowForContent>
            </a>
            <a
              className={styles.projectPageInformationAction}
              download={true}
              href="/Projects/Kyle_Kelowna_Brochure.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              <ArrowForContent>
                <Typography>{strings.brochureTitle}</Typography>
              </ArrowForContent>
            </a>
            <a
              className={styles.projectPageInformationAction}
              download={true}
              href="/Projects/Kyle_Kelowna_Floorplan.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              <ArrowForContent>
                <Typography>{strings.floorplanTitle}</Typography>
              </ArrowForContent>
            </a>
            <a
              className={styles.projectPageInformationAction}
              download={true}
              href="/Projects/Kyle_Kelowna_PricingSheet.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              <ArrowForContent>
                <Typography>{strings.pricingSheetTitle}</Typography>
              </ArrowForContent>
            </a>
          </section>
        </>
      );
    }

    case `1308_Adanac`: {
      return (
        <section className={styles.projectPageInformationLeft}>
          <Typography
            style={{ [`--font-size`]: pxToRem(32) } as CSSProperties}
            tag="h2"
          >
            Tailored to where business is going
          </Typography>
          <Typography style={{ [`--font-weight`]: `bold` } as CSSProperties}>
            Sleek and stylish office space meets modern and functional
            industrial space. This building was designed to show the
            neighbourhood that the future is bright.
          </Typography>
          <Typography style={{ [`--color`]: `#959595` } as CSSProperties}>
            1308 Adanac is what modern urban industrial buildings should look
            like. The first 3 floors consist of over 30,000 square feet of light
            industrial space that&apos;s been consciously designed to
            accommodate a wide variety of industries. The top 2 floors feature
            flexible modern office space with the future forward amenities that
            up and coming businesses demand, including high tech wiring, a huge
            rooftop patio and end of trip facilities for cycling to work.
          </Typography>
        </section>
      );
    }

    case `Vanguard_Strata`: {
      return (
        <>
          <section className={styles.projectPageInformationLeft}>
            <Typography
              style={{ [`--font-size`]: pxToRem(32) } as CSSProperties}
              tag="h2"
            >
              The forefront of industrial development.
            </Typography>
            <Typography style={{ [`--font-weight`]: `bold` } as CSSProperties}>
              The first stacked industrial building in Richmond, this modern
              design will densify the neighbourhood and set the standard for
              future industrial developments in the city.
            </Typography>
            <Typography style={{ [`--color`]: `#959595` } as CSSProperties}>
              With over 200,000 sq-ft spanning across 4.8 acres, Vanguard will
              meet the needs of any occupants with its large open concept
              showrooms, efficient warehouses and modern office space. Every
              unit boasts 23&apos; clear ceilings, individual loading doors and
              access to numerous full-sized freight elevators. This concrete
              tilt-up and structural steel building features 240 parking stalls,
              an outdoor walkway connecting the units and large windows that
              provide natural light.
            </Typography>
            <Typography style={{ [`--color`]: `#959595` } as CSSProperties}>
              Strategically located near all major hubs and commercial
              facilities in Metro Vancouver, Vanguard gives quick access to
              Highways 99 and 91, YVR airport, the Richmond core, Downtown
              Vancouver and the Port of Vancouver. The site also has great
              public exposure with access to major commuter and transportation
              routes.
            </Typography>
          </section>
        </>
      );
    }

    case `Monogram`: {
      return (
        <>
          <section className={styles.projectPageInformationLeft}>
            <Typography
              style={{ [`--font-size`]: pxToRem(32) } as CSSProperties}
              tag="h2"
            >
              Six consciously designed townhomes in the heart of
              Grandview-Woodland.
            </Typography>
            <Typography
              style={{ [`--font-size`]: pxToRem(32) } as CSSProperties}
            >
              Coming soon.
            </Typography>
          </section>
        </>
      );
    }

    case `Union_Bay`: {
      return (
        <>
          <section className={styles.projectPageInformationLeft}>
            <Typography
              style={{ [`--font-size`]: pxToRem(32) } as CSSProperties}
              tag="h2"
            >
              Townhouse development in Vancouver island.
            </Typography>
          </section>
        </>
      );
    }

    default: {
      return <></>;
    }
  }
}

interface IProjectPageImagesProps {
  slug: string;
}

function ProjectPageImages({ slug }: IProjectPageImagesProps): JSX.Element {
  switch (slug) {
    case `1290_Clark`: {
      return (
        <section
          className={mergeClassNames(
            styles.projectPageImagesContainer,
            styles.pageItemRow
          )}
        >
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="1290 Clark Dollhouse"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Clark_1290_Dollhouse,
              }}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="1290 Clark Lab 1"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Clark_1290_Lab_1,
              }}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="1290 Clark Lab 2"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Clark_1290_Lab_2,
              }}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="1290 Clark Office 1"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Clark_1290_Office_1,
              }}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="1290 Clark Office 2"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Clark_1290_Office_2,
              }}
            />
          </section>
        </section>
      );
    }

    case `1308_Adanac`: {
      return (
        <section
          className={mergeClassNames(
            styles.projectPageImagesContainer,
            styles.pageItemRow
          )}
        >
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="1308 Adanac Dining Space"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Adanac_1308_Dining_Space,
              }}
              title={<Typography>Dining space</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="1308 Adanac Common rooftop patio"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Adanac_1308_Common_Rooftop_Patio,
              }}
              title={<Typography>Common rooftop patio</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="1308 Adanac Multi Use Building"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Adanac_1308_Multi_Use_Building,
              }}
              title={<Typography>Multi Use Building</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="1308 Adanac office area"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Adanac_1308_Office_Area,
              }}
              title={<Typography>Office Area</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="1308 Adanac Rendering 1"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Adanac_1308_Rendering_1,
              }}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="1308 Adanac Rendering 2"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Adanac_1308_Rendering_2,
              }}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="1308 Adanac 1"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Adanac_1308_1,
              }}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="1308 Adanac 2"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Adanac_1308_2,
              }}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="1308 Adanac 3"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Adanac_1308_3,
              }}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="1308 Adanac 4"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Adanac_1308_4,
              }}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="1308 Adanac 5"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Adanac_1308_5,
              }}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="1308 Adanac 6"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Adanac_1308_6,
              }}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="1308 Adanac 7"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Adanac_1308_7,
              }}
            />
          </section>
        </section>
      );
    }

    case `High_Point_Park`: {
      return (
        <section
          className={mergeClassNames(
            styles.projectPageImagesContainer,
            styles.pageItemRow
          )}
        >
          <section className={styles.projectPageImageTwo}>
            <ContentCard
              alt="Aerial View"
              imageClassName={styles.projectPageCoverImageTwo}
              imageProps={{
                layout: `fill`,
                objectFit: `contain`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: High_Point_Park_Aerial_View,
              }}
              title={<Typography>Aerial view</Typography>}
            />
          </section>
          <section className={styles.projectPageImageTwo}>
            <ContentCard
              alt="High Point Park Dollhouse 1"
              imageClassName={styles.projectPageCoverImageTwo}
              imageProps={{
                layout: `fill`,
                objectFit: `contain`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: High_Point_Park_Dollhouse_1,
              }}
              title={<Typography>Dollhouse 1</Typography>}
            />
          </section>
          <section className={styles.projectPageImageTwo}>
            <ContentCard
              alt="High Point Park Dollhouse 2"
              imageClassName={styles.projectPageCoverImageTwo}
              imageProps={{
                layout: `fill`,
                objectFit: `contain`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: High_Point_Park_Dollhouse_2,
              }}
              title={<Typography>Dollhouse 2</Typography>}
            />
          </section>
          <section className={styles.projectPageImageTwo}>
            <ContentCard
              alt="High Point Park Dollhouse 2"
              imageClassName={styles.projectPageCoverImageTwo}
              imageProps={{
                layout: `fill`,
                objectFit: `contain`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: High_Point_Park,
              }}
              title={<Typography>Hight Point Park Street View</Typography>}
            />
          </section>
        </section>
      );
    }

    case `Impact_Plaza_Development`: {
      return (
        <section
          className={mergeClassNames(
            styles.projectPageImagesContainer,
            styles.pageItemRow
          )}
        >
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Aerial Night"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Impact_Plaza_Development_Aerial_Night,
              }}
              title={<Typography>Aerial night</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Impact Plaza Development Elevation 1"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Impact_Plaza_Development_Elevation_1,
              }}
              title={<Typography>Elevation 1</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Impact Plaza Development Elevation 2"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Impact_Plaza_Development_Elevation_2,
              }}
              title={<Typography>Elevation 2</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Impact Plaza Development Elevation 3"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Impact_Plaza_Development_Elevation_3,
              }}
              title={<Typography>Elevation 3</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Impact Plaza Development Street View 1"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Impact_Plaza_Development_Street_View_1,
              }}
              title={<Typography>Street_View 1</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Impact Plaza Development Street View 2"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Impact_Plaza_Development_Street_View_2,
              }}
              title={<Typography>Street_View 2</Typography>}
            />
          </section>
        </section>
      );
    }

    case `Kyle_Kelowna`: {
      return (
        <section
          className={mergeClassNames(
            styles.projectPageImagesContainer,
            styles.pageItemRow
          )}
        >
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Kyle Kelowna 1"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Kyle_Kelowna_1,
              }}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Kyle Kelowna 2"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Kyle_Kelowna_2,
              }}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Kyle Kelowna 3"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Kyle_Kelowna_3,
              }}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Kyle Kelowna 4"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Kyle_Kelowna_4,
              }}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Kyle Kelowna 5"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Kyle_Kelowna_5,
              }}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Kyle Kelowna 6"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Kyle_Kelowna_6,
              }}
            />
          </section>
        </section>
      );
    }

    case `Morningside`: {
      return (
        <section
          className={mergeClassNames(
            styles.projectPageImagesContainer,
            styles.pageItemRow
          )}
        >
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Morningside Avenue Elevation"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Morningside_Avenue_Elevation,
              }}
              title={<Typography>Avenue elevation</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Morningside McNicoll Avenue Elevation"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Morningside_McNicoll_Avenue_Elevation,
              }}
              title={<Typography>McNicoll Avenue elevation</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Morningside South Elevation"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Morningside_South_Elevation,
              }}
              title={<Typography>South elevation</Typography>}
            />
          </section>
        </section>
      );
    }

    case `Riverside`: {
      return (
        <section
          className={mergeClassNames(
            styles.projectPageImagesContainer,
            styles.pageItemRow
          )}
        >
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Riverside 11151 Horseshoe Way 1"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Riverside_11151_Horseshoe_Way_1,
              }}
              title={<Typography>11151 Horseshoe Way 1</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Riverside 11151 Horseshoe Way 2"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Riverside_11151_Horseshoe_Way_2,
              }}
              title={<Typography>11151 Horseshoe Way 2</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Riverside 11151 Horseshoe Way 3"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Riverside_11151_Horseshoe_Way_3,
              }}
              title={<Typography>11151 Horseshoe Way 3</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Riverside 11151 Horseshoe Way 4"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Riverside_11151_Horseshoe_Way_4,
              }}
              title={<Typography>11151 Horseshoe Way 4</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Riverside 11151 Horseshoe Way 5"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Riverside_11151_Horseshoe_Way_5,
              }}
              title={<Typography>11151 Horseshoe Way 5</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Riverside 11171 Horseshoe Way 1"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Riverside_11171_Horseshoe_Way_1,
              }}
              title={<Typography>11171 Horseshoe Way 1</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Riverside 11171 Horseshoe Way 2"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Riverside_11171_Horseshoe_Way_2,
              }}
              title={<Typography>11171 Horseshoe Way 2</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Riverside 11171 Horseshoe Way 3"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Riverside_11171_Horseshoe_Way_3,
              }}
              title={<Typography>11171 Horseshoe Way 3</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Riverside Horseshoe Way Street View"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Riverside_Horseshoe_Way_Street_View,
              }}
              title={<Typography>Horseshoe Way Street View</Typography>}
            />
          </section>
        </section>
      );
    }

    case `Union_Bay`: {
      return (
        <section
          className={mergeClassNames(
            styles.projectPageImagesContainer,
            styles.pageItemRow
          )}
        >
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Union Bay Aerial View 1"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Union_Bay_Aerial_View_1,
              }}
              title={<Typography>Aerial view 1</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Union Bay Aerial View 2"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Union_Bay_Aerial_View_2,
              }}
              title={<Typography>Aerial view 2</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Union Bay Siteplan"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Union_Bay_Siteplan,
              }}
              title={<Typography>Siteplan</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Union Bay Street View"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Union_Bay_Street_View,
              }}
              title={<Typography>Street view</Typography>}
            />
          </section>
        </section>
      );
    }

    case `Vanguard_Strata`: {
      return (
        <section
          className={mergeClassNames(
            styles.projectPageImagesContainer,
            styles.pageItemRow
          )}
        >
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Vanguard Strata Court Yard View"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Vanguard_Strata_Court_Yard_View,
              }}
              title={<Typography>Court Yard View</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Vanguard Strata Dining space"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Vanguard_Strata_Dining_Space,
              }}
              title={<Typography>Dining space</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Vanguard Strata Dollhouse"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Vanguard_Strata_Dollhouse,
              }}
              title={<Typography>Dollhouse</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Vanguard Strata Landscaping"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Vanguard_Strata_Landscaping,
              }}
              title={<Typography>Landscaping</Typography>}
            />
          </section>
          <section className={styles.projectPageImage}>
            <ContentCard
              alt="Vanguard Strata Showrooms"
              imageClassName={styles.projectPageCoverImage}
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                priority: true,
                quality: 100,
                src: Vanguard_Strata_Showrooms,
              }}
              title={<Typography>Showrooms</Typography>}
            />
          </section>
        </section>
      );
    }

    default: {
      return <></>;
    }
  }
}

interface IProjectPageParams extends ParsedUrlQuery {
  projectSlug: string;
}

export function getStaticPaths(): GetStaticPathsResult<IProjectPageParams> {
  return {
    fallback: false,
    paths: [
      {
        params: {
          projectSlug: '1290_Clark',
        },
      },
      {
        params: {
          projectSlug: `Kyle_Kelowna`,
        },
      },
      {
        params: {
          projectSlug: `1308_Adanac`,
        },
      },
      {
        params: {
          projectSlug: `Vanguard_Strata`,
        },
      },
      {
        params: {
          projectSlug: `Monogram`,
        },
      },
      {
        params: {
          projectSlug: `Union_Bay`,
        },
      },
      {
        params: {
          projectSlug: `High_Point_Park`,
        },
      },
      {
        params: {
          projectSlug: `Riverside`,
        },
      },
      {
        params: {
          projectSlug: `Morningside`,
        },
      },
      {
        params: {
          projectSlug: `HQ_South_Van_-_Ross_Road`,
        },
      },
      {
        params: {
          projectSlug: `Impact_Plaza_Development`,
        },
      },
      {
        params: {
          projectSlug: `3653_Wayburne`,
        },
      },
      {
        params: {
          projectSlug: `Kelowna_2`,
        },
      },
      {
        params: {
          projectSlug: `13799_Commerce_Parkway`,
        },
      },
      {
        params: {
          projectSlug: `12511_Vulcan`,
        },
      },
    ],
  };
}

interface IProjectPageProps {
  projectAddress?: string;
  projectArchitect?: string;
  projectBuilding?: string;
  projectCompletion?: string;
  projectLotSize?: string;
  projectSalesAndMarketing?: string;
  projectSlug: string;
  projectSite?: string;
  projectStatus?: string;
  projectTitle: string;
}

export function getStaticProps(
  context: GetStaticPropsContext<IProjectPageParams>
): GetStaticPropsResult<IProjectPageProps> {
  if (context.params) {
    const projectSlug = context.params.projectSlug;
    const projectTitle = context.params.projectSlug.replace(/_/g, ` `);

    switch (context.params.projectSlug) {
      case `1290_Clark`: {
        return {
          props: {
            projectAddress: `1290 Clark Drive, {0} Vancouver, BC`,
            projectBuilding: `Over 116,000 SQFT, {0} 5 Storeys`,
            projectCompletion: `2022 Q3`,
            projectSite: `1-2 Zoning`,
            projectSlug,
            projectStatus: `Designing phase {0} in progress`,
            projectTitle,
          },
        };
      }

      case `Kyle_Kelowna`: {
        return {
          props: {
            projectAddress: `2648 Kyle Road, {0} Kelowna, BC`,
            projectBuilding: `34,575 SQFT, {0} 20 Industrial Office / Strata Units`,
            projectSalesAndMarketing: `Avison Young`,
            projectSite: `I-1 General Industrial Zone`,
            projectSlug,
            projectTitle,
          },
        };
      }
      case `High_Point_Park`: {
        return {
          props: {
            projectAddress: `7415 Lowland Drive, Burnaby, BC`,
            projectBuilding: `81,723 SQFT, 4 BUILDINGS, 24 UNITS.`,
            projectSalesAndMarketing: `Avison Young`,
            projectSite: `M2 General Industrial District`,
            projectSlug,
            projectTitle,
          },
        };
      }
      case `1308_Adanac`: {
        return {
          props: {
            projectAddress: `1308 Adanac, {0} Vancouver, BC`,
            projectBuilding: `55,000SQFT {0} 5 Storey {0} Floors 1-3 {0} (Light Industrial) {0} Floors 4-5 {0} (Offices)`,
            projectCompletion: `2021 Q2`,
            projectSite: `1-2 Zoning {0} 18,391 SQFT`,
            projectSlug,
            projectStatus: `Getting ready {0} for demolition in {0} February of 2022`,
            projectTitle,
          },
        };
      }

      case `Vanguard_Strata`: {
        return {
          props: {
            projectAddress: `4720 Vanguard Road, {0} Richmond, BC`,
            projectBuilding: `205 000 Sqft, {0} 2 Storey Building, Main Floor And Mezzanine On Each Floor`,
            projectCompletion: `2021 Q3`,
            projectSite: `IR1 {0} 4.8 acres`,
            projectSlug,
            projectStatus: `Designing phase {0} in progress`,
            projectTitle,
          },
        };
      }

      case `Union_Bay`: {
        return {
          props: {
            projectBuilding: `55 Unit {0} Live-Work,Townhome Development Approx. 85,000sf buildable`,
            projectCompletion: `2024 Q2`,
            projectLotSize: `3.3 acres`,
            projectSite: `Townhouse {0} Development`,
            projectSlug,
            projectStatus: `Permitting`,
            projectTitle,
          },
        };
      }

      case `Riverside`: {
        return {
          props: {
            projectAddress: `11151, 11171, 11191 Horseshoe Way, {0} Richmond, BC`,
            projectBuilding: `34 Units of {0} 60 units for sale total {0} 81,956 SF`,
            projectSite: `IB1 Zoning`,
            projectSlug,
            projectStatus: `Ready Immediately`,
            projectTitle,
          },
        };
      }

      case `Impact_Plaza_Development`: {
        return {
          props: {
            projectAddress: `10040 152nd St. {0} Surrey, BC`,
            projectBuilding: `Approx. 1,200,000 sq {0} mixed use.`,
            projectCompletion: `TBD`,
            projectSite: `Guildford`,
            projectSlug,
            projectStatus: `In Development`,
            projectTitle,
          },
        };
      }

      default: {
        return {
          props: {
            projectSlug: context.params.projectSlug,
            projectTitle: context.params.projectSlug.replace(/_/g, ` `),
          },
        };
      }
    }
  }

  return {
    notFound: true,
  };
}
