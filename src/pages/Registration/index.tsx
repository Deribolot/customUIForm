import React from 'react';
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

export default function Registration() {
  return (
    <>
      <Header />
      <Form id="registration">
        {getFieldDecorator(NameField)}
        {getFieldDecorator(EmailField)}
        {getFieldDecorator(PhoneNumberField)}
        {getFieldDecorator(LanguageField)}
        {getCheckboxDecorator(IAcceptTermsOfUseField)}
      </Form>
      <Footer>
        <SubmitButton form="registration" />
      </Footer>
    </>
  );
}
