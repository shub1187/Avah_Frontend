import { Box, Button, createTheme,TableCell,TableHead,TableRow,ThemeProvider, useMediaQuery } from "@mui/material";
import axios from "axios";
import MaterialTable, { MTableToolbar } from "material-table";
import './ServiceProviderTable.css'
import { createRef, useState } from "react";
import CreateCustomerDialog from "../Dialog/Users/createCustomerDialog";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import ActionDialog from "../../common/Dialog/ActionDialog";
import DialogWrapper from "components/common/Dialog/DialogWrapper";

const ServiceProvidertable = ({DialogButton,columnss,URL,key, title, buttonName, clickButton})=>{
  const tableRef = createRef();
  const token = localStorage.getItem('access_tokenSP'); // Retrieve the token from local storage
  const sp_id = localStorage.getItem('sp_id'); // Retrieve the token from local storage
  
  const isMobileResolution = useMediaQuery((theme) =>
  theme.breakpoints.down('sm')
  );
  const theme = createTheme({
    palette:{
      addUser:{
        main:'#000000',
        contrastText:"#ffffff"
      },
      options:{
        main:'#ad4970',
        contrastText:"#ffffff"

      }
    },
      components:{
        MuiToolbar:{
          styleOverrides:{
            // root:{
            //   backgroundColor:"rgb(244, 248, 249)"
            // }
          }
        },
        MuiTablePagination:{
          styleOverrides:{
            root:{
              display:"flex",
              alignItems:"center",
              marginTop:"5px",
              '& .MuiTablePagination-selectLabel':{
                marginBottom:0
              },
              '& .MuiTablePagination-displayedRows':{
                marginBottom:0
              }
            }
          }
        },
        MuiTextField:{
          styleOverrides:{
            root:{
              '& .MuiOutlinedInput-root': {
                // '& fieldset': {
                //   borderColor: 'white',
                // },
                // '&:hover fieldset': {
                //   borderColor: 'white',
                // },
                '&.Mui-focused fieldset': {
                  borderColor: 'rgb(173,73,112)',
                },
              },
            }
          },
        },
      },
    })
    // For future refernce just to cross check 
  const columns = [
    { title: "Athlete", field: "athlete" },
    { title: "Age", field: "age" },
    { title: "Country", field: "country",render:(rowData)=>{return rowData.country=="Russia" ||rowData.country=="Australia" || rowData.country=="Canada"?<div style={{color:'green'}}>{rowData.country}</div>:<div style={{color:'red'}}>{rowData.country}</div>} },
    { title: "Year", field: "year" ,render:(rowData)=><Box display={'flex'}><Button variant="outlined" color="success">Enter</Button><Button variant="outlined" color="error">Reject</Button></Box>},
    { title: "Date", field: 'date' ,render:(rowData)=><CreateCustomerDialog color={'options'}/>},
    { title: "Sport", field: 'sport' },
    { title: "Gold", field: 'gold' },
    { title: "Silver", field: 'silver' },
    { title: "Bronze", field: 'bronze' },
    { title: "Total", field: 'total' ,render:(rowData)=><Box display={'flex'}><SentimentVeryDissatisfiedIcon/></Box>},
    { title :"Action", field:'action',render:(rowData)=><ActionDialog status edit view changePassword/>}
  ]
  // put your mock and test here
  // const mock = {
  //   "results": [
  //       {
  //           "appointment_id": 10,
  //           "name": "shadab shaikh",
  //           "vehicle_number": "GJ85UU9988",
  //           "vehicle_type": "Commercial",
  //           "brand": "Maruti Suzuki",
  //           "model": "Swift",
  //           "customization": "Showroom Fitted",
  //           "fuel_type": "Electric",
  //           "email": "shadab@gmail.com",
  //           "mobile_number": "000025418",
  //           "pickup_drop": "Self Drive",
  //           "pickup_address": null,
  //           "appointment_date": "2023-10-23T18:30:00.000Z",
  //           "appointment_time": "11am",
  //           "appointment_status": "Approved",
  //           "estimate_status": "pending"
  //       },
  //       {
  //           "appointment_id": 3,
  //           "name": "Sakshi Patil",
  //           "vehicle_number": "MH43AB3133",
  //           "vehicle_type": "personal",
  //           "brand": "Maruti Suzuki",
  //           "model": "Swift",
  //           "customization": "Showroom Fitted",
  //           "fuel_type": "Diesel",
  //           "email": "sakshi@gmailcom",
  //           "mobile_number": "7755663322",
  //           "pickup_drop": "Company Executive",
  //           "pickup_address": "Flat No.-02 Sawan Mansion Plot no-27 Kopar Khairane Navi Mumbai",
  //           "appointment_date": "2023-08-19T18:30:00.000Z",
  //           "appointment_time": "11am",
  //           "appointment_status": "Pending",
  //           "estimate_status": "pending"
  //       }
  //   ],
  // }

  return(
    <>
    <ThemeProvider theme={theme}>
    <MaterialTable
    tableRef={tableRef}
    title=""
    columns={columnss}
    cellEditable={{
      cellStyle: {},
      onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
          return new Promise((resolve, reject) => {
              console.log('newValue: ' + newValue);
              setTimeout(resolve, 4000);
          });
      }}}
    options={{debounceInterval:700,emptyRowsWhenPaging:false,
       rowStyle: {backgroundColor: "rgb(244, 248, 249)" },
       headerStyle:{backgroundColor:'rgb(244, 248, 249)',color:"black",fontSize:"14px",fontWeight:'bold',borderBottom:'5px solid rgb(230,230,230)'},
       searchFieldStyle:{marginLeft:'-50px'},   
       showFirstLastPageButtons:false,
    }}
  // page={page}
  // totalCount={count}
    components={{
      Toolbar: (props) => (
        <>
        <Box display={'flex'} justifyContent={'space-between'} sx={{background: "rgb(244, 248, 249)"}}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              background: "rgb(244, 248, 249)",
              height: "65px",
              width:'575px',
              marginBottom:4
            }}
          >
                {props.searchField}
            <MTableToolbar {...props} />
          </div>
          <div>
            {DialogButton && <DialogWrapper tableRef={tableRef} title={title} buttonName={buttonName}><DialogButton height={isMobileResolution?"30px":'50px'} width={isMobileResolution?"100px":'250px'} color={'options'} /></DialogWrapper>}
            {clickButton && <Button variant="contained" color="options" onClick={clickButton}>{buttonName}</Button>}
          </div>
        </Box>
        </>
      ),
    }}
    isLoading={false}
    key={key || 'default'}
    // data={mock.results}
    data={async (query) => {
      try {
        let url = `${URL}?sp_id=${sp_id}&`;

        if(query.search){
          url+=`q=${query.search}`
        }
        if(query.orderBy){
          url+=`&_sort=${query.orderBy.field}&_order=${query.orderDirection}`
        }
        url+=`&_page=${query.page+1}`
        url+=`&_limit=${query.pageSize}`
        const headers = { Authorization: `Bearer ${token}` }; // Include the token in headers
        const response = await axios.get(url,{headers});
        const data = response?.data?.data?.results; // Adjust this based on your API response structure
        return {
          data: data || [], // Change this to match your data structure
          page: query.page,
          totalCount:20, // Assuming the total count is the length of the data array
        };
      } catch (error) {
        console.error("Error fetching data:", error);
        return {
          data: [],
          page: query.page,
          totalCount: 0,
        };
      }
    }}
    // actions={[
    //   {
    //     icon: 'refresh',
    //     tooltip: 'Refresh Data',
    //     isFreeAction: true,
    //     onClick: () => tableRef.current && tableRef.current.onQueryChange(),
    //   }
    // ]}
  />
  </ThemeProvider>
  </>
  )
}

export default ServiceProvidertable