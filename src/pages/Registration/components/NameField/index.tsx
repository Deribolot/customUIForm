import React, { FormEventHandler, useCallback, useState } from 'react';
import { useIntl } from '@@/plugin-locale/localeExports';
import { IFormContext } from '@/pages/Registration/components/FormContext';

const name = 'phoneNumber';

const NameField: React.FC<IFormContext> = function NameFieldReact({
  addErrorField,
  deleteErrorField,
}) {
  const intl = useIntl();
  const [error, setError] = useState<string>('');

  const handleInput = useCallback<FormEventHandler<HTMLInputElement>>(
    (event) => {
      if (event.currentTarget.validity.valid) {
        setError('');
        deleteErrorField(name);
      } else {
        setError(
          intl.formatMessage({
            id: 'app.page.registration.field.name.invalid',
          }),
        );
        event.currentTarget.reportValidity();
        addErrorField(name);
        event.preventDefault();
      }
    },
    [addErrorField, deleteErrorField, intl],
  );

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
        pattern="([a-zA-ZА-Яа-яёЁ]|\s|-)+"
        onInput={handleInput}
      />
      <span className="error" aria-live="polite">
        {error}
      </span>
    </label>
  );
};

export default NameField;
