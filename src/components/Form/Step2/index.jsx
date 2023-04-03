import React from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import cn from 'classnames';

import { step2Val } from "../../../validation";
import { changeStep } from "../../../redux/stepSlice";
import { PrevButton } from "../../Buttons/PrevButton";
import { NextButton } from "../../Buttons/NextButton";
import { setFormData } from "../../../redux/formDataSlice";

export const Step2 = () => {
  const dispatch = useDispatch();
  const goToPrevStep = ()=>{
    dispatch(changeStep(1))
  }
  return (
    <div className="div">
      <Formik
        validationSchema={step2Val}
        initialValues={{ age: "" }}
        onSubmit={(val) => {
          dispatch(setFormData(val));
          dispatch(changeStep(3));
        }}
      >
        {
          ({errors,touched})=>(
            <Form className="form">
          <label>Age</label>
          {errors.age && touched.age ? <div style={{color:'#de6f3b'}}>{errors.age}</div> : null}
          <Field className={`input ${cn({error: errors.age && touched.age})}`} name="age"  placeholder='type your age'/>

          <div className="buttons">
          <PrevButton onPrev={goToPrevStep}/>
          <NextButton nextType="submit"/>
          </div>
          
        </Form>
          )
        }
      </Formik>
    </div>
  );
};
