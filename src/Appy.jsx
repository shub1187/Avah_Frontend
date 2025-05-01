import { ThemeProvider } from '@mui/material'
import { globalAppTheme } from 'components/common/Themes/GlobalAppTheme'
import CustomerLayout from 'components/layout/CustomerLayout'
import ServiceProviderLayout from 'components/layout/ServiceProviderLayout'
import LandingPage from 'pages/_Landing'
import WhatWeDo from 'pages/_Landing/Components/WhatWeDo'
import CustomerHome from 'pages/Customer/LandingPageHome'
import RaeesLoginComponent from 'pages/login'
import {useEffect} from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { adminRoute, customerRoute, employeeRoute, raeesRoute, routes } from 'routes'
import { addBroadcastListenerForLoggingOutOfAllTabs, loginFunction } from 'utils/customFunctions'
const Appy = () => {

  const location = useLocation();
  const isAdminPage = location.pathname.includes('/admin');

  useEffect(()=>{
    addBroadcastListenerForLoggingOutOfAllTabs()
  },[])
  return (
    <ThemeProvider theme={globalAppTheme}>
      <Routes>
        {
          // isAdminPage && localStorage.getItem('TYPE_OF_USER') == "1" ?
          //   <>
          //     <Route path="/admin/dashboard" element={<MainLayout />}> {routes}</Route>
          //     <Route path="/admin/" element={<MainLayout />}> {routes}</Route>

          //   </>

          //   :
          isAdminPage && localStorage.getItem('TYPE_OF_USER') == "1" ?
            <Route path='/' element={<ServiceProviderLayout/>}>{adminRoute}</Route> :
            isAdminPage ?
              <Route path="/admin" element={<RaeesLoginComponent />} />
              :
              localStorage.getItem('TYPE_OF_USER') == "2" ?
              <>
                <Route path="/" element={<ServiceProviderLayout />}> {raeesRoute}</Route>
              </>
              :
              localStorage.getItem('TYPE_OF_USER') == '5' ? 
              <>
              <Route path="/" element={<ServiceProviderLayout />}> {raeesRoute}</Route>
            </>
              :

              localStorage.getItem('TYPE_OF_USER') == '3' ?
              <>
                <Route path="/" element={<CustomerLayout />}>{customerRoute}</Route>
                <Route path="/aboutUs" element={<LandingPage />} />
                <Route path="/whatWeDo" element={<LandingPage />} />
                <Route path="/howWeDo" element={<LandingPage />} />
                <Route path="/providers" element={<LandingPage />} />
                <Route path="/contactUs" element={<LandingPage />} />

              </>
              :
              <>
              <Route path='/' element={<LandingPage />}></Route>
              <Route path="/aboutUs" element={<LandingPage />} />
              <Route path="/whatWeDo" element={<LandingPage />} />
              <Route path="/howWeDo" element={<LandingPage />} />
              <Route path="/providers" element={<LandingPage />} />
              <Route path="/contactUs" element={<LandingPage />} />


              <Route path="/login" element={<RaeesLoginComponent />} />
              {/* <Route path="/whatWeDo" element={<WhatWeDo />} /> */}

              </>

        }
      </Routes>
    </ThemeProvider>
  )
}

export default Appy