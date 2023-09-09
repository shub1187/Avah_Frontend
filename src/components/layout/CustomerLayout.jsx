import { Box, Toolbar } from '@mui/material'
import Sidebar from 'components/common/Sidebar/SidebarLayout'
import Topbar from 'components/common/Topbar'
import { useMobileResponsive } from 'hooks/useMobileResponsive'
import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const CustomerLayout = () => {
const [open, setOpen] = useState(false);
const {isMobile}=useMobileResponsive()
const handleDrawerToggle = () => {
      setOpen(!open);
    };
 const location = useLocation()
  return (
      <Box>
          <Topbar customer={true} isMobile={isMobile} handleDrawerToggle={handleDrawerToggle} />

          <Box
              component="nav"
              sx={{
                  // width: sizeConfigs.sidebar.width,
                  flexShrink: 0
              }}
          >
              <Sidebar customer={true} open={open} handleDrawerToggle={handleDrawerToggle} isMobile={isMobile} />
          </Box>
          <Box
              component="main"
              sx={{
                  flexGrow: 1,
                  p: location.pathname === '/dashboard/home' || location.pathname === '/admin/dashboard/home' ? 0 : 3,
                //   width: `calc(100% - ${sizeConfigs.sidebar.width})`,
                  minHeight: "100vh",
                //   backgroundColor: colorConfigs.mainBg
              }}
          >
              {/* {!isMobile && <Topbar isMobileResolution={isMobile} handleDrawerToggle={handleDrawerToggle} />} */}
              <Toolbar />
              <Outlet />
          </Box>
      </Box>
  )
}

export default CustomerLayout