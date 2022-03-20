import React from 'react';
import { useIntl } from '@@/plugin-locale/localeExports';

const NameField: React.FC = function NameField() {
  const intl = useIntl();

  return (
    <label htmlFor="name">
      {intl.formatMessage({ id: 'app.page.registration.field.name.label' })}
      <input
        type="text"
        id="name"
        name="name"
        placeholder={intl.formatMessage({
          id: 'app.page.registration.field.name.placeholder',
        })}
        required
      />
    </label>
  );
};

export default NameField;
