import React, { useState } from "react";
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Select,
  MenuItem,
  Autocomplete,
  FormControl,
  InputLabel,
  FormLabel,
} from "@mui/material";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    textInput: "",
    checkboxOptions: {
      callOfDuty: false,
      redDeadRedemption: false,
      assassinsCreed: false,
    },
    radioOption: "",
    selectOption: "",
    autoCompleteOption: "",
  });

  const options = ["Asia", "Europe", "South Africa"];

  // Handle change for text, radio, and select inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle change specifically for checkboxes
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      checkboxOptions: {
        ...prevData.checkboxOptions,
        [name]: checked,
      },
    }));
  };

  const handleAutoCompleteChange = (event, value) => {
    setFormData((prevData) => ({
      ...prevData,
      autoCompleteOption: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Perform further actions like form submission to an API
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        margin: "auto",
        mt: 5,
        padding: "120px",
      }}
      onSubmit={handleSubmit}
    >
      {/* Text Field */}
      <TextField
        label="Enter your name"
        variant="outlined"
        name="textInput"
        value={formData.textInput}
        onChange={handleChange}
      />

      {/* Checkboxes */}
      <FormControl component="fieldset">
        <FormLabel component="legend">
          Which type of game do you like?
        </FormLabel>
        <FormControlLabel
          control={
            <Checkbox
              name="callOfDuty"
              checked={formData.checkboxOptions.callOfDuty}
              onChange={handleCheckboxChange}
            />
          }
          label="Call of Duty"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="redDeadRedemption"
              checked={formData.checkboxOptions.redDeadRedemption}
              onChange={handleCheckboxChange}
            />
          }
          label="Red Dead Redemption 2"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="assassinsCreed"
              checked={formData.checkboxOptions.assassinsCreed}
              onChange={handleCheckboxChange}
            />
          }
          label="Assassin's Creed"
        />
      </FormControl>

      {/* Radio Buttons */}
      <FormControl component="fieldset">
        <FormLabel component="legend">
          Which type of medium do you use?
        </FormLabel>
        <RadioGroup
          name="radioOption"
          value={formData.radioOption}
          onChange={handleChange}
          row
        >
          <FormControlLabel value="laptop" control={<Radio />} label="Laptop" />
          <FormControlLabel
            value="playStation"
            control={<Radio />}
            label="PlayStation"
          />
          <FormControlLabel value="xbox" control={<Radio />} label="Xbox" />
        </RadioGroup>
      </FormControl>

      {/* Select Button */}
      <FormControl fullWidth>
        <InputLabel>Where are you from?</InputLabel>
        <Select
          name="selectOption"
          value={formData.selectOption}
          onChange={handleChange}
          label="Select an Option"
        >
          <MenuItem value="option1">Bangladesh</MenuItem>
          <MenuItem value="option2">India</MenuItem>
          <MenuItem value="option3">Pakistan</MenuItem>
        </Select>
      </FormControl>

      {/* Autocomplete */}
      <Autocomplete
        options={options}
        value={formData.autoCompleteOption}
        onChange={handleAutoCompleteChange}
        renderInput={(params) => (
          <TextField {...params} label="Search for region" />
        )}
      />

      {/* Submit Button */}
      <Button type="submit" variant="contained" href="/">
        Submit
      </Button>
    </Box>
  );
}

export default RegistrationForm;
