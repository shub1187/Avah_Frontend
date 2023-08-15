import React, { useState } from "react";
import { Box, InputLabel, TextField } from "@mui/material";

const CreateTextFields = ({ fields }) => {
  const [formField, setFormField] = useState({});

  const handleChange = (fieldName, value) => {
    setFormField((prev) => ({ ...prev, [fieldName]: value }));
  };

  return (
    <>
      {fields.map((field) => {
        if (!formField.hasOwnProperty(field.name)) {
          setFormField((prev) => ({ ...prev, [field.name]: "" }));
        }
        return (
          <Box key={field.name} mb={2}>
            <InputLabel sx={{ color: "black", marginBottom: 1 }}>
              {field.label}
            </InputLabel>
            <TextField
              size="small"
              fullWidth={field.fullWidth}
              value={formField[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
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