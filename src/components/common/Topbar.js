import { AppBar, Toolbar, Typography } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { imageCongis } from "../../configs/imageConfigs";
import { LogoutAction } from "../../pages/login/LoginAction";




const Topbar = () => {
  //appState.appState=="home"
  const { appState } = useSelector((state) => state.appState);
  const dispatch=useDispatch()

  let appbar = appState.appState == "home" ? "app-bar2" : "app-bar1"
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,

      }}
    >
      {/* <Toolbar  > */}
      {/* <Typography variant="h6">
          React sidebar with dropdown
        </Typography> */}

      <div className={appbar}>
        <nav className="ps-4 pt-4 ">

          <ol className="breadcrumb  pt-0 m-0 ">
            <li className="breadcrumb-item mb-0 a-t "><a className="a-t" href="#">Pages</a></li>
            <li className="breadcrumb-item  a-t" aria-current="page">Dashboard</li>
          </ol>

          <div className="container-fluid g-0">

            <div className="row">

              <div className="col-auto me-auto me-5">
                <div className=' a-t2'>Dashboard</div>
              </div>

              <div className="col-auto pb-0"><ul className="nav nav-contianer">
                <div className="pb-0 pe-2">
                  <img className="gfg nav-cursor" style={{ width: 20, height: 20 }}
                    src={require("../../assets/img/sidebar/setting.png")} />
                </div>

                <div className="pb-0">
                  <img className="gfg nav-cursor" style={{ width: 18, height: 20 }}
                    src={require("../../assets/img/sidebar/notification.png")} />
                </div>



                <div className="pb-0 tb-dropdown" style={{ 'float': 'left' }}>
                  
                  <div className="row g-0">

                    <div className="col ">
                      <div className="px-2 nav-cursor" >
                        <img className="gfg" style={{ width: 18, height: 20 }}
                          src={require("../../assets/img/sidebar/user.png")} />
                      </div>
                    </div>


                    <div className=" col nav-cursor top-bar me-3 pt-1">
                      
                      {
                        localStorage.getItem('TYPE_OF_USER')=="1"? "Admin" : "Provider"

                      }
                      
                      </div>

                    <div className="tb-dropdown-content m-2 mt-4">
                      <div className="nav-cursor" onClick={()=>{
                        dispatch(LogoutAction())
                      }}>
                        <h2  className='menu-td'>Logout </h2>
                      </div>

                    </div>

                  </div>

                </div>


              </ul>

              </div>
            </div>



          </div>


        </nav>

      </div>
      {/* </Toolbar> */}
    </AppBar>
  );
};

export default Topbar;