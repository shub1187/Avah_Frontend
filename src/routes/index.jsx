import { Route } from "react-router-dom";
import serviceRoutes from "./serviceProviderRoutes";
import customerRoutes from "./customerRoutes";
import { adminRoutes } from "./adminRoutes";

// REASON WHY ROUTE ARRAY AND SIDEBAT ARRAY IS DIFFERENT BECUASWE ROUTE HAS NESTING LOGIC IE WE CAN WRAP ROUTES UNDER ROUTE AND WE JUST NEED TO PASS ROUTE EG
// PRODUCST=> CHILD ROUOTE IS ITEMS SO LINK PRO OF CHILD WILL ONLY BE ITEMS ,AND IT WILL AUTOAMTICALLY CREATE PRODUCTS/ITEMS

const generateRouty = (SideBarList)=>{

    let permission = localStorage.getItem('permission_granted')

    return SideBarList.map((route,index)=>{

      // THIS IS TO HELP GENERATE ROUTES BASED ON ROLES ASSIGNED IN CASE OF SERVICE PROVIDER ONLY
      if(!route.role || permission?.includes(route?.role) ||  permission?.includes('All') ){
        return (<Route
          path={route.link}
          element={route.component}
          key={index}
        >
          {route.subList && generateRouty(route.subList)}
        </Route>)}
    })
}


export const raeesRoute = generateRouty(serviceRoutes)
export const customerRoute = generateRouty(customerRoutes)
export const adminRoute = generateRouty(adminRoutes)
