import React, { ReactElement } from 'react';
import styles from './index.less';

interface IForm {
  id: string;
}

const Form: React.FC<IForm> = function Form({ children, id }) {
  return (
    <form id={id} action="." className={styles.form}>
      {children}
    </form>
  );
};

export function getFieldDecorator(Field: React.FC): ReactElement {
  return (
    <div className={styles.field}>
      <Field />
    </div>
  );
}

export function getCheckboxDecorator(Field: React.FC): ReactElement {
  return (
    <div className={styles.checkbox}>
      <Field />
    </div>
  );
}

export default Form;
