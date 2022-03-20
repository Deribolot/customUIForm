import React from 'react';
import { useIntl } from '@@/plugin-locale/localeExports';

const EmailField: React.FC = function EmailField() {
  const intl = useIntl();

  return (
    <label htmlFor="email">
      {intl.formatMessage({ id: 'app.page.registration.field.email.label' })}
      <input
        type="email"
        id="email"
        name="email"
        placeholder={intl.formatMessage({
          id: 'app.page.registration.field.email.placeholder',
        })}
      />
    </label>
  );
};

export default EmailField;
