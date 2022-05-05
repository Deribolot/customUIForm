import React, { useMemo, useCallback, useState } from 'react';
import classnames from 'classnames';
import forEach from 'lodash/forEach';
import map from 'lodash/map';
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

  const labelClassNames = useMemo<{
    ru: string;
    en: string;
    zh: string;
    es: string;
  }>(
    () => ({
      ru: classnames({ [styles.checked]: value === 'ru' }),
      en: classnames({ [styles.checked]: value === 'en' }),
      zh: classnames({ [styles.checked]: value === 'zh' }),
      es: classnames({ [styles.checked]: value === 'es' }),
    }),
    [value],
  );

  const handleValueChange = useCallback<(e: React.FormEvent<HTMLInputElement>) => void>((e) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
  }, []);

  const handleValueKeyUp = useCallback<(e: React.KeyboardEvent<HTMLInputElement>) => void>((e) => {
    const { length } = languages;

    let index = -1;
    forEach(languages, (v, i) => {
      if (value === v) {
        index = i;
      }
    });

    if (e.code === 'ArrowDown' && index < length - 1) {
      setValue(languages[index + 1]);
    }

    if (e.code === 'ArrowUp' && index > 0) {
      setValue(languages[index - 1]);
    }
  }, [value]);

  return (
    <label htmlFor="language" id="language-label">
      {intl.formatMessage({ id: 'app.page.registration.field.language.label' })}
      <details
        className={detailsClassname}
        onChange={handleValueChange}
        role="listbox"
        onKeyUp={handleValueKeyUp}
      >
        <summary
          className={styles.summary}
          aria-labelledby={`language-label${value ? ` language-${value}` : ''}`}
        >
          {map(languages, (lang) => (
            <input
              key={lang}
              type="radio"
              name="language"
              id={`language-${lang}`}
              value={lang}
              title={intl.formatMessage({
                id: `app.page.registration.field.language.option.${lang}`,
              })}
              role="presentation"
              checked={value === lang}
            />
          ))}
          <input
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
              <label htmlFor="language-ru" className={labelClassNames[lang]}>
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
