import React from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";

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
        <Form className="form">
          <label>Age</label>
          <Field className="input" name="age"  placeholder='type your age'/>

          <div className="buttons">
          <PrevButton onPrev={goToPrevStep}/>
          <NextButton nextType="submit"/>
          </div>
          
        </Form>
      </Formik>
    </div>
  );
};
