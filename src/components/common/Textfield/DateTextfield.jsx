import React, { useEffect, useState } from "react";
import { Box, InputLabel, MenuItem, TextField } from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import { format } from "date-fns";
const CreateDateFields = ({ fields , onChange, formField}) => {
    // const [value, setValue] = React.useState(null);
    // console.log(value)
    // return (
    //   <LocalizationProvider dateAdapter={AdapterDayjs}>
    //     <DemoContainer components={['DatePicker']}>
    //       <DatePicker value={value} onChange={d => setValue(format(d.$d,'dd-MM-yyyy'))} />
    //     </DemoContainer>
    //   </LocalizationProvider>
    // );
// //   const [formField, setFormField] = useState({});
// //   const handleChange = (fieldName, value) => {
// //     setFormField((prev) => ({ ...prev, [fieldName]: value }));
// //   };
useEffect(() => {
  fields.forEach((field) => {
    if (!formField.hasOwnProperty(field.name)) {
      onChange(field.name, null);
    }
  });
}, []);
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
                <DemoContainer components={['DatePicker']}>
                <DatePicker  value={formField[field.name] || null} onChange={(e) =>onChange(field.name,format(e.$d,'dd-MM-yyyy'))} slotProps={{ textField: { variant: 'outlined' } }}/>
                </DemoContainer>
            </LocalizationProvider>
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']} >
                <DatePicker 
                    label={field.label}               
                    value={formField[field.name] || null}
                    onChange={(e) => onChange(field.name, e.target.value)}/>
                </DemoContainer>
            </LocalizationProvider> */}
          </Box>
        );
      })}
    </>
  );
};

export default CreateDateFields;