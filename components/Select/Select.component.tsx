import Link from 'next/link';
import { ChangeEvent } from 'react';
import { ArrowForContent, Typography } from '~/components';
import { useBoolean, useClickOutside } from '~/hooks';
import { mergeClassNames, RenderEitherOr, RenderList } from '~/utils';
import { useSelect } from './Select.hook';
import styles from './Select.styles.module.scss';

export interface ISelectOption {
  disabled?: boolean;
  href?: string;
  name: string;
  value: string;
}

interface ISelectProps {
  name: string;
  options: Array<ISelectOption>;
  label?: string;
}

export function Select({ label, name, options }: ISelectProps): JSX.Element {
  const [openDropdown, actions] = useBoolean();

  const select = useClickOutside<HTMLButtonElement>(actions.setFalse);

  const { selectedValueName, value, setValue } = useSelect(options);

  function handleChange(event: ChangeEvent) {
    event.preventDefault();
  }

  return (
    <section className={styles.select}>
      <select
        aria-hidden="true"
        name={name}
        value={value}
        onChange={handleChange}
      >
        <option value="" />
        <RenderList
          items={options}
          renderItem={option => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          )}
        />
      </select>
      <button
        className={mergeClassNames(
          styles.selection,
          openDropdown && styles.selectionDropdownOpen
        )}
        ref={select}
        type="button"
        onClick={actions.toggleBoolean}
      >
        <Typography className={styles.label}>
          {selectedValueName || label}
        </Typography>
        <ArrowForContent
          arrowClassName={mergeClassNames(
            styles.arrow,
            openDropdown && styles.arrowDropdownOpen
          )}
          scale={0.6}
        />
      </button>
      <section
        className={mergeClassNames(
          styles.dropdown,
          openDropdown && styles.dropdownOpen
        )}
      >
        <RenderList
          items={options}
          renderItem={option => {
            function handleOptionClick(): void {
              setValue(option.value);
            }

            return (
              <RenderEitherOr
                ifTrue={option.href && option}
                thenRender={
                  <Link href={String(option.href)} passHref={true}>
                    <a className={styles.dropdownItem}>
                      <ArrowForContent arrowClassName={styles.arrow} />
                      <Typography className={styles.dropdownItemText}>
                        {option.name}
                      </Typography>
                    </a>
                  </Link>
                }
                otherwiseRender={
                  <RenderEitherOr
                    ifTrue={option.disabled}
                    thenRender={
                      <span key={option.value} className={styles.dropdownItem}>
                        <ArrowForContent arrowClassName={styles.arrow} />
                        <Typography className={styles.dropdownItemText}>
                          {option.name}
                        </Typography>
                      </span>
                    }
                    otherwiseRender={
                      <button
                        key={option.value}
                        className={mergeClassNames(
                          styles.dropdownItem,
                          option.value === value && styles.dropdownSelectedItem
                        )}
                        type="button"
                        onClick={handleOptionClick}
                      >
                        <ArrowForContent arrowClassName={styles.arrow} />
                        <Typography className={styles.dropdownItemText}>
                          {option.name}
                        </Typography>
                      </button>
                    }
                  />
                }
              />
            );
          }}
        />
      </section>
    </section>
  );
}
