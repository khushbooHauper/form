import { configureStore } from '@reduxjs/toolkit';
import multiStepFormReducer from './MultiStepFormSlice';

const store = configureStore({
  reducer: {
    form: multiStepFormReducer,
  },
  initialState: {
    form: {
      ...multiStepFormReducer.initialState,
    },
  },
});

export default store;
