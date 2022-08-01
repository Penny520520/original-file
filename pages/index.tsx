import { strings } from '~/localization';
import {
  ArrowForContent,
  Carousel,
  CoverImage,
  LineBreakText,
  ContentCard,
  Row,
  Typography,
  ApproachPageAccordion,
  CareersPageItem,
  LogoGrid,
  TwoItemContentGrid,
} from '~/components';
import Image from 'next/image';
import Link from 'next/link';
import styles from 'styles/pages/HomePage.styles.module.scss';
import { useBoolean } from '~/hooks';
import { mergeClassNames, pxToRem, RenderEitherOr, RenderList } from '~/utils';
import { CSSProperties, forwardRef, MutableRefObject, useRef } from 'react';
import { OrNull } from '~/types';
import { GetStaticPropsResult, InferGetStaticPropsType } from 'next';
import { getNewsArticlesAsync, INewsArticle } from '~/server/utils';
import Adanac_1308_1 from 'public/Projects/1308_Adanac_1.jpg';
import Adanac_1308_2 from 'public/Projects/1308_Adanac_2.jpg';
import Adanac_1308_3 from 'public/Projects/1308_Adanac_3.jpg';
import Adanac_1308_4 from 'public/Projects/1308_Adanac_4.jpg';
import Adanac_1308_5 from 'public/Projects/1308_Adanac_5.jpg';
import Adanac_1308_6 from 'public/Projects/1308_Adanac_6.jpg';
import Adanac_1308_7 from 'public/Projects/1308_Adanac_7.jpg';
import TnTLogo from 'public/Tenants/T&TLogo.svg.png';
import SleepCountryLogo from 'public/Tenants/SleepCountryLogo.jpg';
import UPSLogo from 'public/Tenants/UPSLogo.png';
import CBSALogo from 'public/Tenants/CBSALogo.png';
import CanadaComputerLogo from 'public/Tenants/CanadaComputerLogo.png';
import BubbleWorldLogo from 'public/Tenants/BubbleWorldLogo.png';
import PrimericaLogo from 'public/Tenants/PrimericaLogo.svg.png';
import BarcelosLogo from 'public/Tenants/BarcelosLogo.png';
import MooresLogo from 'public/Tenants/MooresLogo.jpg';
import SubwayLogo from 'public/Tenants/SubwayLogo.png';
import PharmasaveLogo from 'public/Tenants/PharmasaveLogo.jpg';
import RioCanLogo from 'public/Tenants/RioCanLogo.jpg';
import MnMLogo from 'public/Tenants/M&MLogo.png';
import JadeValleyLogo from 'public/Tenants/JadeValleyLogo.png';
import Kyle_Kelowna from 'public/Projects/Kyle_Kelowna.jpg';
import Clark_1290 from 'public/Projects/1290_Clark.jpg';
import Vanguard_Strata from 'public/Projects/Vanguard_Strata.jpg';
import Adanac_1308 from 'public/Projects/1308_Adanac.jpg';

export default function HomePage(
  props: InferGetStaticPropsType<typeof getStaticProps>
): JSX.Element {
  const aboutPageItemTitle = useAboutPageTitleRef();

  function focusOnAboutPageItemTitle(): void {
    const scrollToTarget = aboutPageItemTitle.current;
    if (scrollToTarget) {
      const headerOffset = 80;

      document.body.scrollTop =
        scrollToTarget.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        headerOffset;
    }
  }

  return (
    <>
      <HomePageCarousel onArrowClick={focusOnAboutPageItemTitle} />
      <AboutPageItem ref={aboutPageItemTitle} />
      <ProjectsPageItem />
      <TenantsItem />
      <ApproachPageItem />
      <NewsPageItem newsArticles={props.newsArticles} />
      <CareersPageItem />
    </>
  );
}

function useAboutPageTitleRef(): MutableRefObject<OrNull<HTMLElement>> {
  return useRef<OrNull<HTMLElement>>(null);
}
interface IHomePageCarouselProps {
  onArrowClick(): void;
}

