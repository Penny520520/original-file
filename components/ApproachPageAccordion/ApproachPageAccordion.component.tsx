import { strings } from '~/localization';
import { Typography, Accordion } from '~/components';
import styles from './ApproachPageAccordion.styles.module.scss';
import { mergeClassNames } from '~/utils';

export function ApproachPageAccordion(): JSX.Element {
  return (
    <Accordion
      arrowScale={2}
      items={[
        {
          content: strings.developmentText,
          keyAsString: strings.developmentTitle,
          title: (
            <Typography
              className={styles.approachPageRowAccordionTitle}
              tag="h2"
            >
              {strings.developmentTitle}
            </Typography>
          ),
        },
        {
          content: strings.constructionText,
          keyAsString: strings.constructionTitle,
          title: (
            <Typography
              className={styles.approachPageRowAccordionTitle}
              tag="h2"
            >
              {strings.constructionTitle}
            </Typography>
          ),
        },
        {
          content: strings.propertyManagementText,
          keyAsString: strings.propertyManagementTitle,
          title: (
            <Typography
              className={styles.approachPageRowAccordionTitle}
              tag="h2"
            >
              {strings.propertyManagementTitle}
            </Typography>
          ),
        },
      ]}
      renderAccordionItem={({
        accordionTitleClassName,
        accordionTitleAtiveClassName,
        disableHover,
        isActive,
        renderArrowForContent,
        resetActiveItem,
        selectAsActiveItem,
        toggleAsActiveItem,
      }) => {
        return (
          <button
            className={mergeClassNames(
              accordionTitleClassName,
              styles.approachPageRowAccordionLink,
              isActive && accordionTitleAtiveClassName,
              isActive &&
                disableHover &&
                styles.approachPageRowAccordionLinkActive
            )}
            onBlur={disableHover ? undefined : resetActiveItem}
            onClick={disableHover ? toggleAsActiveItem : undefined}
            onFocus={disableHover ? undefined : selectAsActiveItem}
            onMouseLeave={disableHover ? undefined : resetActiveItem}
            onMouseOver={disableHover ? undefined : selectAsActiveItem}
          >
            {renderArrowForContent()}
          </button>
        );
      }}
    />
  );
}
