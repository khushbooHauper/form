import {
    TextField,
    Grid
  } from '@mui/material';
  
  const Education = (props) => {
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
            name="course"
            label="Course Name"
            variant="outlined"
            size='small'
            fullWidth
            value={formik.values.course}
            onChange={formik.handleChange}
            error={formik.touched.course && Boolean(formik.errors.course)}
            helperText={formik.touched.course && formik.errors.course}
          />
        </Grid>
        <Grid
          item
          xs={6}
        >
          <TextField
            name="university"
            label="University"
            variant="outlined"
            size="small"
            fullWidth
            value={formik.values.university}
            onChange={formik.handleChange}
            error={formik.touched.university && Boolean(formik.errors.university)}
            helperText={formik.touched.university && formik.errors.university}
          />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <TextField
            name="percentage"
            label="Percentage"
            variant="outlined"
            type="phone"
            fullWidth
            size="small"
            value={formik.values.percentage}
            onChange={formik.handleChange}
            error={formik.touched.percentage && Boolean(formik.errors.percentage)}
            helperText={formik.touched.percentage && formik.errors.percentage}
          />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <TextField
            name="passingYear"
            label="Passing Year"
            variant="outlined"
            size="small"
            fullWidth
            value={formik.values.passingYear}
            onChange={formik.handleChange}
            error={formik.touched.passingYear && Boolean(formik.errors.passingYear)}
            helperText={formik.touched.passingYear && formik.errors.passingYear}
          />
        </Grid>
      </Grid>
    )
  }
  
  export default Education