import  { useEffect, useMemo, useState } from 'react';
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { createTheme,ThemeProvider, styled } from '@mui/material';
import axios from 'axios';

    
const theme = createTheme({
    components:{
        MuiSelect:{
            styleOverrides:{
                select: {
                    backgroundColor:'rgb(244,248,249)',
                    border:'none',
                    "& fieldset": { border: 'none' },

                    ":focus": {
                    //   backgroundColor: "green", // Just for the demo
                    //   border: 'none',
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #484850",
                        borderRadius: "5px 5px 0 0"
                      },
                  },
            }
        }
    }
})

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// const names = [
//     'petrol',
//     'diesel',
//     'cng',
//     'electric'
// ];

export default function MultiSelectFuelType({fuelTypeSet}) {
  const [names,setNames] = useState([])
  // UseEffect to load the data in multiselect
// const [data, setData] = useState([]);
// console.log("ln 28 Shub Manufacture page",data)
useEffect(() => {
  const apiCall = async () => {
    try {
      // Get the bearer token from local storage
      const token = localStorage.getItem('access_token');     
      // Set up the headers with the authorization token
      const headers = {
        Authorization: `Bearer ${token}`,
      };
        const params = {
          page: 1,
          limit: 10,
        }    
      // Make the GET request with the headers
      const response = await axios.get("http://localhost:3008/api/admin/getAllFuelTypes", { headers,params });
      // console.log("ln 44",response)
      const responseData = response.data.data.results; // Access data from the response object
      console.log("ln Multiselect page",responseData);
      const resultArray= responseData.map(item => item.fuel_name);
    console.log("This is checking",resultArray)
      // setData(responseData);
      setNames( resultArray)
    } catch (error) {
      console.log(error);
    }
  };
  apiCall();
}, []);


  const [personName, setPersonName] = React.useState([]);
  console.log(personName)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    fuelTypeSet(value)
  };

  return (
    <div>
        <ThemeProvider theme={theme}>

      <FormControl sx={{ m: 1,width:'100%' }}>
        <InputLabel id="demo-multiple-checkbox-label">Select Fuel Type</InputLabel>
        <Select
          fullWidth
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </ThemeProvider>

    </div>
  );
}