function HomePageCarousel({
  onArrowClick,
}: IHomePageCarouselProps): JSX.Element {
  const images = [
    Adanac_1308_1,
    Adanac_1308_2,
    Adanac_1308_3,
    Adanac_1308_4,
    Adanac_1308_5,
    Adanac_1308_6,
    Adanac_1308_7,
  ];

  return (
    <section className={styles.homePageCarousel}>
      <Carousel items={images}>
        {(active: boolean, image: StaticImageData, index: number) => {
          return (
            <CoverImage
              key={image.src}
              alt={`1308_Adanac_${index + 1}`}
              arrowForContent={
                <button
                  className={styles.homePageCarouselItemAction}
                  onClick={onArrowClick}
                >
                  <ArrowForContent>
                    <Typography tag="h1">1308 Adanac</Typography>
                  </ArrowForContent>
                </button>
              }
              className={mergeClassNames(
                styles.homePageCarouselItem,
                !active && styles.homePageCarouselItemOut,
                active && styles.homePageCarouselItemIn
              )}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              priority={true}
              src={image}
              title="1308 Adanac"
            />
          );
        }}
      </Carousel>
    </section>
  );
}

const AboutPageItem = forwardRef<HTMLElement>(function AboutPageItemComponent(
  _,
  ref
): JSX.Element {
  const [anchorTagHovered, actions] = useBoolean();

  return (
    <section
      className={mergeClassNames(
        styles.aboutPageItemContainer,
        styles.pageItemContainer
      )}
    >
      <Row className={styles.pageItemRow}>
        <Link href="/about" passHref={true}>
          <a
            className={mergeClassNames(
              styles.aboutPageItemAction,
              styles.pageItemAction,
              anchorTagHovered && styles.aboutPageItemActionHovered,
              anchorTagHovered && styles.pageItemActionHovered
            )}
            onBlur={actions.setTrue}
            onFocus={actions.setTrue}
            onMouseLeave={actions.setFalse}
            onMouseOver={actions.setTrue}
          >
            <Typography
              className={styles.aboutPageItemIntroText}
              ref={ref}
              tag="h2"
            >
              <LineBreakText text={strings.homePageAboutText} />
            </Typography>
          </a>
        </Link>
        <Link href="/about" passHref={true}>
          <a
            className={mergeClassNames(
              styles.aboutPageItemArrowAction,
              styles.pageItemArrowAction,
              anchorTagHovered && styles.aboutPageItemArrowActionHovered,
              anchorTagHovered && styles.pageItemArrowActionHovered
            )}
            onBlur={actions.setTrue}
            onFocus={actions.setTrue}
            onMouseLeave={actions.setFalse}
            onMouseOver={actions.setTrue}
          >
            <ArrowForContent>
              <Typography>{strings.titleForAboutPage.toUpperCase()}</Typography>
            </ArrowForContent>
          </a>
        </Link>
      </Row>
    </section>
  );
});

AboutPageItem.displayName = `AboutPageItem`;

function ProjectsPageItem(): JSX.Element {
  return (
    <section
      className={mergeClassNames(
        styles.projectsPageItemContainer,
        styles.pageItemContainer
      )}
    >
      <Row
        className={mergeClassNames(
          styles.projectsPageItemTopRow,
          styles.pageItemRow
        )}
      >
        <ContentCard
          alt="Kyle Kelowna"
          containerClassName={styles.projectsPageItemTopRowLarge}
          href="/projects/Kyle_Kelowna"
          imageClassName={mergeClassNames(
            styles.projectsPageItemImage,
            styles.pageItemImage
          )}
          imageProps={{
            layout: `fill`,
            placeholder: `blur`,
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
        <ContentCard
          alt="1290 Clark"
          containerClassName={styles.projectsPageItemTopRowSmall}
          href="/projects/1290_Clark"
          imageProps={{ layout: `fill`, placeholder: `blur`, src: Clark_1290 }}
          imageClassName={mergeClassNames(
            styles.projectsPageItemImage,
            styles.pageItemImage
          )}
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
        <Link href="/projects" passHref={true}>
          <a
            className={mergeClassNames(
              styles.projectsPageItemArrowAction,
              styles.pageItemArrowAction
            )}
          >
            <ArrowForContent>
              <Typography className={styles.projectsPageArrowActionText}>
                {strings.titleForProjectsPage.toUpperCase()}
              </Typography>
            </ArrowForContent>
          </a>
        </Link>
      </Row>
      <Row
        className={mergeClassNames(
          styles.projectsPageItemBottomRow,
          styles.pageItemRow
        )}
      >
        <TwoItemContentGrid
          style={
            {
              [`--row-items-gap`]: pxToRem(64),
            } as CSSProperties
          }
        >
          <section data-row={true}>
            <ContentCard
              alt="Vanguard Strata"
              containerClassName={styles.projectsPageItemBottomRowSmall}
              href="/projects/Vanguard_Strata"
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                src: Vanguard_Strata,
              }}
              imageClassName={mergeClassNames(
                styles.projectsPageItemImage,
                styles.pageItemImage
              )}
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
            <ContentCard
              alt="1308 Adanac"
              containerClassName={styles.projectsPageItemBottomRowLarge}
              href="/projects/1308_Adanac"
              imageProps={{
                layout: `fill`,
                placeholder: `blur`,
                src: Adanac_1308,
              }}
              imageClassName={mergeClassNames(
                styles.projectsPageItemImage,
                styles.pageItemImage
              )}
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
          </section>
        </TwoItemContentGrid>
      </Row>
    </section>
  );
}

