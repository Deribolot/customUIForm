import React, { SyntheticEvent, useCallback, useContext } from 'react';
import includes from 'lodash/includes';
import FormContext, { IFormContext } from '../FormContext';
import styles from './index.less';

interface IGetInputHandlerArgs {
  name: string;
}

type TGetInputHandlerArgs = Pick<IFormContext, 'deleteErrorField' | 'addErrorField'> & IGetInputHandlerArgs;

type TGetInputHandler<HTMLElementType> = (
  event: SyntheticEvent<HTMLElementType>,
) => boolean;

function GetInputHandler({
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

export interface IFieldComponent {
  onInput: TGetInputHandler<HTMLInputElement>;
  name: string;
  hasError: boolean;
}

export interface IFieldDecorator {
  component: React.FC<IFieldComponent>;
  name: string;
}

const InputFieldDecorator: React.FC<IFieldDecorator> = function InputFieldDecorator({
  component: Component,
  name,
}) {
  const { addErrorField, deleteErrorField, fieldErrors } = useContext<IFormContext>(FormContext);

  const inputHandler = GetInputHandler({
    name,
    deleteErrorField,
    addErrorField,
  });

  return (
    <div className={styles.field}>
      <Component name={name} onInput={inputHandler} hasError={includes(fieldErrors, name)} />
    </div>
  );
};

export default InputFieldDecorator;
