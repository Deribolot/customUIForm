import React, { useCallback, useMemo, useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import includes from 'lodash/includes';
import remove from 'lodash/remove';
import Header from './components/Header';
import Footer from './components/Footer';
import SubmitButton from './components/SubmitButton';
import Form, {
  getFieldDecorator,
  getCheckboxDecorator,
} from './components/Form';
import NameField from './components/NameField';
import EmailField from './components/EmailField';
import PhoneNumberField from './components/PhoneNumberField';
import LanguageField from './components/LanguageField';
import IAcceptTermsOfUseField from './components/IAcceptTermsOfUseField';
import FormContext, { IFormContext } from './components/FormContext';

export default function Registration() {
  const [errorFields, setErrorFields] = useState<Array<string>>([]);

  const addErrorField = useCallback<IFormContext['addErrorField']>((field) => {
    setErrorFields((oldErrorFields) => {
      if (includes(oldErrorFields, field)) {
        return oldErrorFields;
      }
      return [...oldErrorFields, field];
    });
  }, []);

  const deleteErrorField = useCallback<IFormContext['addErrorField']>(
    (field) => {
      setErrorFields((oldErrorFields) => {
        if (includes(oldErrorFields, field)) {
          const newErrorFields = [...oldErrorFields];
          remove(newErrorFields, (errorField) => errorField === field);
          return newErrorFields;
        }
        return oldErrorFields;
      });
    },
    [],
  );

  const newFormContext = useMemo<IFormContext>(
    () => ({
      addErrorField,
      deleteErrorField,
    }),
    [addErrorField, deleteErrorField],
  );

  return (
    <>
      <Header />
      <Form id="registration">
        <FormContext.Provider value={newFormContext}>
          {getFieldDecorator(NameField)}
          {getFieldDecorator(EmailField)}
          {getFieldDecorator(PhoneNumberField)}
          {getFieldDecorator(LanguageField)}
          {getCheckboxDecorator(IAcceptTermsOfUseField)}
        </FormContext.Provider>
      </Form>
      <Footer>
        <SubmitButton form="registration" disabled={!isEmpty(errorFields)} />
      </Footer>
    </>
  );
}
