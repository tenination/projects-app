import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string().required('Required'),
});

const ErrorMessageStyle = {
  color: 'red',
};

const SignIn = props => {
  const { authError, auth } = props;
  if (auth.uid) {
    return <Redirect to="/" />;
  }
  return (
    <div className="container">
      <h5 className="grey-text text-darken-3">Sign In</h5>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignInSchema}
        onSubmit={(values, { setSubmitting }) => {
          props.signIn(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="input-field">
              <label>Email</label>
              <Field type="email" name="email" />
              <ErrorMessage
                style={ErrorMessageStyle}
                name="email"
                component="div"
              />
            </div>
            <div className="input-field">
              <label>Password</label>
              <Field type="password" name="password" />
              <ErrorMessage
                style={ErrorMessageStyle}
                name="password"
                component="div"
              />
            </div>
            <button
              className="btn pink lighten-1 z-depth-0"
              disabled={isSubmitting}
              type="submit"
            >
              LOGIN
            </button>
          </Form>
        )}
      </Formik>
      <div className="red-text center">
        {authError ? <p>{authError}</p> : null}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => {
      dispatch(signIn(creds));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);
