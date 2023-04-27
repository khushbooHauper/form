import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  FormHelperText,
  Button
} from '@mui/material';
import PersonalInfo from './PersonalInfo';
import AccountDetails from './AccountDetails';
import ReviewInfo from './ReviewInfo';
import Banking from './Banking';
import Education from './Education';
import Experience from './Experience';

const steps = ['Personal Information', ' Banking Details','Education','Experience'];

const Form = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [data, setData] = useState()
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      lastName: '',
      phone: '',
      residence: '',
      bank: '',
      accountNumber: '',
      ifsc: '',
      branch: '',
      course: '',
      university: '',
      percentage: '',
      passingYear: '',
      company: '',
      position: '',
      joinDate:null,
      endDate:null,
    },
    validationSchema : Yup.object().shape({
      email: Yup.string()
        .required('Email is required')
        .email('Invalid email'),
        password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords do not match')
        .min(8, 'Password must be at least 8 characters')
        .required('Confirm password is required'),
      name: Yup.string().required('First Name is required'),
      
      phone: Yup.string()
        .required('Phone is required'),
      residence: Yup.string()
        .required('Residence is required'),
      bank: Yup.string()
        .required('Bank is required'),
      accountNumber: Yup.string()
        .required('Account number is required'),
      ifsc: Yup.string()
        .required('IFSC code is required'),
      branch: Yup.string()
        .required('Branch is required'),
      course: Yup.string()
        .required('Course is required'),
      university: Yup.string()
        .required('University is required'),
      percentage: Yup.number()
        .required('Percentage is required')
        .min(0, 'Percentage cannot be negative')
        .max(100, 'Percentage cannot be greater than 100'),
      passingYear: Yup.number()
        .required('Passing year is required')
        .min(1900, 'Invalid year'),
      company: Yup.string()
        .required('Company is required'),
      position: Yup.string()
        .required('Position is required'),
        joinDate: Yup.date().required('Join Date is required'),
        endDate: Yup.date()
          .nullable()
          .when('joinDate', (joinDate, schema) => {
            return joinDate
              ? schema.min(joinDate, 'End Date must be after Join Date')
              : schema;
          })
          .required('End Date is required'),
            }),
    onSubmit: (values) => {
      if (activeStep === steps.length - 1) {
        const formData = {
          
          PersonalInfo: {
            name: values.name,
            email: values.email,
            phone: values.phone,
            residence: values.residence,
            password: values.password,
            confirmPassword: values.confirmPassword,
          },
          BankDetails: {
            bank: values.bank,
            accountNumber: values.accountNumber,
            ifsc: values.ifsc,
            branch: values.branch,
          },
          EducationInfo: {
            course: values.course,
            university: values.university,
            percentage: values.percentage,
            passingYear: values.passingYear,
          },
          ExperienceInfo: {
            company: values.company,
            position: values.position,
            joinDate: values.joinDate,
            endDate: values.endDate,
          },
        };
        console.log(formData);
        setData(formData)
      } else {
        setActiveStep((prevStep) => prevStep + 1);
        
      }
    }
    
  });

  const formContent = (step) => {
    switch(step) {
      case 0:
        return <PersonalInfo formik={formik} />;
      case 1:
        return <Banking formik={formik} />;
      case 2:
        return <Education formik={formik} />;
      case 3:
        return <Experience formik={formik} />;
      default:
        return <div>404: Not Found</div>
    }
  };
  
  return (
    <Box
      sx={{
        maxWidth: '1000px',
        padding: 2
      }}
    >
      <Stepper
        activeStep={activeStep}
        orientation="horizontal"
      >
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{ padding: '20px' }}
        >
          {formContent(activeStep)}
        </Grid>
        {formik.errors.submit && (
          <Grid
            item
            xs={12}
          >
            <FormHelperText error>
              {formik.errors.submit}
            </FormHelperText>
          </Grid>
        )}
        <Grid
          item
          xs={12}
        >
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button onClick={formik.handleSubmit}>
              Submit
            </Button>
          ) : (
            <Button onClick={handleNext}>
              Next
            </Button>
          ) }
        </Grid>
      </Grid>
    </Box>
  )
}

export default Form;