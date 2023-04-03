import React from "react";
import { Form, Formik } from "formik";
import { useSelector } from "react-redux";

export default function SubmitData() {
  const data = useSelector((x) => x.form.arr);
  return (
    <div className="div">
      <Formik>
        <Form className="form submit-data">
          <h1>Your Form Data</h1>
          <label>Name: {data.name}</label>
          <label>Age: {data.age}</label>
          <label>Bank account: {data.account}</label>
        </Form>
      </Formik>
    </div>
  );
}
