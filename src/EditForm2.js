import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, TextField } from '@material-ui/core';
import * as Yup from 'yup';

const EditForm = ({ formData, updateFormData }) => {
  const initialValues = {
    name: formData.name,
    email: formData.email,
    password: formData.password,
    address: formData.address,
    city: formData.city,
    state: formData.state,
    ccNumber: formData.ccNumber,
    expirationDate: formData.expirationDate,
    cvv: formData.cvv,
    education: formData.education,
    experience: formData.experience,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    ccNumber: Yup.string()
      .required('Credit card number is required')
      .test('is-valid-length', 'Credit card number must have between 13 and 16 digits', (value) => {
        return value.length >= 13 && value.length <= 16;
      }),
    expirationDate: Yup.string().required('Expiration date is required'),
    cvv: Yup.string().required('CVV is required'),
    education: Yup.array().of(
      Yup.object().shape({
        courseName: Yup.string().required('Course Name is required'),
        university: Yup.string().required('University is required'),
        percentage: Yup.string().required('Percentage is required'),
        passingYear: Yup.string().required('Passing Year is required').matches(/^\d{4}$/, 'Passing Year must be in YYYY format')
      })
    ).default(() => []),
    experience: Yup.array().of(
      Yup.object().shape({
        company: Yup.string().required("Required"),
        designation: Yup.string().required("Required"),
        joiningDate: Yup.string().required("Required"),
        leavingDate: Yup.string().required("Required"),
      })
    ).default(() => []),
  });

  const handleSubmit = (values) => {
    updateFormData(values);
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '2rem' }}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <Form>
            <Field name="name" label="Name" as={TextField} error={touched.name && Boolean(errors.name)} helperText={touched.name && errors.name} fullWidth />
            <Field name="email" label="Email" as={TextField} error={touched.email && Boolean(errors.email)} helperText={touched.email && errors.email} fullWidth />
            <Field name="password" label="password" as={TextField} error={touched.password && Boolean(errors.password)} helperText={touched.password && errors.password} fullWidth />
            <Field name="address" label="address" as={TextField} error={touched.address && Boolean(errors.address)} helperText={touched.address && errors.address} fullWidth />
            <Field name="city" label="city" as={TextField} error={touched.city && Boolean(errors.city)} helperText={touched.city && errors.city} fullWidth />
            <Field name="state" label="state" as={TextField} error={touched.state && Boolean(errors.state)} helperText={touched.state && errors.state} fullWidth />
            <Field name="ccNumber" label="ccNumber" as={TextField} error={touched.ccNumber && Boolean(errors.ccNumber)} helperText={touched.ccNumber && errors.ccNumber} fullWidth />
            <Field name="expirationDate" label="expirationDate" as={TextField} error={touched.expirationDate && Boolean(errors.expirationDate)} helperText={touched.expirationDate && errors.expirationDate} fullWidth />
            <Field name="cvv" label="cvv" as={TextField} error={touched.cvv && Boolean(errors.cvv)} helperText={touched.cvv && errors.cvv} fullWidth />
            <Field name="education" label="education" as={TextField} error={touched.education && Boolean(errors.education)} helperText={touched.education && errors.education} fullWidth />
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
              Save Changes
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditForm;
