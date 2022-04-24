import React, { FormEventHandler, useCallback, useState } from 'react';
import { useIntl } from '@@/plugin-locale/localeExports';
import { IFormContext } from '@/pages/Registration/components/FormContext';
import { GetInputHandler } from '@/pages/Registration/components/Form';

const name = 'name';

const NameField: React.FC<IFormContext> = function NameFieldReact({
  addErrorField,
  deleteErrorField,
}) {
  const intl = useIntl();
  const [error, setError] = useState<string>(
    intl.formatMessage({ id: 'app.page.registration.field.name.invalid' }),
  );

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
              id: 'app.page.registration.field.name.invalid',
            }),
      );
    },
    [inputHandler, intl],
  );

  return (
    <label htmlFor="name">
      {intl.formatMessage({ id: 'app.page.registration.field.name.label' })}
      <input
        type="text"
        id="name"
        name={name}
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
