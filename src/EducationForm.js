import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  IconButton,
  Box,
} from "@material-ui/core";
import { Add as AddIcon, Remove as RemoveIcon } from "@material-ui/icons";

const EducationForm = () => {
  const [education, setEducation] = useState([{ courseName: "", University: "" ,Percentage:"", PassingYear:"" }]);

  const handleAddEducation = () => {
    setEducation([...education, { courseName: "", University: "" ,Percentage:"", PassingYear:"" }]);
  };

  const handleRemoveEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  const handleChangeEducation = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  return (
    <Box mt={2}>
      <Grid container spacing={3}>
        {education.map((edu, index) => (
          <React.Fragment key={index}>
            <Grid item xs={3}>
              <TextField
                label="courseName"
                variant="outlined"
                fullWidth
                value={edu.courseName}
                onChange={(e) =>
                    handleChangeEducation(index, "courseName", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="University"
                variant="outlined"
                fullWidth
                value={edu.University}
                onChange={(e) =>
                    handleChangeEducation(index, "University", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                label="Percentage"
                variant="outlined"
                fullWidth
                value={edu.Percentage}
                onChange={(e) =>
                    handleChangeEducation(index, "Percentage", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                label="PassingYear"
                variant="outlined"
                fullWidth
                value={edu.PassingYear}
                onChange={(e) =>
                    handleChangeEducation(index, "PassingYear", e.target.value)
                }
              />
            </Grid>
            {education.length > 1 && (
              <Grid item xs={1}>
                <IconButton onClick={() => handleRemoveEducation(index)}>
                  <RemoveIcon />
                </IconButton>
              </Grid>
            )}
          </React.Fragment>
        ))}
        <Grid item xs={12}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleAddEducation}
          >
            Add Experience
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EducationForm;
