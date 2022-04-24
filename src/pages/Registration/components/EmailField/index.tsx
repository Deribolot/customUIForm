import React from 'react';
import { useIntl } from '@@/plugin-locale/localeExports';
import { IFieldComponent } from '@/pages/Registration/components/InputFieldDecorator';

const EmailField: React.FC<IFieldComponent> = function EmailField({ onInput, name, hasError }) {
  const intl = useIntl();
  const errorText = hasError && intl.formatMessage({ id: 'app.page.registration.field.email.invalid' });

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
        onInput={onInput}
      />
      <span className="error" aria-live="polite">
        {errorText}
      </span>
    </label>
  );
};

export default EmailField;
