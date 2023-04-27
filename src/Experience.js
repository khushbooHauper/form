import {
  TextField,
  Grid
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers'
const Experience = (props) => {
  const { formik } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="company"
            label="Company"
            variant="outlined"
            size="small"
            fullWidth
            value={formik.values.company}
            onChange={formik.handleChange}
            error={formik.touched.company && Boolean(formik.errors.company)}
            helperText={formik.touched.company && formik.errors.company}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="position"
            label="Position"
            variant="outlined"
            size="small"
            fullWidth
            value={formik.values.position}
            onChange={formik.handleChange}
            error={formik.touched.position && Boolean(formik.errors.position)}
            helperText={formik.touched.position && formik.errors.position}
          />
        </Grid>
        <Grid item xs={12}>
          <DatePicker
            name="joinDate"
            label="Join Date"
            inputVariant="outlined"
            size="medium"
            fullWidth
            value={formik.values.joinDate}
            onChange={(value) => {
              formik.setFieldValue('joinDate', value);
            }}
            renderInput={(params) => <TextField {...params} />}
            error={formik.touched.joinDate && Boolean(formik.errors.joinDate)}
            helperText={formik.touched.joinDate && formik.errors.joinDate}
          />
        </Grid>
        <Grid item xs={12}>
          <DatePicker
            name="endDate"
            label="End Date"
            inputVariant="outlined"
            size="medium"
            fullWidth
            value={formik.values.endDate}
            onChange={(value) => {
              formik.setFieldValue('endDate', value);
            }}
            renderInput={(params) => <TextField {...params} />}
            error={formik.touched.endDate && Boolean(formik.errors.endDate)}
            helperText={formik.touched.endDate && formik.errors.endDate}
          />
        </Grid>
      </Grid>
    </LocalizationProvider>
  )
}

export default Experience
