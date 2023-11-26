import React, { useEffect, useState } from "react";
import { Box, IconButton, InputAdornment, InputLabel, MenuItem, TextField, Tooltip } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PercentIcon from '@mui/icons-material/Percent';

const CreateTextFields = ({ fields , onChange, formField,isSubmitted , onSearchIconClick}) => {
//   const [formField, setFormField] = useState({});

//   const handleChange = (fieldName, value) => {
//     setFormField((prev) => ({ ...prev, [fieldName]: value }));
//   };

useEffect(() => {
  fields.forEach((field) => {
    if (!formField.hasOwnProperty(field.name)) {
      console.log(field.defaultValue)
      if(field.defaultValue || field.defaultValue===0){
        console.log('entered')
        onChange(field.name, field.defaultValue);
      }
      else{
        onChange(field.name, '');
      }
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
        const isError = isSubmitted && field.required && !formField[field.name];
        return (
          <Box key={field.name} mb={2}>
            <InputLabel sx={{ color: "black", marginBottom: 1 }}>
              {field.label}
              {
                field.tooltip && (
                  <Tooltip title={field.tooltipMessage ? field.tooltipMessage : ''}>
                    <IconButton size="small">
                      <QuestionMarkIcon sx={{fontSize:16}}/>
                    </IconButton>
                  </Tooltip>
                )
              }

            </InputLabel>
            <TextField
            //   size="small"
              fullWidth
              // value={field.defaultValue }
              onChange={(e) => onChange(field.name, e.target.value)}
              rows={field.row}
              multiline={field.multiine}
              type={field.type}
              select={field.select}
              disabled={field.disabled}
              size={'small'}
              error={isError}
              defaultValue={field.defaultValue }
              helperText={isError ? field.errormessage : ''}
              InputProps={{
                endAdornment: field.rightIcon && (
                  <InputAdornment position="end" sx={{mr:1}}>
                    {field.rightIcon ==='percentage' && (
                      <IconButton onClick={()=>onSearchIconClick(field.name)} >
                        <PercentIcon/> {/* Replace with your desired icon */}
                      </IconButton>
                    )}
                    {/* <IconButton onClick={()=>onSearchIconClick(field.name)} > */}
                      {/* <SearchIcon/> Replace with your desired icon */}
                    {/* </IconButton> */}
                  </InputAdornment>
                ),
              }}            >
              {(field.selectArray && field.selectArray.length) && field.selectArray?.map((textfield)=>{
                return(
                <MenuItem key={textfield.label} value={textfield.value}>
                  {textfield.label}
                </MenuItem>
            )})}
            </TextField>
          </Box>
        );
      })}
    </>
  );
};

export default CreateTextFields;