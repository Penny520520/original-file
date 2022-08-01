import { strings } from '~/localization';
import { ArrowForContent, LineBreakText, Row, Typography } from '~/components';
import Link from 'next/link';
import styles from './CareersPageItem.styles.module.scss';
import { useBoolean } from '~/hooks';
import { mergeClassNames } from '~/utils';

export function CareersPageItem(): JSX.Element {
  const [anchorTagHovered, actions] = useBoolean();

  return (
    <section
      className={mergeClassNames(
        styles.careersPageItemContainer,
        styles.pageItemContainer
      )}
    >
      <Row
        className={mergeClassNames(
          styles.careersPageItemRow,
          styles.pageItemRow
        )}
      >
        <Link href="/careers" passHref={true}>
          <a
            className={mergeClassNames(
              styles.careersPageItemAction,
              anchorTagHovered && styles.careersPageItemActionHovered,
              styles.pageItemAction,
              anchorTagHovered && styles.pageItemActionHovered
            )}
            onBlur={actions.setTrue}
            onFocus={actions.setTrue}
            onMouseLeave={actions.setFalse}
            onMouseOver={actions.setTrue}
          >
            <Typography
              className={styles.careersPageItemActionIntroText}
              tag="h2"
            >
              <LineBreakText
                text={strings.careersPageAboutText}
                renderTextItem={(
                  textItem: string,
                  index: number
                ): JSX.Element => {
                  return (
                    <span
                      key={textItem}
                      className={mergeClassNames(
                        index !== 0 &&
                          styles.careersPageItemActionIntroSecondaryText
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
        <Link href="/careers" passHref={true}>
          <a
            className={mergeClassNames(
              styles.careersPageItemArrowAction,
              anchorTagHovered && styles.careersPageItemArrowActionHovered,
              styles.pageItemArrowAction,
              anchorTagHovered && styles.pageItemArrowActionHovered
            )}
            onBlur={actions.setTrue}
            onFocus={actions.setTrue}
            onMouseLeave={actions.setFalse}
            onMouseOver={actions.setTrue}
          >
            <ArrowForContent>
              <Typography className={styles.careersPageArrowActionText}>
                {strings.titleForCareersPage.toUpperCase()}
              </Typography>
            </ArrowForContent>
          </a>
        </Link>
      </Row>
    </section>
  );
}
