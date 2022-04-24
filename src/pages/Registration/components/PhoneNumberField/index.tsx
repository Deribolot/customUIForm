import React from 'react';
import { useIntl } from '@@/plugin-locale/localeExports';
import { IFieldComponent } from '@/pages/Registration/components/InputFieldDecorator';

const PhoneNumberField: React.FC<IFieldComponent> = function PhoneNumberField({
  onInput,
  name,
  hasError,
}) {
  const intl = useIntl();
  const errorText = hasError && intl.formatMessage({ id: 'app.page.registration.field.phoneNumber.invalid' });

  const firstDigit = '\\+?\\d';
  const secondDigit = '((\\(\\d{3}\\))|(\\d{3}))';
  const thirdDigit = '\\d{3}-?';
  const fourthDigit = '\\d{2}-?';
  const fifthDigit = '\\d{2}';

  return (
    <label htmlFor="phoneNumber">
      {intl.formatMessage({
        id: 'app.page.registration.field.phoneNumber.label',
      })}
      <input
        type="text"
        id="phoneNumber"
        name={name}
        placeholder={intl.formatMessage({
          id: 'app.page.registration.field.phoneNumber.placeholder',
        })}
        pattern={`${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}${fifthDigit}`}
        onInput={onInput}
      />
      <span className="error" aria-live="polite">
        {errorText}
      </span>
    </label>
  );
};

export default PhoneNumberField;
