import { useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { TextField, Button } from '@material-ui/core';

const EditForm = ({ formData, onSave, onCancel }) => {
  // const [name, setName] = useState(formData.name);
  // const [email, setEmail] = useState(formData.email);
  // const [address, setAddress] = useState(formData.address);
  // const [city, setCity] = useState(formData.city);
  // const [state, setState] = useState(formData.state);
  // const [bank, setBank] = useState(formData.bank);
  // const [accountNumber, setAccountNumber] = useState(formData.accountNumber);
  // const [ifsc, setIfsc] = useState(formData.ifsc);
  // const [education, setEducation] = useState(formData.education || []);
  // const [experience, setExperience] = useState(formData.experience || []);

  const handleSave = () => {
    onSave({ ...formData, name, email, address, city, state, bank, accountNumber, ifsc ,education, experience});
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    bank: Yup.string().required('Bank is required'),
    accountNumber: Yup.string().required('Account Number is required'),
    ifsc: Yup.string().required('IFSC is required'),
    education: Yup.array().of(
      Yup.object().shape({
        courseName: Yup.string().required('Course Name is required'),
        university: Yup.string().required('University is required'),
        percentage: Yup.string().required('Percentage is required'),
        passingYear: Yup.string().required('Passing Year is required'),
      })
    ),
    experience: Yup.array().of(
      Yup.object().shape({
        company: Yup.string().required('Company is required'),
        designation: Yup.string().required('Designation is required'),
        joiningDate: Yup.string().required('Joining Date is required'),
        leavingDate: Yup.string().required('Leaving Date is required'),
      })
    ),
  });

  return (
    <>
     <div style={{ backgroundColor: 'white', padding: '2rem' ,maxHeight: '500px',overflowY: 'auto',width:'600px',margin:'auto',top:'50px',position:'relative'}}>
     <Formik
        initialValues={{
            name: formData.name || '',
            email: formData.email || '',
            address: formData.address || '',
            city: formData.city || '',
            state: formData.state || '',
            bank: formData.bank || '',
            accountNumber: formData.accountNumber || '',
            ifsc: formData.ifsc || '',
            education: formData.education || [],
            experience: formData.experience || [],
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            onSave(values);
          }}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <Form>
          <Field
            name="name"
            label="name"
            as={TextField}
            fullWidth
            value={values.name || ''}
            onChange={handleChange}
          />
          {errors.name && touched.name && <div className="error">{errors.name}</div>}
          <Field
            name="email"
            label="email"
            as={TextField}
            fullWidth
            value={values.email || ''}
            onChange={handleChange}
          />
          {errors.email && touched.email && (
            <div className="error">{errors.email}</div>
          )}
          <Field
            name="address"
            label="address"
            as={TextField}
            fullWidth
            value={values.address || ''}
            onChange={handleChange}
          />
          {errors.address && touched.address && <div className="error">{errors.address}</div>}
          <Field
            name="city"
            label="city"
            as={TextField}
            fullWidth
            value={values.city || ''}
            onChange={handleChange}
          />
          {errors.city && touched.city && <div className="error">{errors.city}</div>}
          
          <Field
            name="bank"
            label="Bank"
            as={TextField}
            fullWidth
            value={values.bank || ''}
            onChange={handleChange}
          />
          {errors.bank && touched.bank && <div className="error">{errors.bank}</div>}
          <Field
            name="accountNumber"
            label="Account number"
            as={TextField}
            fullWidth
            value={values.accountNumber || ''}
            onChange={handleChange}
          />
          {errors.accountNumber && touched.accountNumber && (
            <div className="error">{errors.accountNumber}</div>
          )}
          <Field
            name="ifsc"
            label="IFSC code"
            as={TextField}
            fullWidth
            value={values.ifsc || ''}
            onChange={handleChange}
          />
          {errors.ifsc && touched.ifsc && <div className="error">{errors.ifsc}</div>}
          <FieldArray name="education">
            {({ insert, remove, push }) => (
              <div>
                {values.education.length > 0 &&
                  values.education.map((education, index) => (
                    <div key={index}>
                      <div>
                        <label htmlFor={`education.${index}.courseName`}>Course Name</label>
                        <Field name={`education.${index}.courseName`} type="text" />
                        {errors.education && errors.education[index] && errors.education[index].courseName && touched.education && touched.education[index] && touched.education[index].courseName && (
                          <div>{errors.education[index].courseName}</div>
                        )}
                      </div>
                      <div>
                        <label htmlFor={`education.${index}.university`}>University</label>
                        <Field name={`education.${index}.university`} type="text" />
                        {errors.education && errors.education[index] && errors.education[index].university && touched.education && touched.education[index] && touched.education[index].university && (
                          <div>{errors.education[index].university}</div>
                        )}
                      </div>
                      <div>
                        <label htmlFor={`education.${index}.percentage`}>Percentage</label>
                        <Field name={`education.${index}.percentage`} type="text" />
                        {errors.education && errors.education[index] && errors.education[index].percentage && touched.education && touched.education[index] && touched.education[index].percentage && (
                          <div>{errors.education[index].percentage}</div>
                        )}
                      </div>
                      <div>
                        <label htmlFor={`education.${index}.passingYear`}>Passing Year</label>
                        <Field name={`education.${index}.passingYear`} type="text" />
                        {errors.education && errors.education[index] && errors.education[index].passingYear && touched.education && touched.education[index] && touched.education[index].passingYear && (
                          <div>{errors.education[index].passingYear}</div>
                        )}
                      </div>
                      <div>
                        <button type="button" onClick={() => remove(index)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                <div>
                  <button type="button" onClick={() => push({ courseName: '', university: '', percentage: '', passingYear: '' })}>
                    Add Education
                  </button>
                </div>
              </div>
            )}
          </FieldArray>
          <FieldArray name="experience">
            {({ insert, remove, push }) => (
              <div>
                {values.experience.length > 0 &&
                  values.experience.map((experience, index) => (
                    <div key={index}>
                      <div>
                        <label htmlFor={`experience.${index}.company`}>company</label>
                        <Field name={`experience.${index}.company`} type="text" />
                        {errors.experience && errors.experience[index] && errors.experience[index].company && touched.experience && touched.experience[index] && touched.experience[index].company && (
                          <div>{errors.experience[index].company}</div>
                        )}
                      </div>
                      <div>
                        <label htmlFor={`experience.${index}.designation`}>Course Name</label>
                        <Field name={`experience.${index}.designation`} type="text" />
                        {errors.experience && errors.experience[index] && errors.experience[index].designation && touched.experience && touched.experience[index] && touched.experience[index].designation && (
                          <div>{errors.experience[index].designation}</div>
                        )}
                      </div>
                      <div>
                        <label htmlFor={`experience.${index}.joiningDate`}>Course Name</label>
                        <Field name={`experience.${index}.joiningDate`} type="text" />
                        {errors.experience && errors.experience[index] && errors.experience[index].joiningDate && touched.experience && touched.experience[index] && touched.experience[index].joiningDate && (
                          <div>{errors.experience[index].joiningDate}</div>
                        )}
                      </div>
                      <div>
                        <label htmlFor={`experience.${index}.leavingDate`}>Course Name</label>
                        <Field name={`experience.${index}.leavingDate`} type="text" />
                        {errors.experience && errors.experience[index] && errors.experience[index].leavingDate && touched.experience && touched.experience[index] && touched.experience[index].leavingDate && (
                          <div>{errors.experience[index].leavingDate}</div>
                        )}
                      </div>
                      <div>
                        <button type="button" onClick={() => remove(index)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                <div>
                  <button type="button" onClick={() => push({ company: '', designation: '', joiningDate: '', leavingDate: '' })}>
                    Add Experience
                  </button>
                </div>
              </div>
            )}
          </FieldArray>
          <Button onClick={prev}>Back</Button>
          <Button type="submit" disabled={isSubmitting || !isValid}>
            Next
          </Button>
        </Form>
        )}
      </Formik>
      <div>
      <Button onClick={handleSave}>Save</Button>
      <Button onClick={onCancel}>Cancel</Button>
      </div>
      
      </div>
    </>
  );
};

export default EditForm;