function TenantsItem(): JSX.Element {
  return (
    <section
      className={mergeClassNames(
        styles.tenantsPageItemContainer,
        styles.pageItemContainer
      )}
    >
      <section
        className={mergeClassNames(styles.tenantsRowItems, styles.pageItemRow)}
      >
        <LogoGrid title={strings.keyTenantsTitle}>
          {logoClassName => (
            <Row className={styles.tenantLogos}>
              <section
                className={mergeClassNames(logoClassName, styles.tenantLogo)}
              >
                <Image
                  alt="T&T"
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  src={TnTLogo}
                />
              </section>
              <section
                className={mergeClassNames(logoClassName, styles.tenantLogo)}
              >
                <Image
                  alt="Sleep Country"
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  src={SleepCountryLogo}
                />
              </section>
              <section
                className={mergeClassNames(logoClassName, styles.tenantLogo)}
              >
                <Image
                  alt="UPS"
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  src={UPSLogo}
                />
              </section>
              <section
                className={mergeClassNames(logoClassName, styles.tenantLogo)}
              >
                <Image
                  alt="CBSA"
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  src={CBSALogo}
                />
              </section>
              <section
                className={mergeClassNames(logoClassName, styles.tenantLogo)}
              >
                <Image
                  alt="Canada Computers"
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  src={CanadaComputerLogo}
                />
              </section>
              <section
                className={mergeClassNames(logoClassName, styles.tenantLogo)}
              >
                <Image
                  alt="Bubble World"
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  src={BubbleWorldLogo}
                />
              </section>
              <section
                className={mergeClassNames(logoClassName, styles.tenantLogo)}
              >
                <Image
                  alt="Primerica"
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  src={PrimericaLogo}
                />
              </section>
              <section
                className={mergeClassNames(logoClassName, styles.tenantLogo)}
              >
                <Image
                  alt="Barcelos"
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  src={BarcelosLogo}
                />
              </section>
              <section
                className={mergeClassNames(logoClassName, styles.tenantLogo)}
              >
                <Image
                  alt="Moores"
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  src={MooresLogo}
                />
              </section>
              <section
                className={mergeClassNames(logoClassName, styles.tenantLogo)}
              >
                <Image
                  alt="Subway"
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  src={SubwayLogo}
                />
              </section>
              <section
                className={mergeClassNames(logoClassName, styles.tenantLogo)}
              >
                <Image
                  alt="Pharmasave"
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  src={PharmasaveLogo}
                />
              </section>
              <section
                className={mergeClassNames(logoClassName, styles.tenantLogo)}
              >
                <Image
                  alt="Rio Canada"
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  src={RioCanLogo}
                />
              </section>
              <section
                className={mergeClassNames(logoClassName, styles.tenantLogo)}
              >
                <Image
                  alt="M&M"
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  src={MnMLogo}
                />
              </section>
              <section
                className={mergeClassNames(logoClassName, styles.tenantLogo)}
              >
                <Image
                  alt="JadeValley"
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  src={JadeValleyLogo}
                />
              </section>
            </Row>
          )}
        </LogoGrid>
      </section>
    </section>
  );
}

