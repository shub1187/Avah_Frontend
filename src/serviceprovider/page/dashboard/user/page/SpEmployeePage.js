import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SpPaginationStart } from '../../../../pagination_layout/pagination/SpPaginationAction';
import { Pagination, ThemeProvider, createTheme } from '@mui/material';
import { CustomerColumn } from '../../../../../components/table/user/CustomerColumn';
import SpAddUserDialog from '../common/dialog/SpAddUserDialog';
import SpUserProfileDialog from '../common/dialog/SpUserProfileDialog';
import { RELOAD_PAGE, RESET_PAGE } from '../../../../../network/ApiConstant';
import PaginationPage from '../../../../../redux/pagination_layout/pagination/PaginationPage';
import AddEmployeeDialog from '../common/dialog/AddEmployeeDialog';
import ServiceProvidertable from 'components/spComponents/Table/ServiceProviderTable';
import { createEmployeeColumn } from 'pages/serviceProvider/Users/Employees/Components/CreateEmployeeColumn';
import CreateEmployeeDialog from 'pages/serviceProvider/Users/Employees/Components/createEmployeeDialog';
const SpEmployeePagee = (props) => {
  const theme = createTheme()
  const dispatch = useDispatch()
  const userState = useSelector((state) => state.appState.user);
  const pageState = useSelector((state) => state.appState.pagination);

  const [setAddUserDialog, bindAddUserDialog, closeAddUserDialog] = AddEmployeeDialog('')
  const [setProfileDialog, bindProfileDialog, closeProfileDialog] = SpUserProfileDialog('')
 
  useEffect(() => {
    console.log("---------------SpEmployeePage----------------page page-------" )
    dispatch(SpPaginationStart(RESET_PAGE))
  },[])

  var pageName="SpEmployeePage"

  useEffect(() => {


    if (userState.reloadUserDetails || userState.userCreatedDetails) {
      dispatch(SpPaginationStart(RELOAD_PAGE))
    }

    if (userState.userCreatedDetails) {
      closeAddUserDialog()
    }

  }, [pageState.isFirstLoad, userState.reloadUserDetails, userState.userCreatedDetails]);

  return (
    <>
    <ThemeProvider theme={theme}>
      <ServiceProvidertable DialogButton={CreateEmployeeDialog} columnss={createEmployeeColumn} URL={'http://localhost:3008/api/serviceprovider/getAllEmployee'}/>
    </ThemeProvider>
    </>
    // <div>

    //   <PaginationPage
    //     currentPage={pageName}
    //     column={CustomerColumn}
    //     onAddUserClick={() => {
    //       setAddUserDialog()
    //     }}
    //     onActionClick={(row) => {

    //       return (<div>

    //         <h2 onClick={() => setProfileDialog(row.values.id, "viewProfile",pageName)} className='menu-td'>View Profile </h2>
    //         <h2 onClick={() => setProfileDialog(row.values.id, "editProfile",pageName)} className='menu-td'>Edit Profile</h2>
    //         <h2 onClick={() => setProfileDialog(row.values.id, "resetPassword",pageName)} className='menu-td'>Reset Password</h2>
    //         <h2 onClick={() => setProfileDialog(row.values.id, "delete",pageName)} className='menu-td'>Delete</h2>

    //       </div>)
    //     }}

    //   />


    //   {bindAddUserDialog(pageName)}
    //   {bindProfileDialog(pageName)}

    // </div>
  );
};

export default SpEmployeePagee;