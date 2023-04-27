import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EditFormStep1 = ({ formData, updateFormData }) => {
  const [editMode, setEditMode] = useState(true);

  const formik = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({
      // define validation rules for each field
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      // add validation rules for other fields here
    }),
    onSubmit: (values) => {
      setEditMode(false);
      updateFormData(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
      </div>
      {/* add other form fields here */}
      <div>
        <button type="submit">Save</button>
        <button type="button" onClick={() => setEditMode(false)}>Cancel</button>
      </div>
    </form>
  );
};

export default EditFormStep1;
