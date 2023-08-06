import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ServiceProviderColumn } from '../../../../components/table/user/ServiceProviderColumn';
import { RELOAD_PAGE, RESET_PAGE } from '../../../../network/ApiConstant';
import { PaginationAction, PaginationStart } from '../../../../redux/pagination_layout/pagination/PaginationAction';
import PaginationPage from '../../../../redux/pagination_layout/pagination/PaginationPage';
import AddUserDialog from '../common/dialog/AddUserDialog';
import UserProfileDialog from '../common/dialog/UserProfileDialog';
import ServiceProviderColumnData from '../../../../components/table/user/data/ServiceProviderColumn.json'
import axios from 'axios';


const ServiceProviderPage = (props) => {
  console.log("---------------ServiceProviderPage----**-------------------")
  const [data, setData] = useState([]);
  // console.log("ln 16 Shub",data)
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
        const response = await axios.get("http://localhost:3008/api/admin/getAllServiceProviders", { headers,params });
        // console.log("ln 36",response)
        const responseData = response.data.data; // Access data from the response object
        console.log("ln check-02",responseData);
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
  


  useEffect(() => {
    console.log("---------------ServiceProviderPage----------------page page-------" )
    dispatch(PaginationStart(RESET_PAGE))
  },[])

 
  useEffect(() => {


    if (userState.reloadUserDetails || userState.userCreatedDetails) {
      dispatch(PaginationStart(RELOAD_PAGE))
    }

    if (userState.userCreatedDetails) {
      closeAddUserDialog()
    }

  }, [pageState.isFirstLoad, userState.reloadUserDetails, userState.userCreatedDetails]);

  return (
    <div>

      <PaginationPage
        currentPage="ServiceProviderPage"
        column={ServiceProviderColumn}
        onAddUserClick={() => setAddUserDialog(true)}
        data={data??[]}
        onActionClick={(row) => {
          return (<div>

            <h2 onClick={() => setProfileDialog(row.values.id, "viewProfile",pageName)} className='menu-td'>View Profile </h2>
            <h2 onClick={() => setProfileDialog(row.values.id, "editProfile",pageName)} className='menu-td'>Edit Profile</h2>
            <h2 onClick={() => setProfileDialog(row.values.id, "resetPassword",pageName)} className='menu-td'>Reset Password</h2>
            <h2 onClick={() => setProfileDialog(row.values.id, "delete",pageName)} className='menu-td'>Delete</h2>

          </div>)
        }}



      />


      {bindAddUserDialog("ServiceProviderPage")}
      {bindProfileDialog("ServiceProviderPage")}

    </div>
  );
};

export default ServiceProviderPage;


