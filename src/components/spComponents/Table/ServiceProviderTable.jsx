import { Box, Button, createTheme,TableCell,TableHead,TableRow,ThemeProvider } from "@mui/material";
import axios from "axios";
import MaterialTable, { MTableToolbar } from "material-table";
import './ServiceProviderTable.css'
import { useState } from "react";
import CreateCustomerDialog from "../Dialog/Users/createCustomer";

const ServiceProvidertable = ()=>{
  const [dataLength,setDataLength] = useState(0)
  
  const theme = createTheme({
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
      },
    })
  const columns = [
    { title: "Athlete", field: "athlete" },
    { title: "Age", field: "age" },
    { title: "Country", field: "country",render:(rowData)=>{return rowData.country=="Russia" ||rowData.country=="Australia" || rowData.country=="Canada"?<div style={{color:'green'}}>{rowData.country}</div>:<div style={{color:'red'}}>{rowData.country}</div>} },
    { title: "Year", field: "year" ,render:(rowData)=><Box display={'flex'}><Button variant="outlined" color="success">Enter</Button><Button variant="outlined" color="error">Reject</Button></Box>},
    { title: "Date", field: 'date' ,render:(rowData)=><CreateCustomerDialog/>},
    { title: "Sport", field: 'sport' },
    { title: "Gold", field: 'gold' },
    { title: "Silver", field: 'silver' },
    { title: "Bronze", field: 'bronze' },
    { title: "Total", field: 'total' },
  ]


  return(
    <>
    <ThemeProvider theme={theme}>
    <MaterialTable
    title=""
    columns={columns}
    options={{debounceInterval:700,emptyRowsWhenPaging:false,
       rowStyle: {backgroundColor: "rgb(244, 248, 249)" },
       headerStyle:{backgroundColor:'rgb(244, 248, 249)',color:"black",fontSize:"14px",fontWeight:'bold',borderBottom:'5px solid rgb(230,230,230)'},
       searchFieldStyle:{marginLeft:'-50px'},
       actionsCellStyle:{backgroundColor:"rgb(244, 248, 249)",color:'blue'}
  }}
  // page={page}
  // totalCount={count}
    components={{
      Toolbar: (props) => (
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
      ),
    }}
    data={async (query) => {
      console.log(query,"RAEES")
      try {
        let url = "https://my-json-server.typicode.com/raeesmohamed/mockjson/olympic?";
        if(query.search){
          url+=`q=${query.search}`
        }
        if(query.orderBy){
          url+=`&_sort=${query.orderBy.field}&_order=${query.orderDirection}`
        }
        url+=`&_page=${query.page+1}`
        url+=`&_limit=${query.pageSize}`
        const response = await axios.get(url);
        const data = response.data; // Adjust this based on your API response structure
        setDataLength(data.length)
        console.log(data,"RAEES","RAEESULLA")
        return {
          data: data, // Change this to match your data structure
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

export default ServiceProvidertable