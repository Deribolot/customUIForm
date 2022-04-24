import React, {
  FormEventHandler,
  ReactElement,
  useCallback,
} from 'react';
import styles from './index.less';

interface IForm {
  id: string;
}

const Form: React.FC<IForm> = function Form({ children, id }) {
  const handleInvalid = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault();
    },
    [],
  );

  return (
    <form
      id={id}
      action="."
      className={styles.form}
      noValidate
      onInvalid={handleInvalid}
    >
      {children}
    </form>
  );
};

export function getCheckboxDecorator(Field: React.FC): ReactElement {
  return (
    <div className={styles.checkbox}>
      <Field />
    </div>
  );
}

export default Form;
