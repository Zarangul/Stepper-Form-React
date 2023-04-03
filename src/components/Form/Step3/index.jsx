import React from 'react';
import { Field, Form, Formik } from "formik";
import { useDispatch} from 'react-redux';
import cn from 'classnames';

import { step3Val } from "../../../validation";
import { PrevButton } from "../../Buttons/PrevButton";
import { NextButton } from "../../Buttons/NextButton";
import { changeStep } from '../../../redux/stepSlice';
import { setFormData } from "../../../redux/formDataSlice";

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
        dispatch(setFormData(val));
        dispatch(changeStep(4));
      }}
      >
        {
          ({errors,touched})=>(
            <Form className='form'>
          <label>Bank account</label>
          {errors.account && touched.account ? <div style={{color:'#de6f3b'}}>{errors.account}</div> : null}
          <Field className={`input ${cn({error: errors.account && touched.account})}`} name='account' placeholder='type your bank account'/>

          <div className="buttons">
          <PrevButton onPrev={goToPrevStep}/>
          <NextButton nextType="submit" nextTitle='Submit'/>
          </div>
        </Form>
          )
        }
      </Formik>
    </div>
  )
}
