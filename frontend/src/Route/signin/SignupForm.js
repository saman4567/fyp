// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const SignupForm = () => (
<div className="d-flex justify-content-center mt-4">
  <div className="col-8"> 
    <h1>Signup</h1>
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
         <label for="fname">First name</label>
          <Field type="firstname" name="Firstname" className="form-control" placeholder="Enter your First name"/>
          <ErrorMessage name="First name" component="div" />
          </div>
          <div className="form-group">
         <label for="lname">Last name</label>
          <Field type="lastname" name="Last name" className="form-control" placeholder="Enter your Last name"/>
          <ErrorMessage name="Last name" component="div" />
          </div>
          <div className="form-group">
         <label for="password">Password</label>
          <Field type="password" name="password" className="form-control" placeholder="Enter your password"/>
          <ErrorMessage name="password" component="div" />
          </div>
          <div className="form-group">
         <label for=" confirm password"> Confirm Password</label>
          <Field type=" confirm password" name=" Confirm password" className="form-control" placeholder="Enter your password"/>
          <ErrorMessage name=" confirm password" component="div" />
          </div>
        
          <Field type ="checkbox" name=" I accept the terms of use  and privacy policy" />
          <label>
          I accept the terms of use and privacy policy
          </label>
          <br/>
          <div>
    <label>Already have an account? <a href="/">Sign in</a></label>
  </div>
          
          
          <button type="Signup" disabled={isSubmitting} className="btn btn-primary">
            Signup
          </button>
          
        
        </Form>
      )}
    </Formik>
    </div>
  </div>
);

export default SignupForm;