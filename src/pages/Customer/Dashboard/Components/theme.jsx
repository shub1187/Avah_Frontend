import { createTheme } from '@mui/material'
import React from 'react'
import { globalAppTheme } from 'components/common/Themes/GlobalAppTheme'
const customerHomeTheme = createTheme(globalAppTheme,{
    typography:{
        h5:{
            fontSize:"1.375rem",
            fontWeight:"700"
        },
        tableTitle:{
            fontSize:"5rem"
        }
    }
})

export default customerHomeTheme