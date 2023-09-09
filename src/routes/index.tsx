import { ReactNode } from "react";
import { Route } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import appRoutes from "./appRoutes";
import { RouteType } from "./config";
// import spAppRoutes from "./spRoutes";
import ServiceProviderHome from "pages/serviceProvider/Home";
import SpCustomersPage from "serviceprovider/page/dashboard/user/page/SpCustomersPage";
import SpEmployeePage from "serviceprovider/page/dashboard/user/page/SpEmployeePage";
import serviceRoutes from "./serviceProviderRoutes";
import customerRoutes from "./customerRoutes";

const generateRoute = (routes: RouteType[]): ReactNode => {
  return routes.map((route, index) => (
    route.index ? (
      <Route
        index
        path={route.path}
        element={<PageWrapper state={route.state}>
          {route.element}
        </PageWrapper>}
        key={index}
      />
    ) : (
      <Route
        path={route.path}
        element={
          <PageWrapper state={route.child ? undefined : route.state}>
            {route.element}
          </PageWrapper>
        }
        key={index}
      >
        {route.child && (
          generateRoute(route.child)
        )}
      </Route>
    )
  ));
};


const generateRouty = (SideBarList:any)=>{
  return SideBarList.map((route:any,index:any)=>(
    <Route
      path={route.link}
      element={route.component}
      key={index}
    >
      {route.subList && generateRouty(route.subList)}
    </Route>
  ))
  return (
    <Route>
      <Route element={<ServiceProviderHome/>} path="dashboard/home"></Route>
      <Route path="dashboard/user">
        <Route element={<SpCustomersPage/>} path="customer"></Route>
        <Route element={<SpEmployeePage/>} path="employees"></Route>
      </Route>
      <Route>

      </Route>
    </Route>
  )
}

// const generateRouty = (routes: any[]): ReactNode => {
//   return routes.map((route: any, index: number) => (
//     <Route
//       path={route.link}
//       element={route.component}
//       key={index}
//     >
//       {route.subList && generateRouty(route.subList)} {/* Recursively handle subList */}
//     </Route>
//   ));
// };
export const routes: ReactNode = generateRoute(appRoutes);
// export const spRoutes: ReactNode = generateRoute(spAppRoutes);
export const raeesRoute:any = generateRouty(serviceRoutes)
export const customerRoute:any = generateRouty(customerRoutes)