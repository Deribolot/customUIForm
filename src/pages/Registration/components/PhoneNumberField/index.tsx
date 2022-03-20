import React from 'react';
import { useIntl } from '@@/plugin-locale/localeExports';

const PhoneNumberField: React.FC = function PhoneNumberField() {
  const intl = useIntl();

  return (
    <label htmlFor="phoneNumber">
      {intl.formatMessage({
        id: 'app.page.registration.field.phoneNumber.label',
      })}
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        placeholder={intl.formatMessage({
          id: 'app.page.registration.field.phoneNumber.placeholder',
        })}
      />
    </label>
  );
};

export default PhoneNumberField;
