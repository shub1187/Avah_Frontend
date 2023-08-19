import { Box } from '@mui/material'
import React from 'react'
import ChangePasswordDialog from './ChangePasswordDialog'
import EditDialog from './EditDialog'
import StatusDialog from './StatusDialog'
import ViewDialog from './ViewDialog'

const ActionDialog = ({changePassword,edit,status,view}) => {
  return (
    <Box display={'flex'}>
        {changePassword && <ChangePasswordDialog/>}
        {edit && <EditDialog/>}
        {status && <StatusDialog/>}
        {view && <ViewDialog/>}
    </Box>
  )
}

export default ActionDialog