import React, { useMemo, useCallback, useState } from 'react';
import classnames from 'classnames';
import forEach from 'lodash/forEach';
import map from 'lodash/map';
import split from 'lodash/split';
import last from 'lodash/last';
import { useIntl } from '@@/plugin-locale/localeExports';
import styles from './index.less';

const languages = ['ru', 'en', 'zh', 'es'];

const LanguageField: React.FC = function LanguageField() {
  const intl = useIntl();

  const languageNoneTitle = intl.formatMessage({
    id: 'app.page.registration.field.language.placeholder',
  });

  const detailsClassname = useMemo<string>(
    () => classnames({
      'custom-select': true,
      [styles.details]: true,
    }),
    [],
  );

  const [value, setValue] = useState<string | null>(null);
  const [focusedValue, setFocusedValue] = useState<string | null>(null);

  const labelClassNames = useMemo<{
    ru: string;
    en: string;
    zh: string;
    es: string;
  }>(
    () => ({
      ru: classnames({ [styles.focused]: focusedValue === 'ru' }),
      en: classnames({ [styles.focused]: focusedValue === 'en' }),
      zh: classnames({ [styles.focused]: focusedValue === 'zh' }),
      es: classnames({ [styles.focused]: focusedValue === 'es' }),
    }),
    [focusedValue],
  );

  const handleValueChange = useCallback<(e: React.FormEvent<HTMLInputElement>) => void>((e) => {
    const target = e.target as HTMLInputElement;
    const summary = target.parentElement as HTMLElement;
    setValue(target.value);
    setFocusedValue(target.value);
    setTimeout(() => {
      summary.focus();
    }, 0);
  }, []);

  const handleValueKeyUp = useCallback<(e: React.KeyboardEvent<HTMLElement>) => void>(
    (e) => {
      const { length } = languages;

      const { currentTarget: summary } = e;

      const details = summary.parentElement as HTMLDetailsElement;
      if (e.code === 'Escape') {
        if (details.hasAttribute('open')) {
          details.removeAttribute('open');
        }
        return;
      }

      if ((e.code === 'ArrowDown' || e.code === 'ArrowUp') && e.altKey) {
        if (details.hasAttribute('open')) {
          details.removeAttribute('open');
        } else {
          details.setAttribute('open', '');
        }
        return;
      }

      let index = -1;
      forEach(languages, (v, i) => {
        if (focusedValue === v) {
          index = i;
        }
      });

      if (e.code === 'ArrowDown' && index < length - 1) {
        setValue(languages[index + 1]);
        setFocusedValue(languages[index + 1]);
        setTimeout(() => {
          summary.focus();
        }, 0);
        return;
      }

      if (e.code === 'ArrowUp' && index > 0) {
        setValue(languages[index - 1]);
        setFocusedValue(languages[index - 1]);
        setTimeout(() => {
          summary.focus();
        }, 0);
      }
    }, [focusedValue]);

  const handleLabelMouseOver = useCallback<(e: React.MouseEvent<HTMLLabelElement>) => void>(
    (e) => {
      const target = e.target as HTMLLabelElement;
      setFocusedValue(last(split(target.htmlFor, '-')) || null);
    }, []);

  return (
    <label htmlFor="language" id="language-label">
      {intl.formatMessage({ id: 'app.page.registration.field.language.label' })}
      <details
        className={detailsClassname}
        role="listbox"
      >
        <summary
          className={styles.summary}
          onKeyUp={handleValueKeyUp}
          aria-labelledby={`language-label${value ? ` language-${value}` : ''}`}
        >
          {map(languages, (lang) => (
            <input
              tabIndex={-1}
              key={lang}
              type="radio"
              name="language"
              id={`language-${lang}`}
              value={lang}
              title={intl.formatMessage({
                id: `app.page.registration.field.language.option.${lang}`,
              })}
              role="presentation"
              onChange={handleValueChange}
              checked={value === lang}
            />
          ))}
          <input
            tabIndex={-1}
            type="radio"
            name="language"
            id="language-none"
            value=""
            title={languageNoneTitle}
            defaultChecked
            role="presentation"
          />
        </summary>
        <ul className={styles.list} role="presentation">
          {map(languages, (lang) => (
            <li role="option" aria-selected={value === lang} key={lang}>
              <label htmlFor={`language-${lang}`} className={labelClassNames[lang]} onMouseOver={handleLabelMouseOver}>
                {intl.formatMessage({
                  id: `app.page.registration.field.language.option.${lang}`,
                })}
              </label>
            </li>
          ))}
        </ul>
      </details>
    </label>
  );
};

export default LanguageField;
