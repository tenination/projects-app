import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const SignIn = () => {
  return <div className="container">
      <h5 className="grey-text text-darken-3">Sign In</h5>
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
            <ErrorMessage name="email" component="div" />
          </div>
          <div className="input-field">
            <label>Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
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
