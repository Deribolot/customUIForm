import React from 'react';
import noop from 'lodash/noop';

export interface IFormContext {
  addErrorField: (field: string) => void;
  deleteErrorField: (field: string) => void;
  fieldErrors: Array<string>;
}

const defaultFormContext: IFormContext = {
  addErrorField: noop,
  deleteErrorField: noop,
  fieldErrors: [],
};

const FormContext = React.createContext<IFormContext>(defaultFormContext);

export default FormContext;
