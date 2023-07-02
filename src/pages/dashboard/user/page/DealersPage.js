import React from 'react';
import { useSelector } from 'react-redux';
import PaginationPage from '../../../../redux/pagination_layout/pagination/PaginationPage';
import AddUserDialog from '../common/dialog/AddUserDialog';
import { CustomerColumn } from '../../../../components/table/user/CustomerColumn';
// import AddUserDialog from '../common/dialog/AddUserDialog';
const DealersPage = (props) => {

    
  const { appState } = useSelector((state) => state.appState);

  // const { appState } = useSelector((state) => state.appState.appState);

  var menuname = appState.appState
  console.log("000----0000---Dealers---------"+menuname)

  return (
    // <div>Dealersssssssssssssssss</div>
    <PaginationPage
    currentPage="CustomersPage"
    column={CustomerColumn}
    // onAddUserClick={() => {
    //   setAddUserDialog()
    // }}
    onActionClick={(row) => {

      return (<div>
        
        {/* <h2 onClick={() => setProfileDialog(row.values.id, "viewProfile","CustomersPage")} className='menu-td'>View Profile </h2>
        <h2 onClick={() => setProfileDialog(row.values.id, "editProfile","CustomersPage")} className='menu-td'>Edit Profile</h2>
        <h2 onClick={() => setProfileDialog(row.values.id, "resetPassword","CustomersPage")} className='menu-td'>Reset Password</h2>
        <h2 onClick={() => setProfileDialog(row.values.id, "delete","CustomersPage")} className='menu-td'>Delete</h2> */}

      </div>)
    }}

  />


  // {bindAddUserDialog("CustomersPage")}
  // {bindProfileDialog("CustomersPage")}
  );
};

export default DealersPage;