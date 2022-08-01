import { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Accordion,
  Button,
  Carousel,
} from 'react-bootstrap';
import { fetch } from '~/packages';
import { RenderEitherOr } from '~/utils';
// import { strings } from '~/localization';
// import { Source } from '~/enums';
import { Typography } from '~/components';
import { useBoolean, useFormResponse } from '~/hooks';
import { FormEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import logoWhite from 'public/images/High-Point-Park_LOGO_white.svg';
import logo from 'public/images/HPPLogo.svg';
import styles from 'styles/pages/HighPointPark.styles.module.scss';

function Header(): JSX.Element {
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [isScroll, setScroll] = useState(false);
  const changeHeaderStyle = () => {
    if (typeof window !== 'undefined' && window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  useEffect(() => {
    window.addEventListener('scroll', changeHeaderStyle);
    return () => window.removeEventListener('scroll', changeHeaderStyle);
  }, []);
  return (
    <Container
      className={
        isScroll ? styles.headerContainerActive : styles.headerContainer
      }
    >
      <Row className={styles.header}>
        <Col xs="7">
          <Link href="/high_point_park" passHref>
            <Image
              src={isScroll ? logo : logoWhite}
              alt="high_point_park_logo_white"
              width={isScroll ? 63.02 : 225.96}
              height={isScroll ? 72.77 : 140.42}
              layout="fixed"
            />
          </Link>
        </Col>
        <Col xs="5">
          <Navbar
            collapseOnSelect
            className={styles.navbarContainer}
            expand="lg"
          >
            <Navbar.Toggle
              className={
                isScroll ? styles.navbarToggleActive : styles.navbarToggle
              }
            />
            <Navbar.Collapse className={styles.navbarCollapse}>
              <Nav className={styles.navbarDropDown}>
                <Nav.Link
                  href="/high_point_park"
                  className={isScroll ? styles.navBtnActive : styles.navBtn}
                >
                  HOME
                </Nav.Link>
                <Nav.Link
                  href="#project"
                  className={isScroll ? styles.navBtnActive : styles.navBtn}
                >
                  PROJECT
                </Nav.Link>
                <Nav.Link
                  href="#location"
                  className={isScroll ? styles.navBtnActive : styles.navBtn}
                >
                  LOCATION
                </Nav.Link>
                <Nav.Link
                  href="#features"
                  className={isScroll ? styles.navBtnActive : styles.navBtn}
                >
                  FEATURES
                </Nav.Link>
                <Nav.Link
                  href="#siteplan"
                  className={isScroll ? styles.navBtnActive : styles.navBtn}
                >
                  SITEPLAN
                </Nav.Link>
                <Nav.Link
                  href="#team"
                  className={isScroll ? styles.navBtnActive : styles.navBtn}
                >
                  TEAM
                </Nav.Link>
                <Nav.Link href="#register" className={styles.registerBtn}>
                  REGISTER
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}
function HeroBanner(): JSX.Element {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroBg}>
        <Image
          src="/images/HPP-Street-View.png"
          layout="fill"
          objectFit="cover"
          className={styles.heroImg}
          alt="HPP-Street-View"
        />
        <Image
          src="/images/hero-bg.png"
          layout="fill"
          className={styles.HeroOverLay}
          alt="hero-bg"
        />
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <h1 className={styles.introHeading}>
              INDUSTRIAL STRATA OWNER/USER & INVESTMENT OPPORTUNITY IN SOUTH
              BURNABY.
            </h1>
            <div className="spacing20"></div>
            <p className={styles.heroSubtitle}>
              7415 LOWLAND DRIVE, BURNABY, BC
            </p>
          </div>
          <Image
            src="/images/scroll.png"
            width={46}
            height={87}
            className="scroll"
            alt="scroll-icon"
          />
        </div>
      </div>
    </section>
  );
}
function Project(): JSX.Element {
  return (
    <section id="project" className={styles.projectContainer}>
      <Container className={styles.projectRowOne}>
        <Image
          src="/images/OPPORTUNITY.svg"
          width={1614}
          height={216}
          layout="responsive"
          alt="OPPORTUNITY"
        />
        <Row className={styles.projectRowOneText}>
          <Col md="12" lg="6">
            <div className={styles.projectHeadingBox}>
              <div className={styles.projectArrow}>
                <Image
                  src="/images/arrow.svg"
                  width={47}
                  height={20}
                  layout="fixed"
                  alt="arrow"
                />
              </div>
              <div className={styles.projectHeading}>
                24 LIGHT INDUSTRIAL STRATA UNITS
              </div>
            </div>
            <div
              style={{ paddingTop: '53px' }}
              className={styles.projectHeadingBox}
            >
              <div className={styles.projectArrow}>
                <Image
                  src="/images/arrow.svg"
                  width={47}
                  height={20}
                  layout="fixed"
                  alt="arrow"
                />
              </div>
              <div className={styles.projectHeading}>
                4 BUILDINGS TOTALLING 81,723 SQUARE FEET
              </div>
            </div>
          </Col>
          <Col md="12" lg="6" className={styles.projectTextBox}>
            <div className={styles.projectText}>
              <p>
                Union Allied is pleased to present High Point Park - a
                4-building, 24-unit light industrial strata development with
                units starting from 3,062 square feet. This presents a unique
                opportunity for owner/users and investors to acquire
                sought-after industrial real estate.
              </p>
            </div>
            <div className={styles.projectText}>
              <p>
                Its central location close to vital highways and other major
                businesses and amenities make this an excellent opportunity to
                acquire a valuable industrial property in the growing Burnaby
                area. Construction is expected to start Q1 2023 and the project
                will be delivered in two phases, with phase 1 delivered in Q2
                2024 and phase 2 delivered in Q2 2025.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className={styles.projectRowVideo}>
        <Col md="12" lg="12" className={styles.projectRowVideoCol}>
          <ReactPlayer
            url="/videos/HPP-industrial_strata_opportunity_in_south_burnaby.mp4"
            className={styles.projectVideo}
            config={{
              file: {
                attributes: {
                  poster:
                    '/videos/HPP-video_cover-industrial_strata_opportunity.png',
                  controlsList: 'nodownload',
                },
              },
            }}
            controls
          />
        </Col>
      </Container>
      <Container className={styles.projectRowTwo}>
        <Image
          src="/images/zoning.svg"
          width={1614}
          height={216}
          layout="responsive"
          alt="zoning"
        />
        <Row className={styles.projectRowOneText}>
          <Col md="12" lg="6">
            <div className={styles.projectHeadingBox}>
              <div className={styles.projectArrow}>
                <Image
                  src="/images/arrow.svg"
                  width={47}
                  height={20}
                  layout="fixed"
                  alt="arrow"
                />
              </div>
              <div className={styles.projectHeading}>
                M2 GENERAL INDUSTRIAL DISTRICT
              </div>
            </div>
          </Col>
          <Col md="12" lg="6" className={styles.projectTextBox}>
            <Row>
              <Col xs="12" lg="6">
                <div className={styles.projectSubtitle}>
                  Warehouse / Storage
                </div>
                <div className={styles.projectSubtitle}>Manufacturing</div>
                <div className={styles.projectSubtitle}>Laboratories</div>
                <div className={styles.projectSubtitle}>
                  Rehearsal & Production Studios
                </div>
                <div className={styles.projectNote}>
                  *Contact Listing Agents for full zoning schedule
                </div>
              </Col>
              <Col xs="12" lg="6">
                <div className={styles.projectSubtitle}>
                  Retail / Service Commercial
                </div>
                <div className={styles.projectSubtitle}>Trade School</div>
                <div className={styles.projectSubtitle}>
                  Brewery / Distillery
                </div>
                <div className={styles.projectSubtitle}>
                  Sales, Rentals & Repairs (various products)
                </div>
                <div className={styles.projectNoteTwo}>
                  *Contact Listing Agents for full zoning schedule
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
function Location(): JSX.Element {
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [isFoodClick, setFoodClick] = useState(false);
  function foodClickHandler() {
    setFoodClick(!isFoodClick);
  }
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [isShopClick, setShopClick] = useState(false);
  function shopClickHandler() {
    setShopClick(!isShopClick);
  }
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [isBusClick, setBusClick] = useState(false);
  function busClickHandler() {
    setBusClick(!isBusClick);
  }
  return (
    <section id="location" className={styles.locationContainer}>
      <Image
        src="/images/location2.svg"
        width={1150}
        height={216}
        layout="responsive"
        alt="location"
      />
      <Container>
        <Row>
          <div className={styles.locationParagrah}>
            High Point Park is prominently located along Lowland Drive, between
            Byrne Road and Beedie Street, in the Big Bend Area of South Burnaby.
            It is located only minutes from the Vancouver-Burnaby boarder and
            easily accessible via Marine Way and Boundary Road. This area
            provides convenient access to Burnaby, Vancouver, Richmond and
            Surrey, and is serviced by an abundance of amenities at the nearby
            Market Crossing and Big Bend Crossing retail.
          </div>
        </Row>
        <Row style={{ paddingBottom: '101px' }}>
          <Col xs="12" lg="4">
            <div className={styles.locationHeading}>
              <div className={styles.locationArrow}>
                <Image
                  src="/images/arrow.svg"
                  width={47}
                  height={20}
                  layout="fixed"
                  alt="arrow"
                />
              </div>
              DRIVE TIMES
            </div>
          </Col>
          <Col xs="12" lg="4">
            <div className={styles.locationTextContainer}>
              <div className={styles.locationTextOne}>5-MIN</div>
              <div className={styles.locationTextTwo}>to Boundary Road</div>
            </div>
            <div className={styles.locationTextContainer}>
              <div className={styles.locationTextOne}>9-MIN</div>
              <div className={styles.locationTextTwo}>to Metrotown</div>
            </div>
            <div className={styles.locationTextContainer}>
              <div className={styles.locationTextOne}>10-MIN</div>
              <div className={styles.locationTextTwo}>
                to Westminster Hwy & HWY 91
              </div>
            </div>
          </Col>
          <Col xs="12" lg="4">
            <div className={styles.locationTextContainer}>
              <div className={styles.locationTextOne}>14-MIN</div>
              <div className={styles.locationTextTwo}>to SFPR</div>
            </div>
            <div className={styles.locationTextContainer}>
              <div className={styles.locationTextOne}>20-MIN</div>
              <div className={styles.locationTextTwo}>to HWY 1</div>
            </div>
            <div className={styles.locationTextContainer}>
              <div className={styles.locationTextOne}>30-MIN</div>
              <div className={styles.locationTextTwo}>
                to Downtown Vancouver
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs="12" lg="8">
            <Image
              src="/images/map.svg"
              width={1145.11}
              height={835.93}
              layout="responsive"
              alt="location-map"
            />
          </Col>
          <Col xs="12" lg="4">
            <Accordion
              className={styles.accordionContainer}
              defaultActiveKey="0"
            >
              <Accordion.Item eventKey="0" className={styles.accordionItem}>
                <Accordion.Header
                  onClick={foodClickHandler}
                  className={
                    isFoodClick
                      ? styles.accordionHeaderAcitve
                      : styles.accordionHeader
                  }
                >
                  <div className={styles.locationArrow}>
                    <Image
                      src="/images/arrow.svg"
                      width={47}
                      height={20}
                      layout="fixed"
                      alt="arrow"
                    />
                  </div>{' '}
                  FOOD & DRINK
                </Accordion.Header>
                <Accordion.Body className={styles.accordionBody}>
                  <Row>
                    <div className={styles.locationText}>1. Cactus Club</div>
                    <div className={styles.locationText}>2. White Spot</div>
                    <div className={styles.locationText}>3. Boston Pizza</div>
                    <div className={styles.locationText}>4. McDonald’s</div>
                    <div className={styles.locationText}>5. Pokerrito</div>
                    <div className={styles.locationText}>6. Tim Hortons</div>
                    <div className={styles.locationText}>7. Starbucks</div>
                    <div className={styles.locationText}>
                      8. Mucho Burrito Fresh Mexican Grill
                    </div>

                    <div className={styles.locationText}>
                      9. Barcelos Flame Grilled Chicken
                    </div>
                    <div className={styles.locationText}>10. Subway</div>
                    <div className={styles.locationText}>
                      11. COBS Bread Bakery
                    </div>
                    <div className={styles.locationText}>12. Pizza Hut</div>
                    <div className={styles.locationText}>13. Nandos</div>
                    <div className={styles.locationText}>14. A&W</div>
                    <div className={styles.locationText}>
                      15. Kirin Seafood Restaurant
                    </div>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className={styles.accordionItem}>
                <Accordion.Header
                  onClick={shopClickHandler}
                  className={
                    isShopClick
                      ? styles.accordionHeaderAcitve
                      : styles.accordionHeader
                  }
                >
                  <div className={styles.locationArrow}>
                    <Image
                      src="/images/arrow.svg"
                      width={47}
                      height={20}
                      layout="fixed"
                      alt="arrow"
                    />
                  </div>{' '}
                  SHOPPING & SERVICES
                </Accordion.Header>
                <Accordion.Body className={styles.accordionBody}>
                  <Row>
                    <div className={styles.locationText}>16. Vancity</div>
                    <div className={styles.locationText}>17. TD Bank</div>
                    <div className={styles.locationText}>18. Canadian Tire</div>
                    <div className={styles.locationText}>19. London Drugs</div>
                    <div className={styles.locationText}>20. Purolator</div>
                    <div className={styles.locationText}>21. Mark’ss</div>
                    <div className={styles.locationText}>22. Save-On-Foods</div>
                    <div className={styles.locationText}>
                      23. Kin’s Farm Market
                    </div>

                    <div className={styles.locationText}>
                      24. Winners / HomeSense
                    </div>
                    <div className={styles.locationText}>25. PetSmart</div>
                    <div className={styles.locationText}>26. Staples</div>
                    <div className={styles.locationText}>
                      27. Sungiven Foods
                    </div>
                    <div className={styles.locationText}>28. Shell</div>
                    <div className={styles.locationText}>
                      29. Riverway Golf Course
                    </div>
                    <div className={styles.locationText}>
                      30. Starlight Casino
                    </div>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className={styles.accordionItem}>
                <Accordion.Header
                  onClick={busClickHandler}
                  className={
                    isBusClick
                      ? styles.accordionHeaderAcitve
                      : styles.accordionHeader
                  }
                >
                  <div className={styles.locationArrow}>
                    <Image
                      src="/images/arrow.svg"
                      width={47}
                      height={20}
                      layout="fixed"
                      alt="arrow"
                    />
                  </div>{' '}
                  BUSINESS & OFFICE
                </Accordion.Header>
                <Accordion.Body className={styles.accordionBody}>
                  <Row>
                    <div className={styles.locationText}>
                      31. Best Buy Canadian Headquarters
                    </div>
                    <div className={styles.locationText}>
                      32. Ritchie Bros. Auctioneers
                    </div>
                    <div className={styles.locationText}>
                      33. Amazon Fulfillment Center
                    </div>
                    <div className={styles.locationText}>
                      34. Ballard Power Systems Inc
                    </div>
                    <div className={styles.locationText}>
                      35. Milwaukee Factory Service Centre
                    </div>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
function Feature(): JSX.Element {
  return (
    <section id="features" className={styles.featureContainer}>
      <Image
        src="/images/UNIT FEATURES.svg"
        width={1621}
        height={197}
        layout="responsive"
        alt="feature"
      />

      <Container className={styles.featureList}>
        <Row>
          <Col xs="12" md="6">
            <div className={styles.featureBox}>
              <Image
                src="/images/parking.svg"
                width={46}
                height={46}
                layout="fixed"
                alt="parking"
              />
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>PARKING</div>
                <div className={styles.featureTextTwo}>
                  2 parking stalls per unit
                </div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <Image
                src="/images/electric-power.svg"
                width={46}
                height={46}
                layout="fixed"
                alt="electric-power"
              />
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>ELECTRICAL SERVICE</div>
                <div className={styles.featureTextTwo}>
                  100 amp, 600 volt, 3 phase with potential upgrade up to 200
                  amp
                </div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <Image
                src="/images/warehouse.svg"
                width={46}
                height={46}
                layout="fixed"
                alt="warehouse"
              />
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>LOADING DOOR</div>
                <div className={styles.featureTextTwo}>
                  Grade level loading per unit (10’x14’)
                </div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <Image
                src="/images/pipe.svg"
                width={46}
                height={46}
                layout="fixed"
                alt="pipe"
              />
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>DRAINAGE</div>
                <div className={styles.featureTextTwo}>
                  *contact Listing Agents for details
                </div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <Image
                src="/images/ladder.svg"
                width={46}
                height={46}
                layout="fixed"
                alt="ladder"
              />
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>CEILING HEIGHTS</div>
                <div className={styles.featureTextTwo}>
                  • 30’ clear heights in warehouse
                </div>
                <div className={styles.featureTextTwo}>
                  • 18’ clear heights under mezzanine
                </div>
                <div className={styles.featureTextTwo}>
                  • 11’ clear heights in mezzanine
                </div>
              </div>
            </div>
          </Col>
          <Col xs="12" md="6">
            <div className={styles.featureBox}>
              <Image
                src="/images/spotlight.svg"
                width={46}
                height={46}
                layout="fixed"
                alt="spotlight"
              />
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>LIGHTING</div>
                <div className={styles.featureTextTwo}>
                  High efficiency LED lighting
                </div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <Image
                src="/images/sprinkler.svg"
                width={46}
                height={46}
                layout="fixed"
                alt="sprinkler"
              />
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>SPRINKLERS</div>
                <div className={styles.featureTextTwo}>ESFR Sprinklers</div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <Image
                src="/images/lamp.svg"
                width={46}
                height={46}
                layout="fixed"
                alt="lamp"
              />
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>SKYLIGHTS</div>
                <div className={styles.featureTextTwo}>
                  3 skylights per unit
                </div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <Image
                src="/images/brick-wall.svg"
                width={46}
                height={46}
                layout="fixed"
                alt="brick-wall"
              />
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>CONSTRUCTION</div>
                <div className={styles.featureTextTwo}>Concrete tilt up</div>
              </div>
            </div>
            <div className={styles.featureBox}>
              <Image
                src="/images/push-cart.svg"
                width={46}
                height={46}
                layout="fixed"
                alt="push-cart"
              />
              <div className={styles.featureTextBox}>
                <div className={styles.featureTextOne}>FLOOR LOAD</div>
                <div className={styles.featureTextTwo}>
                  Heavy floor load capacity
                </div>
                <div className={styles.featureTextTwo}>
                  • 350 lbs/sf main floor
                </div>
                <div className={styles.featureTextTwo}>
                  • 100 lbs/sf mezzanine
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* <section id="siteplan" className={styles.floorContainer}>
        <Image
          src="/images/SITEPLAN.svg"
          width={1695}
          height={216}
          layout="responsive"
          alt="floor"
        />
        <div
          style={{
            paddingTop: '69px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Image
            src="/images/Siteplan-overview-V4.svg"
            width={1520}
            height={800}
            // layout="intrinsic"
            alt="floorPlan"
            className={styles.floorPlan}
          />
        </div>
        <div className={styles.floorBtnBox}>
          <Button className={styles.floorBtn}>
            <a
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
              target="_blank"
              href="/images/A211108_UAC_High-Point-Park_SITEPLAN_V4.pdf"
            >
              DOWNLOAD ALL PLANS
            </a>
          </Button>
        </div>
      </section> */}
    </section>
  );
}

function Gallery(): JSX.Element {
  const nextIcon = (
    <span aria-hidden="true" className={styles.carouselControlNextIcon} />
  );
  const prevIcon = (
    <span aria-hidden="false" className={styles.carouselControlPrevIcon} />
  );
  return (
    <section>
      <div className={styles.galleryContainer}>
        <Container className={styles.projectRowOne}>
          <Image
            src="/images/OVERVIEW.svg"
            width={1656}
            height={216}
            layout="responsive"
            alt="gallery"
          />
          <Row className={styles.projectRowOneText}>
            <Col md="12" lg="6">
              <div className={styles.projectHeadingBox}>
                <div className={styles.projectArrow}>
                  <Image
                    src="/images/arrow.svg"
                    width={47}
                    height={20}
                    layout="fixed"
                    alt="arrow"
                  />
                </div>
                <div className={styles.projectHeading}>
                  METRO VANCOUVER AND BURNABY AREA INDUSTRIAL OVERVIEW &
                  STATISTICS, Q4 2021
                </div>
              </div>
            </Col>
            <Col md="12" lg="6" className={styles.projectTextBox}>
              <div className={styles.projectText}>
                <p>
                  As of Q4 2021, Metro Vancouver remains to be North America’s
                  tightest industrial market for six consecutive quarters.
                  Availability of space, land use issues, increased e-commerce
                  demand due to the ongoing pandemic, and labour proximity have
                  all been contributing factors in the rapid price appreciation
                  of industrial assets and land. With the lowest vacancy rate in
                  North America at 0.5%, the region’s average rental rate has
                  increased by 97% in the past seven years and industrial
                  investment has reached record highs in the same time frame,
                  reaching $2.3B in 2021.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Carousel
        className={styles.carouselContainer}
        nextIcon={nextIcon}
        prevIcon={prevIcon}
        indicators={false}
      >
        <Carousel.Item>
          <Image
            src="/images/Aerial View.jpg"
            width={1920}
            height={900}
            layout="responsive"
            alt="Aerial View"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/images/Dollhouse-1.jpg"
            width={1920}
            height={900}
            layout="responsive"
            alt="Dollhouse-1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/images/Dollhouse-2.jpg"
            width={1920}
            height={900}
            layout="responsive"
            alt="Dollhouse-2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/images/Street View.jpg"
            width={1920}
            height={900}
            layout="responsive"
            alt="Street View"
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
function Developer(): JSX.Element {
  return (
    <section id="team" className={styles.developerContainer}>
      <Image
        src="/images/TEAM.svg"
        width={1675}
        height={216}
        layout="responsive"
        alt="team"
      />
      <Container className={styles.projectRowOne}>
        <Row className={styles.developerRowOneText}>
          <Col md="12" lg="6">
            <div className={styles.projectHeadingBox}>
              <div className={styles.projectArrow}>
                <Image
                  src="/images/arrow.svg"
                  width={47}
                  height={20}
                  layout="fixed"
                  alt="arrow"
                />
              </div>

              <div className={styles.developerHeading}>DEVELOPER</div>
            </div>
            <div className={styles.developerTextBox}>
              <Image
                src="/images/Union-allied-logo.svg"
                width={293.25}
                height={47.82}
                alt="Union-allied-logo"
              />
              <div className={styles.developerSubtitle}>
                WELCOME TO A NEW WORLD OF CONCRETE, GLASS AND STEEL.
              </div>
              <div className={styles.developerText}>
                <p>
                  We are reimagining the possibilities of commercial, industrial
                  and residential development with exellent ideas. We identify
                  and invest in real estate in developed urban centres. By
                  locating areas that exhibit drivers of intensification and
                  generating real estate, we build valued properties.
                </p>
              </div>
              <Link href="https://www.unionallied.ca/">
                <a className={styles.developerLink} target="_blank">
                  UNIONALLIED.CA
                </a>
              </Link>
            </div>
          </Col>
          <Col md="12" lg="6" className={styles.developerTextBoxEmpty}>
            <div className={styles.projectHeadingBox}>
              <div className={styles.projectArrow}>
                <Image
                  src="/images/arrow.svg"
                  width={47}
                  height={20}
                  layout="fixed"
                  alt="arrow"
                />
              </div>
              <div className={styles.developerHeading}>SALES & MARKETING</div>
            </div>
            <div className={styles.developerTextBox}>
              <Image
                src="/images/Avison_logo.svg"
                width={146}
                height={103.5}
                layout="fixed"
                alt="Avison_logo"
              />
              <div className={styles.developerText}>
                <p>
                  Avison Young creates real economic, social and environmental
                  value as a global real estate advisor, powered by people. Our
                  integrated talent realizes the full potential of real estate
                  by using global intelligence platforms that provide clients
                  with insights and advantage. Together, we can create healthy,
                  productive workplaces for employees, cities that are centres
                  for prosperity for their citizens, and built spaces and places
                  that create a net benefit to the economy, the environment and
                  the community.
                </p>
              </div>
              <Link href="https://www.avisonyoung.ca/">
                <a className={styles.developerLink} target="_blank">
                  avisonyoung.ca
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
interface IContactPageFormElements extends HTMLFormControlsCollection {
  agreeToBeContacted: HTMLInputElement;
  companyName: HTMLInputElement;
  email: HTMLInputElement;
  firstName: HTMLInputElement;
  inquiry: HTMLTextAreaElement;
  lastName: HTMLInputElement;
  phoneNumber: HTMLInputElement;
  source: HTMLSelectElement;
  areYouAgentYes: HTMLInputElement;
  areYouAgentNo: HTMLInputElement;
  agentName: HTMLInputElement;
  broker: HTMLInputElement;
  withAgent: HTMLInputElement;
}
interface IContactPageFormElement extends HTMLFormElement {
  readonly elements: IContactPageFormElements;
}
function Register(): JSX.Element {
  const [submitting, submittingActions] = useBoolean();
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [areYouAgent, setAreAgent] = useState(false);
  // eslint-disable-next-line @kyleshevlin/prefer-custom-hooks
  const [withAgent, setWithAgent] = useState(false);
  function areAgentHandler(event: any) {
    if (event.target.checked) {
      setAreAgent(true);
    }
  }
  function notAgentHandler(event: any) {
    if (event.target.checked) {
      setAreAgent(false);
    }
  }
  function withAgentHandler(event: any) {
    if (event.target.checked) {
      setWithAgent(true);
    }
  }
  function notWithAgentHandler(event: any) {
    if (event.target.checked) {
      setWithAgent(false);
    }
  }
  const { form, responseMessage, setResponseMessage } = useFormResponse();
  async function formSubmitHandler(
    event: FormEvent<IContactPageFormElement>
  ): Promise<void> {
    submittingActions.setTrue();
    event.preventDefault();

    const response = await fetch(`/api/contact`, {
      body: JSON.stringify({
        agreeToBeContacted:
          event.currentTarget.elements.agreeToBeContacted.checked,
        email: event.currentTarget.elements.email.value,
        firstName: event.currentTarget.elements.firstName.value,
        lastName: event.currentTarget.elements.lastName.value,
        phoneNumber:
          event.currentTarget.elements.phoneNumber.value || undefined,
        source: event.currentTarget.elements.source.value || undefined,
        // areYouAgent: event.currentTarget.elements.areYouAgent.value,
        areYouAgent: areYouAgent,
        withAgent: withAgent,
        broker: event.currentTarget.elements.broker.value || undefined,
        // withAgent: event.currentTarget.elements.withAgent.checked,
        agentName: event.currentTarget.elements.agentName.value || undefined,
      }),
      method: `POST`,
    });
    const json = await response.json();

    setResponseMessage(response.ok ? json.data : json.error);

    submittingActions.setFalse();
  }
  return (
    <section id="register" className={styles.registerContainer}>
      <Image
        src="/images/REGISTER.svg"
        width={1665}
        height={216}
        layout="responsive"
        alt="REGISTER"
      />
      <Container className={styles.projectRowOne}>
        <Row className={styles.developerRowOneText}>
          <Col md="12" lg="6">
            <div className={styles.projectHeadingBox}>
              <div className={styles.projectArrow}>
                <Image
                  src="/images/arrow.svg"
                  width={47}
                  height={20}
                  layout="fixed"
                  alt="arrow"
                />
              </div>
              <div className={styles.registerHeading}>
                FOR EXCLUSIVE INFO AND UPDATES ON HIGH POINT PARK.
              </div>
            </div>
          </Col>
          <Col md="12" lg="6" className={styles.developerTextBoxEmpty}></Col>
        </Row>
        <form
          className={styles.contactPageForm}
          ref={form}
          onSubmit={formSubmitHandler}
        >
          <fieldset
            className={styles.contactPageFormFieldset}
            disabled={submitting}
          >
            <Row className={styles.registerRowOne}>
              <Col md="12" lg="6" className={styles.registerColLeft}>
                <label htmlFor="firstName" className={styles.registerFormLabel}>
                  * First Name
                </label>
                <input
                  id="firstName"
                  autoComplete="given-name"
                  className={styles.registerFormInput}
                  name="firstName"
                  required={true}
                  type="text"
                />
                <label htmlFor="email" className={styles.registerFormLabel}>
                  * Email Address
                </label>
                <input
                  id="email"
                  autoComplete="email"
                  className={styles.registerFormInput}
                  name="email"
                  required={true}
                  type="email"
                />
                <label
                  htmlFor="mce-source"
                  className={styles.registerFormLabel}
                >
                  How did you hear about us?
                </label>
                {/* <Select
                  label={strings.contactPageFormSourcePlaceholder}
                  name="source"
                  options={Object.values(Source).map(source => ({
                    name: source,
                    value: source,
                  }))}
                /> */}
                <select
                  id="mce-source"
                  name="source"
                  className={styles.registerSelect}
                >
                  <option className={styles.registerOption} value=""></option>
                  <option
                    className={styles.registerOption}
                    value="Friends and Family"
                  >
                    Friends and Family
                  </option>
                  <option className={styles.registerOption} value="Realtor">
                    Realtor
                  </option>
                  <option
                    className={styles.registerOption}
                    value="Signage / Walk by / Drive by"
                  >
                    Signage / Walk by / Drive by
                  </option>
                  <option
                    className={styles.registerOption}
                    value="Online Search"
                  >
                    Online Search
                  </option>
                  <option
                    className={styles.registerOption}
                    value="Social Media"
                  >
                    Social Media
                  </option>
                </select>
                <label
                  htmlFor="areYouAgentYes"
                  className={styles.registerFormLabel}
                >
                  * Are you working with an Agent / Realtor?
                </label>
                <div className={styles.registerCheckbox}>
                  <div style={{ paddingRight: '55px' }}>
                    <input
                      className={styles.registerCheckboxInput}
                      name="areYouAgentYes"
                      onClick={withAgentHandler}
                      placeholder="Yes"
                      type="checkbox"
                    />
                    <label
                      className={styles.registerCheckBoxLabel}
                      htmlFor="areYouAgentYes"
                    >
                      Yes
                    </label>
                  </div>
                  <div>
                    <input
                      className={styles.registerCheckboxInput}
                      name="areYouAgentNo"
                      onClick={notWithAgentHandler}
                      type="checkbox"
                    />
                    <label
                      htmlFor="areYouAgentNo"
                      className={styles.registerCheckBoxLabel}
                    >
                      No
                    </label>
                  </div>
                </div>
                <label htmlFor="agentName" className={styles.registerFormLabel}>
                  Agent / Realtor Name
                </label>
                <input
                  id="agentName"
                  name="agentName"
                  type="text"
                  className={styles.registerFormInput}
                />
              </Col>
              <Col md="12" lg="6" className={styles.registerColRight}>
                <label htmlFor="lastName" className={styles.registerFormLabel}>
                  * Last Name
                </label>
                <input
                  autoComplete="family-name"
                  className={styles.registerFormInput}
                  name="lastName"
                  required={true}
                  type="text"
                />
                <label
                  htmlFor="phoneNumber"
                  className={styles.registerFormLabel}
                >
                  Phone Number
                </label>
                <input
                  className={styles.registerFormInput}
                  name="phoneNumber"
                  required={true}
                  type="tel"
                />
                <label
                  htmlFor="areYouAgentYes"
                  className={styles.registerFormLabel}
                >
                  * Are you an Agent?
                </label>
                <div className={styles.registerCheckbox}>
                  <div style={{ paddingRight: '55px' }}>
                    <input
                      className={styles.registerCheckboxInput}
                      name="areYouAgentYes"
                      onClick={areAgentHandler}
                      placeholder="Yes"
                      type="checkbox"
                    />
                    <label
                      className={styles.registerCheckBoxLabel}
                      htmlFor="areYouAgentYes"
                    >
                      Yes
                    </label>
                  </div>
                  <div>
                    <input
                      className={styles.registerCheckboxInput}
                      name="areYouAgentNo"
                      onClick={notAgentHandler}
                      type="checkbox"
                    />
                    <label
                      htmlFor="areYouAgentNo"
                      className={styles.registerCheckBoxLabel}
                    >
                      No
                    </label>
                  </div>
                </div>
                <label htmlFor="broker" className={styles.registerFormLabel}>
                  Employee / Broker
                </label>
                <input
                  className={styles.registerFormInput}
                  name="broker"
                  type="text"
                />
                <section className={styles.registerCheckbox}>
                  <input
                    className={styles.registerCheckboxInput}
                    id="checkbox"
                    name="agreeToBeContacted"
                    type="checkbox"
                  />
                  <label
                    htmlFor="checkbox"
                    className={styles.registerAgreeLabel}
                  >
                    I agree to allow Union Allied and its affiliates to contact
                    me and send me information via email, phone, or SMS. I
                    understand I can unsubscribe at any time.
                  </label>
                </section>
                <Button
                  className={styles.registerSubmitBtn}
                  disabled={submitting}
                  type="submit"
                >
                  SUBMIT
                </Button>
              </Col>
            </Row>

            <section className={styles.responseMessage}>
              <RenderEitherOr
                ifTrue={responseMessage}
                thenRender={message => {
                  return <Typography>{message}</Typography>;
                }}
              />
            </section>
          </fieldset>
        </form>
      </Container>
    </section>
  );
}
function Contact(): JSX.Element {
  return (
    <section className={styles.registerContainer}>
      <Container className={styles.projectRowOne}>
        <Row className={styles.contactRowOne}>
          <Col className={styles.registerColLeft} md="12" lg="6">
            <div className={styles.projectHeadingBox}>
              <div className={styles.projectArrow}>
                <Image
                  src="/images/arrow.svg"
                  width={47}
                  height={20}
                  layout="fixed"
                  alt="arrow"
                />
              </div>
              <div className={styles.registerHeading}>
                FOR MORE INFORMATION, PLEASE CONTACT:
              </div>
            </div>
          </Col>
          <Col
            md="12"
            lg="6"
            className={`${styles.registerColRight} ${styles.contactColRight}`}
          >
            <div>
              <div
                className={`${styles.contactText} ${styles.contactName} ${styles.contactTextTwo}`}
              >
                Kevin Kassautzki
              </div>
              <div
                className={`${styles.contactText} ${styles.contactPhone} ${styles.contactTextTwo}`}
              >
                604 646 8393
              </div>
              <div className={styles.contactText}>
                kevin.kassautzki@avisonyoung.com
              </div>
              <div className={styles.contactSpacer}></div>
            </div>
            <div>
              <div className={styles.contactSpacerTwo}></div>
              <div
                className={`${styles.contactText} ${styles.contactName} ${styles.contactTextTwo}`}
              >
                Ryan Kerr*
              </div>
              <div
                className={`${styles.contactText} ${styles.contactPhone} ${styles.contactTextTwo}`}
              >
                604 647 5094
              </div>
              <div className={styles.contactText}>
                ryan.kerr@avisonyoung.com
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
function Footer(): JSX.Element {
  return (
    <section className={styles.footerSecion}>
      {/* <div>
        <Image
          width={1920}
          height={428}
          layout="responsive"
          objectFit="cover"
          src="/images/footerOverlay.svg"
          alt="footerOverlay"
        />
      </div> */}
      <div className={styles.footerContainer}>
        <Image
          width={352.53}
          height={57.48}
          src="/images/Union-allied-logo2.svg"
          alt="Union-allied-logo2"
        />

        <div className={styles.footerLinkBox}>
          <div>TERMS OF USE</div>
          <div className={styles.footerLinkSpace}>|</div>
          <div>PRIVACY POLICY</div>
          <div className={styles.footerLinkSpace}>|</div>
          <div>
            <a
              className={styles.footerLink}
              href="https://www.alabcreative.ca/"
              target="_blank"
              rel="noreferrer"
            >
              SITE BY A_LAB CREATIVE
            </a>
          </div>
        </div>
        <div className={styles.footerText}>
          © 2022 Union Allied Capital Corporation. This is not an offering for
          sale. Any such offering can only be made with an information summary.
          All materials, measurements, specifications, renderings and layouts
          are preliminary and displayed for illustrative purposes only. The
          information contained herein is subject to change at any time without
          notice.
        </div>
      </div>
    </section>
  );
}
export default function HighPointPark() {
  return (
    <main className={styles.page}>
      <Header />
      <HeroBanner />
      <Project />
      <Location />
      <Feature />
      <Gallery />
      <Developer />
      <div className={styles.bgContainer}>
        <div className={styles.footerOverlay}>
          <Image
            // width={1920.5}
            // height={1900}
            layout="fill"
            objectFit="cover"
            src="/images/HPP-website-BG.svg"
            alt="HPP-Bg"
          />
        </div>
        <Register />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
