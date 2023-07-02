import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SpUserProfileDialog from '../user/common/dialog/SpUserProfileDialog';
import { SpPaginationStart } from '../../../pagination_layout/pagination/SpPaginationAction';
import { RELOAD_PAGE, RESET_PAGE } from '../../../../network/ApiConstant';
import PaginationPage from '../../../../redux/pagination_layout/pagination/PaginationPage';
import { SpareColumn } from '../../../../components/table/spares/SpareColumn';
import SpareAddDialog from './SpareAddDialog';
import SpareViewProfileDialog from './SpareViewProfileDialog';

function SparePage() {
 
    const dispatch = useDispatch()
    const userState = useSelector((state) => state.appState.user);
    const pageState = useSelector((state) => state.appState.pagination);
  
    const [setAddUserDialog, bindAddUserDialog, closeAddUserDialog] = SpareAddDialog('')
    const [setProfileDialog, bindProfileDialog, closeProfileDialog] = SpareViewProfileDialog('')
   
    useEffect(() => {
      console.log("---------------SparePage----------------page page-------" )
      dispatch(SpPaginationStart(RESET_PAGE))
    },[])
  
    var pageName="SparePage"
  
    useEffect(() => {
  
  
      if (userState.reloadUserDetails || userState.userCreatedDetails) {
        dispatch(SpPaginationStart(RELOAD_PAGE))
      }
  
      if (userState.userCreatedDetails) {
        closeAddUserDialog()
      }
  
    }, [pageState.isFirstLoad, userState.reloadUserDetails, userState.userCreatedDetails]);
  
    return (
      <div>
  
        <PaginationPage
          currentPage={pageName}
          column={SpareColumn}
          onAddUserClick={() => {
            setAddUserDialog()
          }}
          onActionClick={(row) => {
  
            return (<div>
  
              <h2 onClick={() => setProfileDialog(row.values.id, "viewProfile",pageName)} className='menu-td'>View Profile </h2>
              <h2 onClick={() => setProfileDialog(row.values.id, "editProfile",pageName)} className='menu-td'>Edit Profile</h2>
              <h2 onClick={() => setProfileDialog(row.values.id, "delete",pageName)} className='menu-td'>Delete</h2>
  
            </div>)
          }}
  
        />
  
  
        {bindAddUserDialog(pageName)}
        {bindProfileDialog(pageName)}
  
      </div>
    );
}

export default SparePage
