import React from 'react';
import noop from 'lodash/noop';

export interface IFormContext {
  addErrorField: (field: string) => void;
  deleteErrorField: (field: string) => void;
}

const defaultFormContext: IFormContext = {
  addErrorField: noop,
  deleteErrorField: noop,
};

const FormContext = React.createContext<IFormContext>(defaultFormContext);

export default FormContext;
