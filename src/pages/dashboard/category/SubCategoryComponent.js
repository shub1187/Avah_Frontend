import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AddRoleDialog from '../roles/dialog/AddRoleDialog';
import { GetFullListAction, PaginationStart } from '../../../redux/pagination_layout/pagination/PaginationAction';
import PaginationPage from '../../../redux/pagination_layout/pagination/PaginationPage';
import RoleProfileDialog from '../roles/dialog/RoleProfileDialog';
import { RELOAD_PAGE, RESET_PAGE } from '../../../network/ApiConstant';
import { CategoryColumn, SubCategoryColumn } from '../../../components/table/category/CategoryColumn';

function SubCategoryComponent() {
  const dispatch = useDispatch()
  const userState = useSelector((state) => state.appState.user);
  const pageState = useSelector((state) => state.appState.pagination);
  const [addView, setAddView] = useState(false)
  const [viewProfile, setViewProfile] = useState(false)

  const [setAddRoleDialog, bindAddRoleDialog, closeAddUserDialog] = AddRoleDialog('')
  const [setProfileDialog, bindProfileDialog, closeProfileDialog] = RoleProfileDialog('')
  const pageName = "SubCategoryPage"
  useEffect(() => {
    console.log("---------------SubCategoryPage----------------page page-------")
    dispatch(PaginationStart(RESET_PAGE))
    dispatch(GetFullListAction(pageName))

  }, [])


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
        column={SubCategoryColumn}
        onAddUserClick={() => {
          setAddView(true)
          setAddRoleDialog(pageName)
        }}
        onActionClick={(row) => {

          return (<div>

            <h2 onClick={() => {
              setViewProfile(true)
              setProfileDialog(row.values.id, "viewProfile", pageName)
            }} className='menu-td'>View Profile </h2>

            <h2 onClick={() => {
              setViewProfile(true)
              setProfileDialog(row.values.id, "editProfile", pageName)
            }
            } className='menu-td'>Edit Profile</h2>

            <h2 onClick={() => {
              setViewProfile(true)
              setProfileDialog(row.values.id, "delete", pageName)
            }} className='menu-td'>Delete</h2>

          </div>)
        }}

      />


      {addView ? bindAddRoleDialog(pageState.getFullList) : null}
      {viewProfile? bindProfileDialog(pageState.getFullList):null}

    </div>
  );

}

export default SubCategoryComponent
