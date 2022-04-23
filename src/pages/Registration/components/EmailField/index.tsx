import React, { FormEventHandler, useCallback, useState } from 'react';
import { useIntl } from '@@/plugin-locale/localeExports';
import { GetInputHandler } from '@/pages/Registration/components/Form';
import { IFormContext } from '../FormContext';

const name = 'email';

const EmailField: React.FC<IFormContext> = function EmailField({
  addErrorField,
  deleteErrorField,
}) {
  const intl = useIntl();
  const [error, setError] = useState<string>('');

  const inputHandler = GetInputHandler({
    name,
    deleteErrorField,
    addErrorField,
  });

  const handleInput = useCallback<FormEventHandler<HTMLInputElement>>(
    (event) => {
      setError(
        inputHandler(event)
          ? ''
          : intl.formatMessage({
              id: 'app.page.registration.field.email.invalid',
            }),
      );
    },
    [inputHandler, intl],
  );

  return (
    <label htmlFor="email">
      {intl.formatMessage({ id: 'app.page.registration.field.email.label' })}
      <input
        type="email"
        id="email"
        name={name}
        placeholder={intl.formatMessage({
          id: 'app.page.registration.field.email.placeholder',
        })}
        onInput={handleInput}
      />
      <span className="error" aria-live="polite">
        {error}
      </span>
    </label>
  );
};

export default EmailField;
