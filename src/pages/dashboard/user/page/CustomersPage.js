import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CustomerColumn } from '../../../../components/table/user/CustomerColumn';
import { RELOAD_PAGE, RESET_PAGE } from '../../../../network/ApiConstant';
import { PaginationAction, PaginationStart } from '../../../../redux/pagination_layout/pagination/PaginationAction';
import PaginationPage from '../../../../redux/pagination_layout/pagination/PaginationPage';
import AddNewUserDialog from '../common/dialog/AddNewUserDialog';
import AddUserDialog from '../common/dialog/AddUserDialog';
import UserProfileDialog from '../common/dialog/UserProfileDialog';
import CustomerColumnData from '../../../../components/table/user/data/CustomerColumn.json'

const CustomersPage = (props) => {

  const dispatch = useDispatch()
  const userState = useSelector((state) => state.appState.user);
  const pageState = useSelector((state) => state.appState.pagination);

  const [setAddUserDialog, bindAddUserDialog, closeAddUserDialog] = AddUserDialog('')
  const [setProfileDialog, bindProfileDialog, closeProfileDialog] = UserProfileDialog('')
  useEffect(() => {
    console.log("---------------CustomersPage----------------page page-------" )
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
        currentPage="CustomersPage"
        column={CustomerColumn}
        onAddUserClick={() => {
          setAddUserDialog()
        }}
        data={CustomerColumnData}
        onActionClick={(row) => {

          return (<div>

            <h2 onClick={() => setProfileDialog(row.values.id, "viewProfile","CustomersPage")} className='menu-td'>View Profile </h2>
            <h2 onClick={() => setProfileDialog(row.values.id, "editProfile","CustomersPage")} className='menu-td'>Edit Profile</h2>
            <h2 onClick={() => setProfileDialog(row.values.id, "resetPassword","CustomersPage")} className='menu-td'>Reset Password</h2>
            <h2 onClick={() => setProfileDialog(row.values.id, "delete","CustomersPage")} className='menu-td'>Delete</h2>

          </div>)
        }}

      />


      {bindAddUserDialog("CustomersPage")}
      {bindProfileDialog("CustomersPage")}

    </div>
  );
};

export default CustomersPage;