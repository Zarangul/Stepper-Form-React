import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import cn from "classnames";

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
        initialValues={{ name: "", surname:"" }}
        onSubmit={(val) => {
          dispatch(setFormData(val));
          dispatch(changeStep(2));
        }}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <label>First Name</label>
            {errors.name && touched.name ? (
              <div style={{ color: "#de6f3b" }}>{errors.name}</div>
            ) : null}
            <Field
              className={`input ${cn({ error: errors.name && touched.name })}`}
              name="name"
              placeholder="type your first name"
            />

            <label>Last Name</label>
            {errors.surname && touched.surname ? (
              <div style={{ color: "#de6f3b" }}>{errors.surname}</div>
            ) : null}
            <Field
              className={`input ${cn({ error: errors.surname && touched.surname })}`}
              name="surname"
              placeholder="type your last name"
            />

            <div className="buttons">
              <NextButton nextType="submit" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
