import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import LoginComponent from "./pages/login/LoginComponent";
import { routes, spRoutes } from "./routes";

function App() {
  const loginState = useSelector((state) => state.appState.login);
  console.log(localStorage.getItem('TYPE_OF_USER'))
  console.log(localStorage.getItem('isLoggedIn'))
  console.log(localStorage.getItem('isLoggedInSP'))

    // localStorage.setItem('isLoggedIn', "");
    // localStorage.setItem('TYPE_OF_USER', "");
    // localStorage.setItem('isLoggedInSP', "");
  return (
    <BrowserRouter>
      <Routes>


              <Route path="/" element={<MainLayout />}> {routes}</Route>
           
        

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
