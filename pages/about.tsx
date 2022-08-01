import { strings } from '~/localization';
import {
  ArrowForContent,
  Breadcrumbs,
  CareersPageItem,
  ContentPosition,
  LogoGrid,
  MidContentImage,
  Row,
  Typography,
} from '~/components';
import styles from 'styles/pages/AboutPage.styles.module.scss';
import { mergeClassNames, pxToRem, RenderList } from '~/utils';
// import { RenderEitherOr } from '~/utils';
import Image from 'next/image';
// import { useBoolean } from '~/hooks';
import { CSSProperties } from 'react';
import AboutPageCover from 'public/AboutPageCover.jpg';
import AboutPageCover2 from 'public/AboutPageCover2.jpg';
// import DavidDuan from 'public/Team/DavidDuan.jpg';
// import MichaelChiang from 'public/Team/MichaelChiang.jpg';
// import NhiLoi from 'public/Team/NhiLoi.jpg';
import MannaIndustrialFundLogo from 'public/MannaIndustrialFundLogo.png';

export default function AboutPage() {
  return (
    <>
      <AboutPageFirstSection />
      <AboutPageSecondSection />
      <MidContentImage
        alt={strings.aboutPageTitle}
        aspectRatio="1.5"
        bottomColor="#e6e6e6"
        image={AboutPageCover2}
        topColor="#ffffff"
      />
      <AboutPageThirdSection />
      <AboutPageFourthSection />
      <CareersPageItem />
    </>
  );
}

function AboutPageFirstSection(): JSX.Element {
  return (
    <section
      className={mergeClassNames(
        styles.aboutPageFirstSection,
        styles.pageItemContainer
      )}
    >
      <section
        className={mergeClassNames(
          styles.aboutPageFirstSectionItems,
          styles.pageItemRow
        )}
      >
        <section className={styles.aboutPageBreadcrumbs}>
          <Breadcrumbs />
        </section>
        <section className={styles.aboutPageIntro}>
          <Typography tag="h1">{strings.aboutPageTitle}</Typography>
          <Typography
            className={mergeClassNames(
              styles.aboutPageIntroText,
              styles.aboutPageIntroTextParagraph
            )}
          >
            {strings.aboutPageIntroParagraph}
          </Typography>
        </section>
        <section className={styles.aboutPageImage}>
          <Image
            alt={strings.aboutPageSubtitle}
            layout="fill"
            placeholder="blur"
            priority={true}
            quality={100}
            src={AboutPageCover}
          />
        </section>
        <section className={styles.aboutPageIntro}>
          <Typography className={styles.aboutPageSubtitle} tag="h2">
            {strings.aboutPageSubtitle}
          </Typography>
          <Typography className={styles.aboutPageIntroText}>
            {strings.aboutPageFirstParagraph}
          </Typography>
          <Typography className={styles.aboutPageIntroText}>
            {strings.aboutPageSecondParagraph}
          </Typography>
        </section>
      </section>
    </section>
  );
}

function AboutPageSecondSection(): JSX.Element {
  return (
    <section
      className={mergeClassNames(
        styles.aboutPageSecondSection,
        styles.pageItemContainer
      )}
    >
      <section
        className={mergeClassNames(
          styles.aboutPageSecondSectionItems,
          styles.pageItemRow
        )}
      >
        <Typography className={styles.aboutPageSecondSectionTitle}>
          {strings.aboutPageSubsectionTitle}
        </Typography>
        <Row className={styles.aboutGrid}>
          <RenderList
            items={[
              { text: strings.integrityText, title: strings.integrityTitle },
              { text: strings.visionText, title: strings.visionTitle },
              { text: strings.passionText, title: strings.passionTitle },
              {
                text: strings.partnershipText,
                title: strings.partnershipTitle,
              },
              {
                text: strings.cultureText,
                title: strings.cultureTitle,
              },
              {
                text: strings.serviceText,
                title: strings.serviceTitle,
              },
            ]}
            renderItem={item => {
              return <AboutAttribute key={item.title} {...item} />;
            }}
          />
        </Row>
      </section>
    </section>
  );
}

interface IAboutAttributeProps {
  text: string;
  title: string;
}

function AboutAttribute({ text, title }: IAboutAttributeProps): JSX.Element {
  return (
    <section className={styles.aboutGridItem}>
      <ArrowForContent contentPosition={ContentPosition.BOTH} scale={0.8}>
        <Typography
          className={styles.aboutAttributeText}
          style={{ [`--font-size`]: pxToRem(32) } as CSSProperties}
          tag="h2"
        >
          {title}
        </Typography>
        <Typography
          className={styles.aboutAttributeText}
          style={{ [`--attribute-text-color`]: `#959595` } as CSSProperties}
        >
          {text}
        </Typography>
      </ArrowForContent>
    </section>
  );
}

