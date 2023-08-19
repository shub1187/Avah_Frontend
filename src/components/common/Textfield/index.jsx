import React, { useEffect, useState } from "react";
import { Box, InputLabel, MenuItem, TextField } from "@mui/material";

const CreateTextFields = ({ fields , onChange, formField}) => {
//   const [formField, setFormField] = useState({});

//   const handleChange = (fieldName, value) => {
//     setFormField((prev) => ({ ...prev, [fieldName]: value }));
//   };
useEffect(() => {
  fields.forEach((field) => {
    if (!formField.hasOwnProperty(field.name)) {
      onChange(field.name, '');
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
            <TextField
            //   size="small"
              fullWidth
              value={formField[field.name] || ""}
              onChange={(e) => onChange(field.name, e.target.value)}
              rows={field.row}
              multiline
              type={field.type}
              select={field.select}
            >
              {field.selectArray && field.selectArray.map((textfield)=>{
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

// import { Box, InputLabel, TextField } from "@mui/material"

// const createTextfield = (arr)=>{
    
// <>
//     {arr.map((field)=>{

//     if(!formField.hasOwnProperty(field.name)){
//     setFormField((prev)=>({...prev,[field.name]:""}))
//     }
//     return(
//         <Box mb={2}>
//         <InputLabel sx={{color:"black",marginBottom:1}}>{field.label}</InputLabel>
//         <TextField
//         size='small'
//         key={field.name}
//         fullWidth={field.fullWidth}
        // label={field.label}
//         value={formField[field.name] || ""}
//         onChange={(e)=>handleChange(field.name,e.target.value)}
//         />
//         </Box>
//     )})}
// </>
// }
// export default createTextfield