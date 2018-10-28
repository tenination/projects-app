import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ErrorMessageStyle = {
  color: 'red'
};

const SignUp = () => {
  return <div className="container">
      <h5 className="grey-text text-darken-3">Sign Up</h5>
      <Formik initialValues={{ email: "", password: "" }} validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
          }
          return errors;
        }} onSubmit={(values, { setSubmitting }) => {
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
              <ErrorMessage name="password" component="div" />
            </div>
            <div className="input-field">
              <label>First Name</label>
              <Field type="text" name="first-name" />
              <ErrorMessage name="first-name" component="div" />
            </div>
            <div className="input-field">
              <label>Last Name</label>
              <Field type="text" name="last-name" />
              <ErrorMessage name="last-name" component="div" />
            </div>
            <button className="btn pink lighten-1 z-depth-0" disabled={isSubmitting}>
              Sign Up
            </button>
          </Form>}
      </Formik>
    </div>;
}

export default SignUp
