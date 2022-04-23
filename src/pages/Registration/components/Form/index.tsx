import React, {
  FormEventHandler,
  ReactElement,
  SyntheticEvent,
  useCallback,
} from 'react';
import FormContext, { IFormContext } from '../FormContext';
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

interface IGetInputHandlerArgs {
  name: string;
}
type TGetInputHandlerArgs = IFormContext & IGetInputHandlerArgs;
type TGetInputHandler<HTMLElementType> = (
  event: SyntheticEvent<HTMLElementType>,
) => boolean;

export function GetInputHandler({
  name,
  deleteErrorField,
  addErrorField,
}: TGetInputHandlerArgs): TGetInputHandler<HTMLInputElement> {
  return useCallback<TGetInputHandler<HTMLInputElement>>(
    (event) => {
      if (event.currentTarget.validity.valid) {
        deleteErrorField(name);
        return true;
      }
      event.currentTarget.reportValidity();
      addErrorField(name);
      event.preventDefault();
      return false;
    },
    [addErrorField, deleteErrorField, name],
  );
}

export function getFieldDecorator(Field: React.FC<IFormContext>): ReactElement {
  return (
    <div className={styles.field}>
      <FormContext.Consumer>
        {({ addErrorField, deleteErrorField }) => (
          <Field
            addErrorField={addErrorField}
            deleteErrorField={deleteErrorField}
          />
        )}
      </FormContext.Consumer>
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
