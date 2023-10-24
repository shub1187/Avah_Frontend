import React, { useEffect, useState } from "react";
import { Box, InputLabel, MenuItem, TextField,Autocomplete } from "@mui/material";
export default function CreateAutoCompleteTextfield({options,label,onSelect,whiteColor,height}) {
    useEffect(() => {
        onSelect(""); // Initialize with an empty string
      }, []);
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options || []}
        // onFocus={(e) => {
        //     e.target.parentElement.style.marginTop = "-8px"; // Adjust margin when focused
        //   }}
        // style={{maxHeight:'50px'}}
        sx={{ width: 250,backgroundColor:whiteColor || 'rgb(145,54,93)',color:whiteColor ?'black':'white',borderRadius:1 , "& .MuiInputLabel-root": {
            // Override the label styles to remove shrink effect
            // transform: "none", // Remove shrink effect
            // color: "white", // Label text color
          },
        //     "& .MuiInputLabel-root": {
        //     display: "none", // Hide the label
        //   },
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
            onSelect(newValue ? newValue.label : ""); // Pass the selected city as a string
          }}
      />
    );
  }


// const CreateDateFields = ({ fields , onChange, formField}) => {
// useEffect(() => {
//   fields.forEach((field) => {
//     if (!formField.hasOwnProperty(field.name)) {
//       onChange(field.name, null);
//     }
//   });
// }, []);

// const handleDateChange = (fieldName, selectedDate) => {
//     if (selectedDate) {
//       // Format the selected date to display only the date part
//       const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD');

//       // Update the state with the formatted date
//       onChange(fieldName, formattedDate);
//     } else {
//       // Handle the case when no date is selected
//       onChange(fieldName, null);
//     }
//   };
//   return (
//     <>
//       {fields.map((field) => {
//         // if (!formField.hasOwnProperty(field.name)) {
//         //     onChange(field.name, '')
//         // //   setFormField((prev) => ({ ...prev, [field.name]: "" }));
//         // }
//         return (
//           <Box key={field.name} mb={2}>
//             <InputLabel sx={{ color: "black", marginBottom: 1 }}>
//               {field.label}
//             </InputLabel>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <DesktopDatePicker
//                     value={formField[field.name] || null}
//                     minDate={dayjs()}
//                     onChange={(selectedDate) => handleDateChange(field.name, selectedDate)}
//                     renderInput={(params) => <TextField {...params} />}
//                     slotProps={{ textField: { fullWidth: true } }}
//                 />
//             </LocalizationProvider>
//           </Box>
//         );
//       })}
//     </>
//   );
// };
// ;