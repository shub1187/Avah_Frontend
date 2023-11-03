import { Box, Button, createTheme,TableCell,TableHead,TableRow,ThemeProvider, useMediaQuery } from "@mui/material";
import axios from "axios";
import MaterialTable, { MTableToolbar } from "material-table";
import './CustomerTable.css'
import { useState } from "react";
import DialogWrapper from "components/common/Dialog/DialogWrapper";
// import CreateCustomerDialog from "../Dialog/Users/createCustomerDialog";
// import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
// import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
// import ActionDialog from "../Dialog/ActionDialog";
// import SkeletonLoading from "components/common/Skeleton";
// import CreateEmployeeDialog from "../Dialog/Users/createEmployeeDialog";
// import AddLabourDialog from "../Dialog/Labour/AddLabour";
// import AddServiceDialog from "../Dialog/Service/AddServiceDialog";
// import CreateSpareDialog from "../Dialog/Spares/AddSparesDialog";

const CustomerTable = ({DialogButton,columnss,URL,key})=>{
  const [dataLength,setDataLength] = useState(0)
  const token = localStorage.getItem('access_tokenSP'); // Retrieve the token from local storage
  const customer_id = localStorage.getItem('customer_id'); // Retrieve the token from local storage
  
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
  // const columns = [
  //   { title: "Athlete", field: "athlete" },
  //   { title: "Age", field: "age" },
  //   { title: "Country", field: "country",render:(rowData)=>{return rowData.country=="Russia" ||rowData.country=="Australia" || rowData.country=="Canada"?<div style={{color:'green'}}>{rowData.country}</div>:<div style={{color:'red'}}>{rowData.country}</div>} },
  //   { title: "Year", field: "year" ,render:(rowData)=><Box display={'flex'}><Button variant="outlined" color="success">Enter</Button><Button variant="outlined" color="error">Reject</Button></Box>},
  //   { title: "Date", field: 'date' ,render:(rowData)=><CreateCustomerDialog color={'options'}/>},
  //   { title: "Sport", field: 'sport' },
  //   { title: "Gold", field: 'gold' },
  //   { title: "Silver", field: 'silver' },
  //   { title: "Bronze", field: 'bronze' },
  //   { title: "Total", field: 'total' ,render:(rowData)=><Box display={'flex'}><SentimentVeryDissatisfiedIcon/></Box>},
  //   { title :"Action", field:'action',render:(rowData)=><ActionDialog status edit view changePassword/>}
  // ]


  return(
    <>
    <ThemeProvider theme={theme}>
    <MaterialTable
    title=""
    columns={columnss}
    options={{debounceInterval:700,emptyRowsWhenPaging:false,
       rowStyle: {backgroundColor: "rgb(244, 248, 249)" },
       headerStyle:{backgroundColor:'rgb(244, 248, 249)',color:"black",fontSize:"14px",fontWeight:'bold',borderBottom:'5px solid rgb(230,230,230)'},
       searchFieldStyle:{marginLeft:'-50px'},       
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
            {/* <Button
            variant="contained"
            sx={{height:'65px', width:'275px'}}
            color="addUser"
            onClick={()=> <CreateCustomerDialog/>}
            >Add Employee
            </Button> */}
            {/* <CreateCustomerDialog height={'65px'} width={'270px'} color={'addUser'}/>
            <CreateEmployeeDialog height={'65px'} width={'270px'} color={'addUser'}/>
            <AddLabourDialog height={'65px'} width={'270px'} color={'addUser'}/>
            <AddServiceDialog height={'65px'} width={'270px'} color={'addUser'}/>
            <CreateSpareDialog height={'65px'} width={'270px'} color={'addUser'}/> */}
            {DialogButton && <DialogWrapper><DialogButton height={isMobileResolution?"30px":'50px'} width={isMobileResolution?"100px":'250px'} color={'options'} /></DialogWrapper>}
          </div>
        </Box>
        </>
      ),
    }}
    isLoading={false}
    key={key || 'default'}
    data={async (query) => {
      try {
        let url = `${URL}?customer_id=${customer_id}&`;

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
        const data = response?.data?.results; // Adjust this based on your API response structure
        // setDataLength(data.length)
       
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
  />
  </ThemeProvider>
  </>
  )
}

export default CustomerTable