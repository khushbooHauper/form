import { useState } from 'react';
import { Button, Modal } from '@material-ui/core';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Step1, Step2, Step3, Step4 } from './MultiForm';
import { setCurrentStep, setFormData } from './MultiStepFormSlice';
import { useDispatch, useSelector } from 'react-redux';
import EditForm from './EditForm';

const initialValues = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  },
  bankdetails: {
    accountNumber: '',
    routingNumber: '',
  },
  Education: {
    degree: '',
    institution: '',
  },
  Experience: {
    company: '',
    position: '',
  },
};

const validationSchema = Yup.object().shape({
  personalInfo: Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    phone: Yup.string().required('Required'),
  }),
  bankdetails: Yup.object().shape({
    accountNumber: Yup.string().required('Required'),
    routingNumber: Yup.string().required('Required'),
  }),
  Education: Yup.object().shape({
    degree: Yup.string().required('Required'),
    institution: Yup.string().required('Required'),
  }),
  Experience: Yup.object().shape({
    company: Yup.string().required('Required'),
    position: Yup.string().required('Required'),
  }),
});

const FormContainer = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.form.currentStep);
  const formData = useSelector((state) => state.form.formData);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentStep(0);
  };

  const handleNext = () => {
    setCurrentStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    dispatch(setCurrentStep(1));
    dispatch(setFormData(formData));
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
            {currentStep === 0 && (
              <>
                {!editMode && <Step1 handleNext={handleNext} />}
                {editMode && (
                  <EditForm
                    formData={formData.personalInfo}
                    updateFormData={(data) =>
                      dispatch(
                        setFormData({
                          ...formData,
                          personalInfo: data,
                        })
                      )
                    }
                  />
                )}
              </>
            )}
          </div>
        );
      case 1:
        return (
          <div>
            {currentStep === 1 && (
              <>
                {!editMode && (
                  <Step2 handleNext={handleNext} handlePrev={handlePrev} />
                )}
                {editMode && (
                  <EditForm
                    formData={formData.bankdetails}
                    updateFormData={(data) =>
                      dispatch(
                        setFormData({
                          ...formData,
                          bankdetails: data,
                        })
                      )
                    }
                  />
                )}
              </>
            )}
          </div>
        );
      case 2:
        return (
          <div>
            {currentStep === 2 && (
              <>
                {!editMode && <Step3 handlePrev={handlePrev} />}
                {editMode && (
                  <EditForm
                    formData={formData.Education}
                    updateFormData={(data) =>
                      dispatch(
                        setFormData({
                          ...formData,
                          Education: data,
                        })
                      )
                    }
                  />
                )}
              </>
            )}
          </div>
        );
      case 3:
        return (
          <div>
            {currentStep === 3 && (
              <>
                {!editMode && <Step4 handlePrev={handlePrev} />}
                {editMode && (
                  <EditForm
                    formData={formData.Experience}
                    updateFormData={(data) =>
                      dispatch(
                        setFormData({
                          ...formData,
                          Experience: data,
                        })
                      )
                    }
                  />
                )}
              </>
            )}
          </div>
        );

      default:
        return null;
    }
  };
}
export default FormContainer;
