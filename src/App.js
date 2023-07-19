import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import LoginComponent from "./pages/login/LoginComponent";
import { routes, spRoutes } from "./routes";
import ServiceProviderLayout from "./components/layout/ServiceProviderLayout";
import AdminLoginComponent from "pages/login/AdminLoginComponent";

function App() {
  const loginState = useSelector((state) => state.appState.login);
  console.log(localStorage.getItem('TYPE_OF_USER'))
  console.log(localStorage.getItem('isLoggedIn'))
  console.log(localStorage.getItem('isLoggedInSP'))
  const location = useLocation();
  const isAdminPage = location.pathname.includes('/admin');
  console.log(isAdminPage,"RAEES")
    // localStorage.setItem('isLoggedIn', "");
    // localStorage.setItem('TYPE_OF_USER', "");
    // localStorage.setItem('isLoggedInSP', "");
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
             <Route path="/dashboard" element={<MainLayout />}> {routes}</Route>
             <Route path="/" element={<MainLayout />}> {routes}</Route>
           </>

          //  <Route path="/dashboard" element={<MainLayout />}> {routes}</Route>
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
