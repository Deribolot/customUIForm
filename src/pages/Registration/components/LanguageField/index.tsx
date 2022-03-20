import React from 'react';
import { useIntl } from '@@/plugin-locale/localeExports';

const LanguageField: React.FC = function LanguageField() {
  const intl = useIntl();

  return (
    <label htmlFor="language">
      {intl.formatMessage({ id: 'app.page.registration.field.language.label' })}
      <select
        id="language"
        name="language"
        placeholder={intl.formatMessage({
          id: 'app.page.registration.field.language.placeholder',
        })}
      >
        <option value="ru">
          {intl.formatMessage({
            id: 'app.page.registration.field.language.option.ru',
          })}
        </option>
        <option value="en">
          {intl.formatMessage({
            id: 'app.page.registration.field.language.option.en',
          })}
        </option>
        <option value="zh">
          {intl.formatMessage({
            id: 'app.page.registration.field.language.option.zh',
          })}
        </option>
        <option value="es">
          {intl.formatMessage({
            id: 'app.page.registration.field.language.option.es',
          })}
        </option>
      </select>
    </label>
  );
};

export default LanguageField;
