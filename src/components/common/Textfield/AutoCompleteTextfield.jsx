import React, { useEffect, useState } from "react";
import { Box, InputLabel, MenuItem, TextField,Autocomplete } from "@mui/material";
export default function CreateAutoCompleteTextfield({options,label,onChange,whiteColor,height,fullWidth, autocompleteCityName,autocompleteSpName}) {

    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options || []}
        value={autocompleteCityName || autocompleteSpName}
        sx={{width:fullWidth ?'100%': 250,backgroundColor:whiteColor || 'rgb(145,54,93)',color:whiteColor ?'black':'white',borderRadius:1 ,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: whiteColor ?'':"transparent", // Remove border color
            },
            "&:hover fieldset": {
              borderColor: whiteColor ?'':"transparent", // Remove border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: whiteColor ?'':"transparent", // Remove border color when focused
            },
            "& input": {
                color: whiteColor?'black':"white", // Change font color to white
                height: height?'5px':"3px",
              },
          },}}
        renderInput={(params) => <TextField {...params} label={label}InputLabelProps={{sx: { color:whiteColor ?'black':'white',fontSize:12, top: "-0.6vh", "&.MuiInputLabel-shrink": { top: 10,color:'rgb(145,54,93)' } }}}/>}
        onChange={(event, newValue) => {
            onChange(newValue || '')
          }}
      />
    );
  }
