import React from 'react';
import { Field, Form, Formik } from "formik";
import { useDispatch } from 'react-redux';

import { step3Val } from "../../../validation";
import { PrevButton } from "../../Buttons/PrevButton";
import { NextButton } from "../../Buttons/NextButton";
import { changeStep } from '../../../redux/stepSlice';


export const Step3 = () => {
  const dispatch = useDispatch();
  const goToPrevStep = ()=>{
    dispatch(changeStep(2));
  }
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

          <div className="buttons">
          <PrevButton onPrev={goToPrevStep}/>
          <NextButton nextType="submit" nextTitle='Submit'/>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
