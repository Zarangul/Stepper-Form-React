import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";

import { step1Val } from "../../../validation";
import { changeStep } from "../../../redux/stepSlice";
import { NextButton } from "../../Buttons/NextButton";
import { setFormData } from "../../../redux/formDataSlice";

export const Step1 = () => {
  const dispatch = useDispatch();
  return (
    <div className="div">
      <Formik
        validationSchema={step1Val}
        initialValues={{ name: "" }}
        onSubmit={(val) => {
          dispatch(setFormData(val));
          dispatch(changeStep(2));
        }}
      >
        <Form className="form">
          <label>Name</label>
          <Field className="input" name="name" placeholder='type your name'/>

          <div className="buttons">
          <NextButton nextType="submit" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};
