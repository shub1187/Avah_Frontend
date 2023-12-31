import * as React from 'react';
import { useEffect } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ControlledRadioButtonsGroup({title,onChange,formField,name}) {
//   const [value, setValue] = React.useState('female');

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };
    // if (!formField.hasOwnProperty(name)) {
    //     onChange(name, '')
    // }

    useEffect(() => {
      // fields.forEach((field) => {
        if (!formField.hasOwnProperty(name)) {
          onChange(name, 'active');
        }
      // });
    }, []);
  return (
    <FormControl>
      <FormLabel color='options' id="demo-controlled-radio-buttons-group">{title}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={formField[name] || ""}
        onChange={(e) => onChange(name, e.target.value)}
        row
      >
        <FormControlLabel sx={{mr:4,color: 'rgb(12,143,9)','& .MuiSvgIcon-root': {color: 'rgb(173,73,112)',}}} color='options' value="active" control={<Radio />} label="Active" />
        <FormControlLabel   sx={{color: 'rgb(233,56,72)','& .MuiSvgIcon-root': {color: 'rgb(173,73,112)',}}} color='options' value="inActive" control={<Radio />} label="Inactive" />
      </RadioGroup>
    </FormControl>
  );
}