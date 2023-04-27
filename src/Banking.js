import {
    TextField,
    Grid
  } from '@mui/material';
  
  const Banking = (props) => {
    const { formik } = props;
    return (
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={6}
        >
          <TextField
            name="bank"
            label="Bank Name"
            variant="outlined"
            size='small'
            fullWidth
            value={formik.values.bank}
            onChange={formik.handleChange}
            error={formik.touched.bank && Boolean(formik.errors.bank)}
            helperText={formik.touched.bank && formik.errors.bank}
          />
        </Grid>
        <Grid
          item
          xs={6}
        >
          <TextField
            name="accountNumber"
            label="Account Number"
            variant="outlined"
            size="small"
            fullWidth
            value={formik.values.accountNumber}
            onChange={formik.handleChange}
            error={formik.touched.accountNumber && Boolean(formik.errors.accountNumber)}
            helperText={formik.touched.accountNumber && formik.errors.accountNumber}
          />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <TextField
            name="ifsc"
            label="IFSC Code"
            variant="outlined"
            type="phone"
            fullWidth
            size="small"
            value={formik.values.ifsc}
            onChange={formik.handleChange}
            error={formik.touched.ifsc && Boolean(formik.errors.ifsc)}
            helperText={formik.touched.ifsc && formik.errors.ifsc}
          />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <TextField
            name="branch"
            label="Branch"
            variant="outlined"
            size="small"
            fullWidth
            value={formik.values.branch}
            onChange={formik.handleChange}
            error={formik.touched.branch && Boolean(formik.errors.branch)}
            helperText={formik.touched.branch && formik.errors.branch}
          />
        </Grid>
      </Grid>
    )
  }
  
  export default Banking