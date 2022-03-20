import React from 'react';
import { useIntl } from '@@/plugin-locale/localeExports';
import { Link } from 'umi';

const IAcceptTermsOfUseField: React.FC = function IAcceptTermsOfUseField() {
  const intl = useIntl();

  // @ts-ignore
  const iAcceptTermsOfUseLabel = intl.formatMessage(
    { id: 'app.page.registration.field.iAcceptTermsOfUse.label' },
    [
      <Link to="/termsOfUse">
        {intl.formatMessage({
          id: 'app.page.registration.field.iAcceptTermsOfUse.termsOfUse',
        })}
      </Link>,
    ],
  );

  return (
    <label htmlFor="iAcceptTermsOfUse">
      <input type="checkbox" id="iAcceptTermsOfUse" name="iAcceptTermsOfUse" />
      {iAcceptTermsOfUseLabel}
    </label>
  );
};

export default IAcceptTermsOfUseField;
