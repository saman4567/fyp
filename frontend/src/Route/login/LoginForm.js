// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const LoginForm = () => (
  <div className="d-flex justify-content-center mt-4">
    <div className="col-8">
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email</label>
              <Field type="email" name="email" className="form-control" placeholder="Enter your email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <Field type="password" name="password" className="form-control" placeholder="Enter your password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <Field type="checkbox" name="Remember me" />
            <label>
              Remember me
          </label>

            <br />


            <button type="login" disabled={isSubmitting} className="btn btn-primary">
              login 
          </button>

          <div className="form-group">
          
  <label for="Not Registered ?">Not Registered?</label>
<label for=" Create an account "> <a href="/signup">Create an account</a></label>
  </div>


          </Form>
        )}
      </Formik>
    </div>
  </div>
);

export default LoginForm;