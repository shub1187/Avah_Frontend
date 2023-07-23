import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { ServiceProviderColumn } from '../../../../components/table/user/ServiceProviderColumn';
// import { RELOAD_PAGE, RESET_PAGE } from '../../../../network/ApiConstant';
// import { PaginationAction, PaginationStart } from '../../../../redux/pagination_layout/pagination/PaginationAction';
// import PaginationPage from '../../../../redux/pagination_layout/pagination/PaginationPage';
// import AddUserDialog from '../common/dialog/AddUserDialog';
// import UserProfileDialog from '../common/dialog/UserProfileDialog';
import axios from 'axios';
import AddUserDialog from './user/common/dialog/AddUserDialog';
import UserProfileDialog from './user/common/dialog/UserProfileDialog';
import { Box, Button } from '@mui/material';
import PaginationPage from 'redux/pagination_layout/pagination/PaginationPage';


const RequestsLayout = (props) => {
  console.log("---------------ServiceProviderPage----**-------------------")
  const [data, setData] = useState([]);
  console.log("ln 16 Shub",data)
  useEffect(() => {
    const apiCall = async () => {
      try {
        // Get the bearer token from local storage
        const token = localStorage.getItem('access_token');
        
        // Set up the headers with the authorization token
        const headers = {
          Authorization: `Bearer ${token}`,
        };       
        // Make the GET request with the headers
        const response = await axios.get("http://localhost:3008/api/admin/spRequest", { headers });
        
        const responseData = response.data.data; // Access data from the response object
        setData(responseData);
      } catch (error) {
        console.log(error);
      }
    };

    apiCall();
  }, []);
   
  const dispatch = useDispatch()
  const userState = useSelector((state) => state.appState.user);
  const pageState = useSelector((state) => state.appState.pagination);

  const [setAddUserDialog, bindAddUserDialog, closeAddUserDialog] = AddUserDialog('')
  const [setProfileDialog, bindProfileDialog, closeProfileDialog] = UserProfileDialog('')
  const [reload, setReload] = useState(true)
  let pageName="ServiceProviderPage"
  
  const RequestsColumn = [
  
    {
        Header: "NAME",
        accessor: "name",
    },
    {
        Header: "EMAIL",
        accessor: "email",
    },
    {
        Header: "BUSINESS NAME",
        accessor: "business_name",
    },
    {
        Header: "BUSINESS TYPE",
        accessor: "business_type",
    },
    {
        Header:"DOCUMENT",
        accessor:"document"
    },
    {
        Header: "ROLE",
        accessor: "role",
    },
    {
        Header: 'ACTIONS',
        Cell: ({ row }) => (
          <Box display={'flex'}>
            <Button onClick={() => handleApprove(row.id)} color="success">
              APPROVE
            </Button>
            <Button onClick={() => handleDeny(row.id)} color="error">
              DENY
            </Button>
          </Box>
        ),
    },

    // {
    //     Header: "LAST ACTIVITY",
    //     accessor: "updated_at",
    //     Cell: ({ value }) => { 
    //         return format(new Date(value), 'dd/MM/yyyy')

    //     }
    // }

]

const handleApprove = (rowId) => {
    // Perform the approve action using the rowId (e.g., make an API call)
    console.log('Approve row with ID:', rowId);
  };

  const handleDeny = (rowId) => {
    // Perform the deny action using the rowId (e.g., make an API call)
    console.log('Deny row with ID:', rowId);
  };
//   useEffect(() => {
//     console.log("---------------ServiceProviderPage----------------page page-------" )
//     dispatch(PaginationStart(RESET_PAGE))
//   },[])

 
//   useEffect(() => {


//     if (userState.reloadUserDetails || userState.userCreatedDetails) {
//       dispatch(PaginationStart(RELOAD_PAGE))
//     }

//     if (userState.userCreatedDetails) {
//       closeAddUserDialog()
//     }

//   }, [pageState.isFirstLoad, userState.reloadUserDetails, userState.userCreatedDetails]);

  return (
    <div>
        <PaginationPage
            currentPage="RequestPage"
            column={RequestsColumn}
            onAddUserClick={() => setAddUserDialog(true)}
            data={data??[]}
            onActionClick={(row) => {
            }}
        />
        {/* {bindAddUserDialog("ServiceProviderPage")}
        {bindProfileDialog("ServiceProviderPage")} */}


    </div>
  );
};

export default RequestsLayout;


