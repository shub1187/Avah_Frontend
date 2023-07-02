import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ServiceProviderColumn } from '../../../../components/table/user/ServiceProviderColumn';
import { RELOAD_PAGE, RESET_PAGE } from '../../../../network/ApiConstant';
import { PaginationAction, PaginationStart } from '../../../../redux/pagination_layout/pagination/PaginationAction';
import PaginationPage from '../../../../redux/pagination_layout/pagination/PaginationPage';
import AddUserDialog from '../common/dialog/AddUserDialog';
import UserProfileDialog from '../common/dialog/UserProfileDialog';
import { ModeratorsColumn } from '../../../../components/table/user/ModeratorsColumn';
import ModeratorsColumnData from '../../../../components/table/user/data/ModeratorsColumn.json'


const ModeratorsPage = (props) => {
  console.log("---------------Moderator----**-------------------")

  const dispatch = useDispatch()
  const userState = useSelector((state) => state.appState.user);
  const pageState = useSelector((state) => state.appState.pagination);

  const [setAddUserDialog, bindAddUserDialog, closeAddUserDialog] = AddUserDialog('')
  const [setProfileDialog, bindProfileDialog, closeProfileDialog] = UserProfileDialog('')
  const [reload, setReload] = useState(true)
  let pageName="ServiceProviderPage"
  


  useEffect(() => {
    console.log("---------------modarator----------------page page-------" )
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
        currentPage="ModeratorsPage"
        column={ModeratorsColumn}
        onAddUserClick={() => setAddUserDialog(true)}
        data={ModeratorsColumnData}
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

export default ModeratorsPage;


