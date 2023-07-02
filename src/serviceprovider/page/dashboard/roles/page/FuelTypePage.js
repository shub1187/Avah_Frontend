import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RELOAD_PAGE, RESET_PAGE } from '../../../../network/ApiConstant';
import { PaginationAction, PaginationStart } from '../../../../redux/pagination_layout/pagination/PaginationAction';
import PaginationPage from '../../../../redux/pagination_layout/pagination/PaginationPage';
import AddRoleDialog from '../dialog/AddRoleDialog';
import RoleProfileDialog from '../dialog/RoleProfileDialog';
import { FuelColumn } from '../../../../components/table/role/ManufactureColumn';



const FuelTypePage = (props) => {

  const dispatch = useDispatch()
  const userState = useSelector((state) => state.appState.user);
  const pageState = useSelector((state) => state.appState.pagination);

   const [setAddRoleDialog, bindAddRoleDialog, closeAddUserDialog] = AddRoleDialog('')
   const [setProfileDialog, bindProfileDialog, closeProfileDialog] = RoleProfileDialog('')
  const pageName="FuelTypePage"
  useEffect(() => {
    console.log("---------------ManufacturersPage----------------page page-------" )
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
        currentPage={pageName}
        column={FuelColumn}
        onAddUserClick={() => {
          setAddRoleDialog(pageName)
        }}
        onActionClick={(row) => {

          return (<div>

            <h2 onClick={() => setProfileDialog(row.values.id, "viewProfile",pageName)} className='menu-td'>View Profile </h2>
            <h2 onClick={() => setProfileDialog(row.values.id, "editProfile",pageName)} className='menu-td'>Edit Profile</h2>
            <h2 onClick={() => setProfileDialog(row.values.id, "delete",pageName)} className='menu-td'>Delete</h2>

          </div>)
        }}

      />


      {bindAddRoleDialog(pageName)}
      {bindProfileDialog(pageName)}

    </div>
  );
};

export default FuelTypePage;
