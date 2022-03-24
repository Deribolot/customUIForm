import React, { useMemo, useCallback, useState } from 'react';
import classnames from 'classnames';
import { useIntl } from '@@/plugin-locale/localeExports';
import styles from './index.less';

const LanguageField: React.FC = function LanguageField() {
  const intl = useIntl();

  const languageRuTitle = intl.formatMessage({
    id: 'app.page.registration.field.language.option.ru',
  });
  const languageEnTitle = intl.formatMessage({
    id: 'app.page.registration.field.language.option.en',
  });
  const languageZhTitle = intl.formatMessage({
    id: 'app.page.registration.field.language.option.zh',
  });
  const languageEsTitle = intl.formatMessage({
    id: 'app.page.registration.field.language.option.es',
  });
  const languageNoneTitle = intl.formatMessage({
    id: 'app.page.registration.field.language.placeholder',
  });

  const detailsClassname = useMemo<string>(
    () =>
      classnames({
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

  const handleValueChange = useCallback<
    (e: React.FormEvent<HTMLInputElement>) => void
  >((e) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value);
  }, []);

  return (
    <label htmlFor="language">
      {intl.formatMessage({ id: 'app.page.registration.field.language.label' })}
      <details className={detailsClassname} onChange={handleValueChange}>
        <summary className={styles.summary}>
          <input
            type="radio"
            name="language"
            id="language-ru"
            value="ru"
            title={languageRuTitle}
          />
          <input
            type="radio"
            name="language"
            id="language-en"
            value="en"
            title={languageEnTitle}
          />
          <input
            type="radio"
            name="language"
            id="language-zh"
            value="zh"
            title={languageZhTitle}
          />
          <input
            type="radio"
            name="language"
            id="language-es"
            value="es"
            title={languageEsTitle}
          />
          <input
            type="radio"
            name="language"
            id="language-none"
            value=""
            title={languageNoneTitle}
            defaultChecked
          />
        </summary>
        <ul className={styles.list}>
          <li>
            <label htmlFor="language-ru" className={labelClassNames.ru}>
              {languageRuTitle}
            </label>
          </li>
          <li>
            <label htmlFor="language-en" className={labelClassNames.en}>
              {languageEnTitle}
            </label>
          </li>
          <li>
            <label htmlFor="language-zh" className={labelClassNames.zh}>
              {languageZhTitle}
            </label>
          </li>
          <li>
            <label htmlFor="language-es" className={labelClassNames.es}>
              {languageEsTitle}
            </label>
          </li>
        </ul>
      </details>
    </label>
  );
};

export default LanguageField;
