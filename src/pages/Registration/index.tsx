import React, { useCallback, useMemo, useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import includes from 'lodash/includes';
import remove from 'lodash/remove';
import Header from './components/Header';
import Footer from './components/Footer';
import SubmitButton from './components/SubmitButton';
import Form, { getCheckboxDecorator } from './components/Form';
import InputFieldDecorator from './components/InputFieldDecorator';
import NameField from './components/NameField';
import EmailField from './components/EmailField';
import PhoneNumberField from './components/PhoneNumberField';
import LanguageField from './components/LanguageField';
import IAcceptTermsOfUseField from './components/IAcceptTermsOfUseField';
import FormContext, { IFormContext } from './components/FormContext';

export default function Registration() {
  const [fieldErrors, setErrorFields] = useState<Array<string>>(['name']);

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
      fieldErrors,
    }),
    [addErrorField, deleteErrorField, fieldErrors],
  );

  return (
    <>
      <Header />
      <Form id="registration">
        <FormContext.Provider value={newFormContext}>
          <InputFieldDecorator component={NameField} name="name" />
          <InputFieldDecorator component={EmailField} name="email" />
          <InputFieldDecorator component={PhoneNumberField} name="phoneNumber" />
          <InputFieldDecorator component={LanguageField} name="language" />
          {getCheckboxDecorator(IAcceptTermsOfUseField)}
        </FormContext.Provider>
      </Form>
      <Footer>
        <SubmitButton form="registration" disabled={!isEmpty(fieldErrors)} />
      </Footer>
    </>
  );
}