function ApproachPageItem(): JSX.Element {
  const [anchorTagHovered, actions] = useBoolean();

  return (
    <section
      className={mergeClassNames(
        styles.approachPageItemContainer,
        styles.pageItemContainer
      )}
    >
      <Row className={styles.pageItemRow}>
        <Link href="/approach" passHref={true}>
          <a
            className={mergeClassNames(
              styles.pageItemAction,
              anchorTagHovered && styles.pageItemActionHovered
            )}
            onBlur={actions.setTrue}
            onFocus={actions.setTrue}
            onMouseLeave={actions.setFalse}
            onMouseOver={actions.setTrue}
          >
            <Typography className={styles.approachPageIntroText} tag="h2">
              <LineBreakText
                text={strings.approachPageAboutText}
                renderTextItem={(
                  textItem: string,
                  index: number
                ): JSX.Element => {
                  return (
                    <span
                      key={textItem}
                      className={mergeClassNames(
                        index !== 0 && styles.approachPageIntroSecondaryText
                      )}
                    >
                      {textItem}
                    </span>
                  );
                }}
              />
            </Typography>
          </a>
        </Link>
        <Link href="/approach" passHref={true}>
          <a
            className={mergeClassNames(
              styles.pageItemArrowAction,
              anchorTagHovered && styles.pageItemArrowActionHovered
            )}
            onBlur={actions.setTrue}
            onFocus={actions.setTrue}
            onMouseLeave={actions.setFalse}
            onMouseOver={actions.setTrue}
          >
            <ArrowForContent>
              <Typography className={styles.approachPageItemArrowAction}>
                {strings.titleForApproachPage.toUpperCase()}
              </Typography>
            </ArrowForContent>
          </a>
        </Link>
      </Row>
      <hr
        className={mergeClassNames(
          styles.approachPageRowRule,
          styles.pageItemRow
        )}
      />
      <section className={styles.pageItemRow}>
        <ApproachPageAccordion />
      </section>
    </section>
  );
}

interface INewsPageItemProps {
  newsArticles: Array<INewsArticle>;
}

function NewsPageItem({ newsArticles }: INewsPageItemProps): JSX.Element {
  return (
    <RenderEitherOr
      ifTrue={newsArticles.length && newsArticles}
      thenRender={articles => (
        <section className={styles.pageItemContainer}>
          <Row className={styles.pageItemRow}>
            <Row className={styles.newsPageRowFirstItem}>
              <RenderList
                items={articles}
                renderItem={article => (
                  <NewsPageItemImage key={article.id} article={article} />
                )}
              />
            </Row>
            <Link href="/news" passHref={true}>
              <a
                className={mergeClassNames(
                  styles.newsPageItemArrowAction,
                  styles.pageItemArrowAction
                )}
              >
                <ArrowForContent>
                  {strings.titleForNewsPage.toUpperCase()}
                </ArrowForContent>
              </a>
            </Link>
          </Row>
        </section>
      )}
    />
  );
}

interface INewsPageItemImageProps {
  article: INewsArticle;
}

function NewsPageItemImage({ article }: INewsPageItemImageProps): JSX.Element {
  return (
    <ContentCard
      key={article.id}
      alt={article.title}
      containerClassName={styles.newsPageItemImageContainer}
      href={`/news/${article.slug.replace(/\s/g, `_`)}`}
      imageClassName={styles.newsPageItemImage}
      imageProps={{
        layout: `fill`,
        objectFit: `cover`,
        src: article.mainImage.picture.src,
      }}
      subtitle={
        <Typography className={styles.newsPageItemSubtitle}>
          {article.slug.replace(/_/g, ` `)}
        </Typography>
      }
      title={
        <Typography className={styles.newsPageItemTitle} tag="h2">
          {article.title}
        </Typography>
      }
    />
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<{
    newsArticles: Array<INewsArticle>;
  }>
> {
  const newsArticles = await getNewsArticlesAsync(2);

  return {
    props: {
      newsArticles: typeof newsArticles === `string` ? [] : newsArticles,
    },
  };
}
