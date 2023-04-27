import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  IconButton,
  Box,
} from "@material-ui/core";
import { Add as AddIcon, Remove as RemoveIcon } from "@material-ui/icons";

const ExperienceForm = () => {
  const [experiences, setExperiences] = useState([{ company: "", designation: "" ,joiningDate:"", leavingDate:"" }]);

  const handleAddExperience = () => {
    setExperiences([...experiences, { company: "", designation: "" ,joiningDate:"", leavingDate:"" }]);
  };

  const handleRemoveExperience = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  const handleChangeExperience = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = value;
    setExperiences(updatedExperiences);
  };

  return (
    <Box mt={2}>
      <Grid container spacing={3}>
        {experiences.map((experience, index) => (
          <React.Fragment key={index}>
            <Grid item xs={3}>
              <TextField
                label="Company"
                variant="outlined"
                fullWidth
                value={experience.company}
                onChange={(e) =>
                  handleChangeExperience(index, "company", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Designation"
                variant="outlined"
                fullWidth
                value={experience.designation}
                onChange={(e) =>
                  handleChangeExperience(index, "designation", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                label="joining date"
                variant="outlined"
                fullWidth
                value={experience.joiningDate}
                onChange={(e) =>
                  handleChangeExperience(index, "joiningDate", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                label="leaving Date"
                variant="outlined"
                fullWidth
                value={experience.leavingDate}
                onChange={(e) =>
                  handleChangeExperience(index, "leavingDate", e.target.value)
                }
              />
            </Grid>
            {experiences.length > 1 && (
              <Grid item xs={1}>
                <IconButton onClick={() => handleRemoveExperience(index)}>
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
            onClick={handleAddExperience}
          >
            Add Experience
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExperienceForm;
