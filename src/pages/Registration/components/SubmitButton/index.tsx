import React from 'react';
import { useIntl } from 'umi';
import styles from './index.less';

interface ISubmitButton {
  disabled?: boolean;
}

const SubmitButton: React.FC<ISubmitButton> = function SubmitButton({
  disabled,
}) {
  const intl = useIntl();

  return (
    <button type="submit" className={styles.submit} disabled={disabled}>
      {intl.formatMessage({ id: 'app.page.registration.register' })}
    </button>
  );
};

SubmitButton.defaultProps = { disabled: false };

export default SubmitButton;
