import React, { FormEventHandler, useCallback, useState } from 'react';
import { useIntl } from '@@/plugin-locale/localeExports';
import { IFormContext } from '../FormContext';

const name = 'phoneNumber';

const PhoneNumberField: React.FC<IFormContext> = function PhoneNumberField({
  addErrorField,
  deleteErrorField,
}) {
  const intl = useIntl();
  const [error, setError] = useState<string>('');

  const handleInput = useCallback<FormEventHandler<HTMLInputElement>>(
    (event) => {
      if (event.currentTarget.validity.patternMismatch) {
        setError(
          intl.formatMessage({
            id: 'app.page.registration.field.phoneNumber.invalid',
          }),
        );
        event.currentTarget.reportValidity();
        addErrorField(name);
        event.preventDefault();
      } else {
        setError('');
        deleteErrorField(name);
      }
    },
    [addErrorField, deleteErrorField, intl],
  );

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
        onInput={handleInput}
      />
      <span className="error" aria-live="polite">
        {error}
      </span>
    </label>
  );
};

export default PhoneNumberField;
