import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, useLocation ,useNavigate} from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import LoginComponent from "./pages/login/LoginComponent";
import { customerRoute, raeesRoute, routes, spRoutes } from "./routes";
import ServiceProviderLayout from "./components/layout/ServiceProviderLayout";
import AdminLoginComponent from "pages/login/AdminLoginComponent";
import RaeesLoginComponent from "pages/login/RaeesLoginComponent";
import { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { globalAppTheme } from "components/common/Themes/GlobalAppTheme";
import CustomerLayout from "components/layout/CustomerLayout";
import LandingPage from "pages/LandingPage/LandingPage";
function App() {
  const loginState = useSelector((state) => state.appState.login);
  console.log(localStorage.getItem('TYPE_OF_USER'))
  console.log(localStorage.getItem('isLoggedIn'))
  console.log(localStorage.getItem('isLoggedInSP'))
  const location = useLocation();
  const isAdminPage = location.pathname.includes('/admin');
  const isSpPage = location.pathname.includes('/dashboard')
  const isLanding =location.pathname.includes('/landing')
  console.log(isAdminPage,"RAEES")
  const navigate = useNavigate();
  const typeOfUser = localStorage.getItem('TYPE_OF_USER');
console.log(raeesRoute,"RAEES")
  useEffect(() => {
    if (!typeOfUser) {
      navigate('/landing');
      return;
    }
    // Check if isAdminPage is true and typeOfUser is "1", then redirect to /admin/dashboard
    if(location.pathname=='/landing'){
      return
    }
    if (isAdminPage && typeOfUser === "1") {
      navigate('/admin/dashboard/home');
    }
    else if(isAdminPage){
      navigate('/admin')
    }
    else if(typeOfUser==="2"){
      navigate('/dashboard/home')
    }
    else if(typeOfUser=='3'){
      navigate('customer/home')
    }
    else{
      navigate('/login')
    }
  }, [typeOfUser,isAdminPage]);
  return (
    // <BrowserRouter>
    <ThemeProvider theme={globalAppTheme}>
      <Routes>


      {/* {
          localStorage.getItem('TYPE_OF_USER') == "1" ||localStorage.getItem('TYPE_OF_USER')==null ?

            localStorage.getItem('isLoggedIn') != "true"  ?
              <Route path="/" element={<LoginComponent />} /> :

              <Route path="/" element={<MainLayout />}> {routes}</Route>
           
              :

            localStorage.getItem('isLoggedInSP') != "true" ?
              <Route path="/" element={<LoginComponent />} /> :

              <Route path="/" element={<MainLayout />}> {spRoutes}</Route>
        } */}
           <Route path="/landing" element={<LandingPage/>}></Route>
        {
           isAdminPage && localStorage.getItem('TYPE_OF_USER') == "1" ?
           <>              
             <Route path="/admin/dashboard" element={<MainLayout />}> {routes}</Route>
             <Route path="/admin/" element={<MainLayout />}> {routes}</Route>

           </>

           :
           isAdminPage ?
           <Route path="/admin" element={<AdminLoginComponent/>} /> 
           :
           localStorage.getItem('TYPE_OF_USER') == "2" ?
           <>
          {/* <Route path="/dashboard" element={<ServiceProviderLayout />}> {spRoutes}</Route>
          <Route path="/" element={<ServiceProviderLayout />}> {spRoutes}</Route> */}
          <Route path="/" element={<ServiceProviderLayout />}> {raeesRoute}</Route>

         </>
          :
          localStorage.getItem('TYPE_OF_USER')=='3' ?
          <>
          <Route path="/" element={<CustomerLayout/>}>{customerRoute}</Route>
          </>
          :
          <Route path="/login" element={<LoginComponent />} /> 

          //  <Route path="/dashboard" element={<ServiceProviderLayout />}> {spRoutes}</Route>
        }
        

        
      </Routes>
      </ThemeProvider>
    // </BrowserRouter>
  );
}

export default App;
