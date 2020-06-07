import * as React from "react";

import { Button, Grid, LinearProgress } from "@material-ui/core";
import { Field, Form, Formik } from "formik";

import { TextField } from "formik-material-ui";

export default function PostForm() {
  return (
    <Grid item xs={12}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              style={{ width: 500, marginBottom: 5 }}
            />
            <br />
            <Field
              component={TextField}
              type="password"
              label="Password"
              name="password"
              variant="outlined"
              style={{ width: 500, marginBottom: 5 }}
            />
            <Field
              component={TextField}
              type="features of the house"
              label="features of the house"
              name="features of the house"
              variant="outlined"
              style={{ width: 500, marginBottom: 5 }}
            />
            <Field
              component={TextField}
              type="facility of the house"
              label="facility of the house"
              name="facility of the house"
              variant="outlined"
              style={{ width: 500, marginBottom: 5 }}
            />
            <Field
              component={TextField}
              type="facility of the place"
              label="facility of the place"
              name="facility of the place"
              variant="outlined"
              style={{ width: 500, marginBottom: 5 }}
            />
            <Field
              component={TextField}
              type="features of the place"
              label="features of the place "
              name="features of the place"
              variant="outlined"
              style={{ width: 500, marginBottom: 5 }}
            />
            <Field
              component={TextField}
              type=" Price"
              label=" Price"
              name=" Price"
              variant="outlined"
              style={{ width: 500, marginBottom: 5 }}
            />
            <Field
              component={TextField}
              type=" Time Duration"
              label=" Time Duration"
              name=" Time Duration "
              variant="outlined"
              style={{ width: 500, marginBottom: 5 }}
            />

            {isSubmitting && <LinearProgress />}
            <br />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Grid>
  );
}
