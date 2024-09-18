import { Box, Button, createTheme,TableCell,TableHead,TableRow,ThemeProvider, useMediaQuery } from "@mui/material";
import axios from "axios";
import MaterialTable, { MTableToolbar } from "material-table";
import { createContext, createRef, useContext, useState } from "react";
import CreateCustomerDialog from "../../../pages/serviceProvider/Users/Customers/Components/createCustomerDialog";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import ActionDialog from "../../common/Dialog/ActionDialog";
import DialogWrapper from "components/common/Dialog/DialogWrapper";
import { globalAppTheme } from "components/common/Themes/GlobalAppTheme";


const CustomerMaterialTableContext = createContext()
export const useCustomMaterialTableContext = ()=>useContext(CustomerMaterialTableContext)

const CustomMaterialTable = ({DialogButton,columnss,URL,key, dialogTitle, dialogButtonName, clickButton , buttonName}) => {
    const tableRef = createRef();
    const token = localStorage.getItem('access_tokenSP'); // Retrieve the token from local storage
    const sp_id = localStorage.getItem('sp_id'); // Retrieve the token from local storage
    const customer_id = localStorage.getItem('customer_id'); // Retrieve the token from local storage

    const isMobileResolution = useMediaQuery((theme) =>
    theme.breakpoints.down('sm')
    );
    const theme = createTheme(globalAppTheme,{
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
    const mock = {
      "results": [
        {
          "register_sp_id": 62,
          "approval_status": false,
          "is_deleted": false,
          "business_type": "Partnership",
          "full_address": "Charoli Phata Pune Alandi Maharashtra 784512",
          "role": "service provider",
          "business_address": "Charoli Phata Pune",
          "sp_status": "inactive",
          "business_contact": "784512012",
          "sp_rejection_note": null,
          "state": "Maharashtra",
          "city": "Alandi",
          "pin_code": "784512",
          "name": "Avanti Nikam",
          "email": "mohamedraees2@gmail.com",
          "business_name": "Avanti Auto Services",
          "serviced_brands": [
              "Maruti Suzuki",
              "Morris Garage"
          ]
      },
      {
          "register_sp_id": 60,
          "approval_status": false,
          "is_deleted": false,
          "business_type": "Limited Liability Partnership",
          "full_address": "Warjhe Pune Wakad Maharashtra 412105",
          "role": "service provider",
          "business_address": "Warjhe Pune",
          "sp_status": "inactive",
          "business_contact": "7845121245",
          "sp_rejection_note": null,
          "state": "Maharashtra",
          "city": "Wakad",
          "pin_code": "412105",
          "name": "Pavan Kumbhar",
          "email": "pavan@gmail.com",
          "business_name": "Pavan Auto services",
          "serviced_brands": null
      },

      ],
    }
    return(
      <>
      <CustomerMaterialTableContext.Provider value={{tableRef}}>
      <ThemeProvider theme={theme}>
      <MaterialTable
      tableRef={tableRef}
      title=""
      // columns={typeof columnss==='function'?columnss(tableRef):columnss}
      columns={columnss}
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
              {DialogButton && 
                (<DialogWrapper
                    tableRef={tableRef} 
                    title={dialogTitle} 
                    buttonName={dialogButtonName}
                  >
                    <DialogButton
                      height={isMobileResolution?"30px":'50px'} 
                      width={isMobileResolution?"100px":'250px'} 
                      color={'options'} 
                    />
                  </DialogWrapper>)
                }
              {clickButton && <Button className="mr-1 mt-3" variant="contained" color="options" onClick={clickButton}>{buttonName}</Button>}
            </div>
          </Box>
          </>
        ),
      }}
      isLoading={false}
      key={key || 'default'}
      // data={mock?.results || []}
      data={async (query) => {
        try {
            let url = `${URL}?${sp_id ? `sp_id=${sp_id}&` :''}${customer_id ? `customer_id=${customer_id}&`:''}`
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
            totalCount: response?.data?.data?.totalRecords || 0, // Assuming the total count is the length of the data array
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
    </CustomerMaterialTableContext.Provider>
    </>
    )
}

export default CustomMaterialTable