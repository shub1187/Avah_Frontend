import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, useLocation ,useNavigate} from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import LoginComponent from "./pages/login/LoginComponent";
import { routes, spRoutes } from "./routes";
import ServiceProviderLayout from "./components/layout/ServiceProviderLayout";
import AdminLoginComponent from "pages/login/AdminLoginComponent";
import RaeesLoginComponent from "pages/login/RaeesLoginComponent";
import { useEffect } from "react";

function App() {
  const loginState = useSelector((state) => state.appState.login);
  console.log(localStorage.getItem('TYPE_OF_USER'))
  console.log(localStorage.getItem('isLoggedIn'))
  console.log(localStorage.getItem('isLoggedInSP'))
  const location = useLocation();
  const isAdminPage = location.pathname.includes('/admin');
  console.log(isAdminPage,"RAEES")
  const navigate = useNavigate();
  const typeOfUser = localStorage.getItem('TYPE_OF_USER');

  // useEffect(() => {
  //   // Check if isAdminPage is true and typeOfUser is "1", then redirect to /admin/dashboard
  //   if (isAdminPage && typeOfUser === "1") {
  //     navigate('/admin/dashboard/home');
  //   }
  //   else{
  //     navigate('/admin')
  //   }
  // }, [isAdminPage, typeOfUser]);
  return (
    // <BrowserRouter>
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
          <Route path="/dashboard" element={<ServiceProviderLayout />}> {spRoutes}</Route>
          <Route path="/" element={<ServiceProviderLayout />}> {spRoutes}</Route>
         </>
          :
          <Route path="/" element={<LoginComponent />} /> 

          //  <Route path="/dashboard" element={<ServiceProviderLayout />}> {spRoutes}</Route>
        }
        

        
      </Routes>
    // </BrowserRouter>
  );
}

export default App;