function AboutPageThirdSection(): JSX.Element {
  return (
    <section
      className={mergeClassNames(
        styles.aboutPageThirdSection,
        styles.pageItemContainer
      )}
    >
      <section
        className={mergeClassNames(
          styles.aboutPageThirdSectionItems,
          styles.pageItemRow
        )}
      >
        <Row
          className={mergeClassNames(
            styles.aboutPageThirdSectionIntro,
            styles.aboutPageIntro
          )}
        >
          <Typography tag="h1">{strings.teamTitle}</Typography>
          <Typography className={styles.aboutPageIntroText}>
            {strings.teamIntroParagraph}
          </Typography>
        </Row>
        {/* <Row className={styles.aboutTeam}>
          <RenderList
            items={[
              {
                image: MichaelChiang,
                name: `Michael Chiang`,
                text: strings.michaelChiangBio,
                title: strings.cofounderDirectorTitle,
              },
              {
                image: DavidDuan,
                name: `David Duan`,
                text: strings.davidDuanBio,
                title: strings.consultantTitle,
              },
              {
                image: NhiLoi,
                name: `Nhi Loi`,
                title: strings.controllerTitle,
              },
            ]}
            renderItem={(item, index) => {
              return <AboutTeam key={index} {...item} />;
            }}
          />
        </Row> */}
      </section>
    </section>
  );
}

// interface IAboutTeamProps {
//   image: StaticImageData;
//   name: string;
//   text?: string;
//   title: string;
// }

// function AboutTeam({ image, name, text, title }: IAboutTeamProps): JSX.Element {
//   const [showText, actions] = useBoolean();

//   return (
//     <RenderEitherOr
//       ifTrue={text}
//       thenRender={aboutText => {
//         return (
//           <button
//             className={styles.aboutPageThirdSectionProfileColumn}
//             onClick={actions.toggleBoolean}
//           >
//             <section className={styles.aboutPageThirdSectionProfile}>
//               <Image
//                 alt={title}
//                 layout="fill"
//                 placeholder="blur"
//                 quality={100}
//                 src={image}
//               />
//             </section>
//             <section className={styles.aboutGridItemText}>
//               <Typography tag="h2">{name}</Typography>
//               <Typography>{title}</Typography>
//               <section className={styles.aboutPageThirdSectionBio}>
//                 <ArrowForContent
//                   arrowClassName={mergeClassNames(
//                     styles.aboutPageThirdSectionIcon,
//                     showText && styles.aboutPageThirdSectionIconActive
//                   )}
//                   contentPosition={ContentPosition.AFTER}
//                   scale={0.8}
//                 >
//                   <Typography>{strings.bioTitle}</Typography>
//                 </ArrowForContent>
//               </section>
//             </section>
//             <Typography
//               className={mergeClassNames(
//                 styles.aboutPageThirdSectionText,
//                 !showText && styles.aboutPageThirdSectionTextHidden,
//                 showText && styles.aboutPageThirdSectionTextVisible
//               )}
//             >
//               {aboutText}
//             </Typography>
//           </button>
//         );
//       }}
//       otherwiseRender={
//         <section className={styles.aboutPageThirdSectionProfileColumn}>
//           <section className={styles.aboutPageThirdSectionProfile}>
//             <Image alt={title} layout="fill" quality={100} src={image} />
//           </section>
//           <section className={styles.aboutGridItemText}>
//             <Typography tag="h2">{name}</Typography>
//             <Typography>{title}</Typography>
//           </section>
//         </section>
//       }
//     />
//   );
// }

function AboutPageFourthSection(): JSX.Element {
  return (
    <section
      className={mergeClassNames(
        styles.aboutPageFourthSection,
        styles.pageItemContainer
      )}
    >
      <section
        className={mergeClassNames(
          styles.aboutPageFourthSectionItems,
          styles.pageItemRow
        )}
      >
        <Row className={styles.aboutPageFourthSectionIntro}>
          <Typography tag="h2">{strings.cofounderMessage}</Typography>
          <Typography>{strings.cofounderAttribution}</Typography>
        </Row>
        <hr className={styles.aboutPageFourthSectionHorizontalRule} />
        <section className={styles.aboutPageFourthSectionLogosContainer}>
          <LogoGrid title={strings.affiliatedCompanyTitle}>
            {logoClassName => (
              <Row className={styles.aboutPageFourthSectionLogos}>
                <a
                  className={mergeClassNames(
                    logoClassName,
                    styles.aboutPageFourthSectionLogo
                  )}
                  href="https://www.mannafund.ca"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    alt={strings.mannaIndustrialFundTitle}
                    layout="fill"
                    placeholder="blur"
                    src={MannaIndustrialFundLogo}
                    objectFit="contain"
                  />
                </a>
              </Row>
            )}
          </LogoGrid>
        </section>
      </section>
    </section>
  );
}
