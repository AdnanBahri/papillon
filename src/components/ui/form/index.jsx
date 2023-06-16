import { Formik } from "formik";
import React from "react";

const Form = ({ schema, initial, submit, children }) => {
  return (
    <Formik initialValues={initial} validationSchema={schema} onSubmit={submit}>
      {children}
    </Formik>
  );
};

export default Form;
