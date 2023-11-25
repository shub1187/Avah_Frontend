import { ThemeProvider } from '@mui/material'
import { globalAppTheme } from 'components/common/Themes/GlobalAppTheme'
import CustomerLayout from 'components/layout/CustomerLayout'
import MainLayout from 'components/layout/MainLayout'
import ServiceProviderLayout from 'components/layout/ServiceProviderLayout'
import RaeesLoginComponent from 'pages/login/RaeesLoginComponent'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { customerRoute, raeesRoute, routes } from 'routes'
import { loginFunction } from 'utils/customFunctions'
const Appy = () => {

  const location = useLocation();
  const isAdminPage = location.pathname.includes('/admin');

  return (
    <ThemeProvider theme={globalAppTheme}>
      <Routes>
        {
          isAdminPage && localStorage.getItem('TYPE_OF_USER') == "1" ?
            <>
              <Route path="/admin/dashboard" element={<MainLayout />}> {routes}</Route>
              <Route path="/admin/" element={<MainLayout />}> {routes}</Route>

            </>

            :
            isAdminPage ?
              <Route path="/admin" element={<RaeesLoginComponent />} />
              :
              localStorage.getItem('TYPE_OF_USER') == "2" ?
                <>
                  <Route path="/" element={<ServiceProviderLayout />}> {raeesRoute}</Route>

                </>
                :
                localStorage.getItem('TYPE_OF_USER') == '3' ?
                  <>
                    <Route path="/" element={<CustomerLayout />}>{customerRoute}</Route>
                  </>
                  :
                  <Route path="/login" element={<RaeesLoginComponent />} />
        }
      </Routes>
    </ThemeProvider>
  )
}

export default Appy