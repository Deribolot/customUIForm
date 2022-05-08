import React from 'react';
import styles from './index.less';

const FieldError: React.FC = function FieldError({ children }) {
  return (
    <span className={styles.error} aria-live="polite">
      {children}
    </span>
  );
};

export default FieldError;
