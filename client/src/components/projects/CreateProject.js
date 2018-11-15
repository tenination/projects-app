import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';

const CreateProjectSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  content: Yup.string().required('Required'),
});

const ErrorMessageStyle = {
  color: 'red',
};

const CreateProject = props => {
  const { auth } = props;
  if (!auth.uid) {
    return <Redirect to="/signin" />;
  }
  return (
    <div className="container">
      <h5 className="grey-text text-darken-3">Create new project</h5>
      <Formik
        initialValues={{ title: '', content: '' }}
        validationSchema={CreateProjectSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            props.createProject(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="input-field">
              <label>Title</label>
              <Field type="text" name="title" />
              <ErrorMessage
                style={ErrorMessageStyle}
                name="title"
                component="div"
              />
            </div>
            <div className="input-field">
              <label>Project Content</label>
              <Field type="text" name="content" />
              <ErrorMessage
                style={ErrorMessageStyle}
                name="content"
                component="div"
              />
            </div>
            <button
              className="btn pink lighten-1 z-depth-0"
              disabled={isSubmitting}
              type="submit"
            >
              CREATE
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateProject);
