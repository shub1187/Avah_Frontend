import { Box, Toolbar } from '@mui/material'
import Sidebar from 'components/common/Sidebar/SidebarLayout'
import Topbar from 'components/common/Topbar'
import sizeConfigs from 'configs/sizeConfigs'
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
    const isLanding = location.pathname==='/customer/home'
  return (
      <Box>
        {!isLanding && <Topbar customer={isLanding} isMobile={isMobile} handleDrawerToggle={handleDrawerToggle} />}

          <Box
              component="nav"
              sx={{
                  width: sizeConfigs.sidebar.width,
                  flexShrink: 0
              }}
          >
              <Sidebar customer={isLanding} open={open} handleDrawerToggle={handleDrawerToggle} isMobile={isMobile} />
          </Box>
          <Box
              component="main"
              sx={{
                  flexGrow: 1,
                  p: location.pathname === '/customer/dashboard' || location.pathname === '/customer/home' ? 0 : 3,
                  width: (isMobile || isLanding)?'none':`calc(100% - ${sizeConfigs.sidebar.width})`,
                  minHeight: "100vh",
                  float:!isMobile && 'right',
                //   backgroundColor: colorConfigs.mainBg
              }}
          >
              {!isLanding && <Toolbar />}
              <Outlet />
          </Box>
      </Box>
  )
}

export default CustomerLayout