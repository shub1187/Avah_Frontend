import React, { useState, useRef, useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import { imageCongis } from '../../../../../configs/imageConfigs';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteUserDetailAction, ResetValueAction, SetUserStatusAction, UpdateUserDetailAction, UserGetDetailsAction, UserPasswordUpdate } from '../UserAction';
import { USER_RESET } from '../../../../../network/ApiConstant';
import AlertDialog from './AlertDialog';

function AddNewUserDialog() {

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const [viewProfile, setViewProfile] = React.useState(true);
    const [editProfile, setEditProfile] = React.useState(false);
    const [resetPassword, setResetPassword] = React.useState(false);
    const [deleteProfile, setDeleteProdile] = React.useState(false);

    const dispatch = useDispatch()
    const userState = useSelector((state) => state.appState.user);
    const [userID, setUserId] = useState("")
   


    // fetch user details
    useEffect(() => {
        
        if ( open ) {
          //  dispatch(UserGetDetailsAction(userID))
        }

    }, [open, viewProfile,userState.reloadUserDetails]);


   

    const closeProfileDialog = () => {
        if (open) {
            setOpen(false)
            resetAction()
            dispatch(ResetValueAction(USER_RESET))
        }

    }

    const setProfileDialog = () => {
       
       
        if (!open) {
            resetProfile()
            setOpen(!open)
        }
    }

    const resetAction = () => {
        setViewProfile(false)
        setResetPassword(false)
        setDeleteProdile(false)
        setEditProfile(false)
    }

    const resetProfile=()=> {
       
    }


   


    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    function bindProfileDialog() {

        return (<div>
           
            <Dialog
                 PaperProps={{
                    sx: {
                        width: "80%",
                        height: '100%',
                        backgroundColor: 'white'

                    }
                }}

                maxWidth='lg'
                open={open}
                onClose={closeProfileDialog}
            >

                <div className="row p-0 g-0" >

                <button className="custombutton common-bg mx-2" style={{ 'background': 'black' }} onClick={() => { closeProfileDialog() }} >Cancel</button>




                </div>


            </Dialog>
        </div>);

    }

    return [setProfileDialog, bindProfileDialog, closeProfileDialog]


}

export default AddNewUserDialog
