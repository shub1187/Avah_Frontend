import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AddRoleDialog from '../roles/dialog/AddRoleDialog';
import { GetFullListAction, PaginationStart, SubCateGetFullListAction } from '../../../redux/pagination_layout/pagination/PaginationAction';
import PaginationPage from '../../../redux/pagination_layout/pagination/PaginationPage';
import RoleProfileDialog from '../roles/dialog/RoleProfileDialog';
import { RELOAD_PAGE, RESET_PAGE } from '../../../network/ApiConstant';
import { CategoryColumn, ServiceCategoryColumn } from '../../../components/table/category/CategoryColumn';
import AddServiceCategoryDialog from './dialog/AddServiceCategoryDialog';
import ProfileServiceCategoryDialog from './dialog/ProfileServiceCategoryDialog';

function ServiceCategoryComponent() {
    const dispatch = useDispatch()
    const userState = useSelector((state) => state.appState.user);
    const pageState = useSelector((state) => state.appState.pagination);
  
     const [setAddDialog, bindAddDialog, closeAddUserDialog] = AddServiceCategoryDialog('')
     const [setProfileDialog, bindProfileDialog, closeProfileDialog] = ProfileServiceCategoryDialog('')
    const pageName="ServiceCategoryPage"
    useEffect(() => {
      console.log("---------------ManufacturersPage----------------page page-------" )
      dispatch(PaginationStart(RESET_PAGE))
      dispatch(GetFullListAction(pageName))
      dispatch(SubCateGetFullListAction())
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
          column={ServiceCategoryColumn}
          onAddUserClick={() => {
            setAddDialog(pageName)
          }}
          onActionClick={(row) => {
  
            return (<div>
  
              <h2 onClick={() => setProfileDialog(row.values.id, "viewProfile",pageName)} className='menu-td'>View Profile </h2>
              <h2 onClick={() => setProfileDialog(row.values.id, "editProfile",pageName)} className='menu-td'>Edit Profile</h2>
              <h2 onClick={() => setProfileDialog(row.values.id, "delete",pageName)} className='menu-td'>Delete</h2>
  
            </div>)
          }}
  
        />
  
  
        {bindAddDialog (pageState.getFullList,pageState.getSubCateFullList)}
        {bindProfileDialog(pageState.getFullList,pageState.getSubCateFullList)}
  
      </div>
    );

}

export default ServiceCategoryComponent
