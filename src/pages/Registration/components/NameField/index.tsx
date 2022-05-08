import React from 'react';
import { useIntl } from '@@/plugin-locale/localeExports';
import { IFieldComponent } from '@/pages/Registration/components/InputFieldDecorator';
import FieldError from '@/pages/Registration/components/FieldError';

const NameField: React.FC<IFieldComponent> = function NameField({ onInput, name, hasError }) {
  const intl = useIntl();
  const errorText = hasError && intl.formatMessage({ id: 'app.page.registration.field.name.invalid' });

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
        onInput={onInput}
      />
      <FieldError>
        {errorText}
      </FieldError>
    </label>
  );
};

export default NameField;
