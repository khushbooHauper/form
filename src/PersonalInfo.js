import {
    TextField,
    Grid
  } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setnewData} from './MultiStepFormSlice'  
  const PersonalInfo = (props) => {
    const { formik ,newformData} = props;
    const dispatch = useDispatch();
    const handleChange = (e) => {
      dispatch(setnewData({ ...newformData, [e.target.name]: e.target.value }));
    };
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
            name="name"
            label="Name"
            variant="outlined"
            size='small'
            fullWidth
            value={formik.values.name || ''}
            onChange={handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid
          item
          xs={6}
        >
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            size="small"
            fullWidth
            value={formik.values.email || ''}
            onChange={handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <TextField
            name="phone"
            label="Phone Number"
            variant="outlined"
            type="phone"
            fullWidth
            size="small"
            value={formik.values.phone || ''}
            onChange={handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <TextField
            name="residence"
            label="Residence"
            variant="outlined"
            size="small"
            fullWidth
            value={formik.values.residence || ''}
            onChange={handleChange}
            error={formik.touched.residence && Boolean(formik.errors.residence)}
            helperText={formik.touched.residence && formik.errors.residence}
          />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            size="small"
            fullWidth
            value={formik.values.password || ''}
            onChange={handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>
        <Grid
          item
          xs={12}
        >
          <TextField
            name="confirmPassword"
            label="Confirm Password"
            variant="outlined"
            size="small"
            fullWidth
            value={formik.values.confirmPassword || ''}
            onChange={formik.handleChange}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          />
        </Grid>
      </Grid>
    )
  }
  
  export default PersonalInfo