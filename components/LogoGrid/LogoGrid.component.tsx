import { ArrowForContent, Row, Typography } from '~/components';
import styles from './LogoGrid.styles.module.scss';

interface ILogoGridProps {
  children(logoClassName: string): JSX.Element;
  title: string;
}

export function LogoGrid({ children, title }: ILogoGridProps): JSX.Element {
  return (
    <>
      <Row className={styles.logoGridTitle}>
        <Typography tag="h2">{title}</Typography>
        <ArrowForContent arrowClassName={styles.logoGridTitleArrow} />
      </Row>
      <Row className={styles.logos}>{children(styles.logo)}</Row>
    </>
  );
}
