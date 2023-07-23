import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { ServiceProviderColumn } from '../../../../components/table/user/ServiceProviderColumn';
// import { RELOAD_PAGE, RESET_PAGE } from '../../../../network/ApiConstant';
// import { PaginationAction, PaginationStart } from '../../../../redux/pagination_layout/pagination/PaginationAction';
// import PaginationPage from '../../../../redux/pagination_layout/pagination/PaginationPage';
import PaginationPage from 'redux/pagination_layout/pagination/PaginationPage';
// import AddUserDialog from '../common/dialog/AddUserDialog';
// import UserProfileDialog from '../common/dialog/UserProfileDialog';
import axios from 'axios';
import { RequestsColumn } from 'components/table/admin/requestsColumn';
import AddUserDialog from './user/common/dialog/AddUserDialog';
import UserProfileDialog from './user/common/dialog/UserProfileDialog';
import { RowProvider } from 'components/table/admin/requestsColumn';
import PaginationRequestTable from 'redux/pagination_layout/pagination/paginationRequestTable';
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
    <RowProvider>
        <PaginationRequestTable
            currentPage="RequestPage"
            column={RequestsColumn}
            onAddUserClick={() => setAddUserDialog(true)}
            data={data??[]}
            onActionClick={(row) => {
            }}
        />
        {/* {bindAddUserDialog("ServiceProviderPage")}
        {bindProfileDialog("ServiceProviderPage")} */}

    </RowProvider>


    </div>
  );
};

export default RequestsLayout;


