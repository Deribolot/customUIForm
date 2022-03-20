import React from 'react';
import { useIntl } from 'umi';
import styles from './index.less';

interface ISubmitButton {
  disabled?: boolean;
  form: string;
}

const SubmitButton: React.FC<ISubmitButton> = function SubmitButton({
  disabled,
  form,
}) {
  const intl = useIntl();

  return (
    <button
      type="submit"
      className={styles.submit}
      disabled={disabled}
      form={form}
    >
      {intl.formatMessage({ id: 'app.page.registration.register' })}
    </button>
  );
};

SubmitButton.defaultProps = { disabled: false };

export default SubmitButton;
