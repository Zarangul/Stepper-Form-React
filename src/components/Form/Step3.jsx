import React from 'react';
import { Field, Form, Formik } from "formik";

import { step3Val } from "../../validation";
import { Buttons } from "../Buttons";


export const Step3 = () => {
  return (
    <div className='div'>
      <Formik
      validationSchema={step3Val}
      initialValues={{ account: "" }}
      onSubmit={(val) => {
        console.log("submit");
      }}
      >
        <Form className='form'>
          <label>Bank account</label>
          <Field className='input' name='account'/>
          <Buttons nextType="submit" nextTitle='Submit'/>
        </Form>
      </Formik>
    </div>
  )
}
