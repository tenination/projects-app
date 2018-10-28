import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
});

const ErrorMessageStyle = {
  color: 'red'
};

const SignUp = () => {
  return <div className="container">
      <h5 className="grey-text text-darken-3">Sign Up</h5>
      <Formik initialValues={{ email: "", password: "" }}
        validationSchema={SignupSchema}
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
            <div className="input-field">
              <label>First Name</label>
              <Field type="text" name="firstName" />
              <ErrorMessage style={ErrorMessageStyle} name="firstName" component="div" />
            </div>
            <div className="input-field">
              <label>Last Name</label>
              <Field type="text" name="lastName" />
              <ErrorMessage style={ErrorMessageStyle} name="lastName" component="div" />
            </div>
            <button type="submit" className="btn pink lighten-1 z-depth-0" disabled={isSubmitting}>
              Sign Up
            </button>
          </Form>}
      </Formik>
    </div>;
}

export default SignUp
