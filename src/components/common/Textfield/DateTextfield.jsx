import React, { useEffect, useState } from "react";
import { Box, InputLabel, MenuItem, TextField } from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import { format } from "date-fns";
import { DesktopDatePicker } from "@mui/x-date-pickers";
const CreateDateFields = ({ fields , onChange, formField}) => {
useEffect(() => {
  fields.forEach((field) => {
    if (!formField.hasOwnProperty(field.name)) {
      onChange(field.name, null);
    }
  });
}, []);

const handleDateChange = (fieldName, selectedDate) => {
    if (selectedDate) {
      // Format the selected date to display only the date part
      const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD');

      // Update the state with the formatted date
      onChange(fieldName, formattedDate);
    } else {
      // Handle the case when no date is selected
      onChange(fieldName, null);
    }
  };
  return (
    <>
      {fields.map((field) => {
        // if (!formField.hasOwnProperty(field.name)) {
        //     onChange(field.name, '')
        // //   setFormField((prev) => ({ ...prev, [field.name]: "" }));
        // }
        return (
          <Box key={field.name} mb={2}>
            <InputLabel sx={{ color: "black", marginBottom: 1 }}>
              {field.label}
            </InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                    value={formField[field.name] || null}
                    minDate={dayjs()}
                    onChange={(selectedDate) => handleDateChange(field.name, selectedDate)}
                    renderInput={(params) => <TextField {...params} />}
                    slotProps={{ textField: { fullWidth: true } }}
                />
            </LocalizationProvider>
          </Box>
        );
      })}
    </>
  );
};

export default CreateDateFields;