import React, { useState } from 'react'
import AddCustomerVehicleDialog from 'pages/Customer/Vehicle/Components/AddCustomerVehicleDialog'
import { Box,Button } from '@mui/material'
import CustomMaterialTable from 'components/common/Table/MaterialTable'
import { adminServiceProviderColumn } from './ApprovedServiceProvider/Components/adminServiceProviderColumn'
import AdminServiceProviderApprovedPage from './ApprovedServiceProvider'
import AdminServiceProviderRejectedPage from './RejectedServiceProvider'

const AdminServiceProviderPage = () => {

    const [toggle,setToggle] = useState('approved')

    return (
            <>
                <Box pb={2} sx={{backgroundColor:'rgb(244,248,249)'}} display={'flex'} justifyContent={'center'} >
                <Button sx={{minHeight:'52px', minWidth:"235px"}} variant={toggle==='approved'?'contained':'outlined'} color='options' onClick={()=>setToggle('approved')}>APPROVED</Button>
                <Button sx={{minHeight:'52px', minWidth:"235px"}}  variant={toggle==='rejected'?'contained':'outlined'} color='options' onClick={()=>setToggle('rejected')}>REJECTED</Button>
                
                </Box>
                {toggle==='approved'?
                <AdminServiceProviderApprovedPage/>
                :
                <AdminServiceProviderRejectedPage/>
                }
    
            </>
      )
}

export default AdminServiceProviderPage