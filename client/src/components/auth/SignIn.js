import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .required("Required")
});

const ErrorMessageStyle = {
  color: "red"
};

const SignIn = () => {
  return <div className="container">
      <h5 className="grey-text text-darken-3">Sign In</h5>
      <Formik initialValues={{ email: "", password: "" }} 
       validationSchema={SignInSchema}
       onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}>
        {({ isSubmitting }) => <Form>
          <div className="input-field">
            <label>Email</label>
            <Field type="email" name="email" />
          <ErrorMessage style={ErrorMessageStyle} name="email" component="div" />
          </div>
          <div className="input-field">
            <label>Password</label>
            <Field type="password" name="password" />
          <ErrorMessage style={ErrorMessageStyle} name="password" component="div" />
          </div>
            <button 
              className="btn pink lighten-1 z-depth-0" 
              disabled={isSubmitting}
            >
              LOGIN
            </button>
          </Form>}
      </Formik>
    </div>;
}

export default SignIn
