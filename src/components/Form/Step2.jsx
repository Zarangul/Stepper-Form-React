import React from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";

import { step2Val } from "../../validation";
import { changeStep } from "../../redux/stepSlice";
import { Buttons } from "../Buttons";

export const Step2 = () => {
  const dispatch = useDispatch();
  return (
    <div className="div">
      <Formik
        validationSchema={step2Val}
        initialValues={{ age: "" }}
        onSubmit={(val) => {
          dispatch(changeStep(3));
        }}
      >
        <Form className="form">
          <label>Age</label>
          <Field className="input" name="age" />
          {/* <Field className="input" /> */}
          <Buttons nextType="submit" />
        </Form>
      </Formik>
    </div>
  );
};
