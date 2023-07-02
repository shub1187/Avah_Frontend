import UserPageLayout from "../pages/dashboard/UserPageLayout";
import { RouteType } from "./config";
 import ChangelogPage from "../pages/changelog/ChangelogPage";
import ServiceProviderPage from "../pages/dashboard/user/page/ServiceProviderPage";

import Homepage from "../pages/home/HomePage";
import RolesPageLayout from "../pages/dashboard/RolesPageLayout";
import ManufacturersPage from "../pages/dashboard/roles/page/ManufacturersPage";
import VehicleSettingsLayout from "../pages/dashboard/VehicleSettingsLayout";
import CategoryLayout from "../pages/dashboard/CategoryLayout";
import CategoryComponent from "../pages/dashboard/category/CategoryComponent";
import SubCategoryComponent from "../pages/dashboard/category/SubCategoryComponent";
import SpCustomersPage from "../serviceprovider/page/dashboard/user/page/SpCustomersPage";
import SpUserPageLayout from "../serviceprovider/page/dashboard/SpUserPageLayout";
import SpEmployeePage from "../serviceprovider/page/dashboard/user/page/SpEmployeePage";
import CommonLayout from "../serviceprovider/page/dashboard/CommonLayout";
import SparePage from "../serviceprovider/page/dashboard/spares/SparePage";
import DashboardIndex from "../serviceprovider/page/dashboard/DashboardIndex";

const spAppRoutes: RouteType[] = [
  {
    index: true,
    element: <Homepage />,
    state: "home",
    tabIndex:"0",
  },
  
  {
   path: "/dashboard/home",
    element: <Homepage />,
    state: "home",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Home",
      icon: require('./../assets/img/sidebar/user.png')
    }
  },
  {
   path: "/dashboard/user",
    element: <SpUserPageLayout />,
    tabIndex:"0",
    state: "user",
    sidebarProps: {
      displayText: "User",
      icon: require('./../assets/img/sidebar/user.png')
    },
    child: [
      {
        index: true,
        element: <SpCustomersPage />,
        tabIndex:"0",
        childView:true,
        state: "user",
      },
      {
        
       path: "/dashboard/user/customer",
        element: <SpCustomersPage />,
        index: true,
        tabIndex:"1",
        childView:true,
        state: "user.customer",
        sidebarProps: {
          displayText: "Customers",
          icon: ""

        },
      },
      {
       path: "/dashboard/user/employees",
        element: <SpEmployeePage />,
        tabIndex:"2",
        childView:true,
        state: "user.employees",
        sidebarProps: {
          displayText: "Employees",
          icon: ""
        }
      }
    ]
  },
  
  {
   path: "/dashboard/spares",
    element: <SparePage />,
    state: "spares",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Spares",
      icon: require('./../assets/img/sidebar/role.png')
    }
  },
  {
   path: "/dashboard/labour",
    element: <DashboardIndex />,
    state: "labour",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Labour",
      icon:require('./../assets/img/sidebar/vehicle.png')
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        childView:true,
        tabIndex:"0",
        state: "labour",
      },
      {
        
       path: "/dashboard/labour/labourlist",
        element: <DashboardIndex />,
         childView:true,
        tabIndex:"1",
        state: "labour.labourlist",
        sidebarProps: {
          displayText: "Labour List",
          icon: ""

        },
      }
      
    ]
  }
  ,
  {
   path: "/dashboard/service_type",
    element: <DashboardIndex />,
    state: "service_type",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Service Type",
      icon:require('./../assets/img/sidebar/category.png')
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        childView:true,
        tabIndex:"0",
        state: "service_type",
      },
      {
        
       path: "/dashboard/service_type/service_type_list",
        element: <DashboardIndex />,
         childView:true,
        tabIndex:"1",
        state: "service_type.service_type_list",
        sidebarProps: {
          displayText: "Service List",
          icon: ""

        },
      }
    ]
  }
  ,
  {
   path: "/dashboard/service",
    element: <DashboardIndex />,
    state: "service",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Service",
      icon:require('./../assets/img/sidebar/subcategory.png')
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        childView:true,
        tabIndex:"0",
        state: "service",
      },
      {
        
       path: "/dashboard/service/estimateslist",
        element: <DashboardIndex />,
         childView:true,
        tabIndex:"1",
        state: "service.estimateslist",
        sidebarProps: {
          displayText: "Estimates List",
          icon: ""

        },
      },
      {
        
        path: "/dashboard/service/appointment_list",
         element: <DashboardIndex />,
          childView:true,
         tabIndex:"1",
         state: "service.appointment_list",
         sidebarProps: {
           displayText: "Appointment List",
           icon: ""
 
         },
       },
       {
        
        path: "/dashboard/service/jobc_ards_list",
         element: <DashboardIndex />,
          childView:true,
         tabIndex:"1",
         state: "service.jobc_ards_list",
         sidebarProps: {
           displayText: "Job Cards List",
           icon: ""
 
         },
       }

    ]
  }
  ,
  {
   path: "/dashboard/billing",
    element: <DashboardIndex />,
    state: "billing",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Billing",
      icon:require('./../assets/img/sidebar/request.png')
    }
  }

  ,
  {
   path: "/dashboard/package",
    element: <DashboardIndex />,
    state: "package",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Packages",
      icon:require('./../assets/img/sidebar/package.png')
    }
  }
  ,
 
 


  {
   path: "/dashboard/reviews",
    element: <DashboardIndex />,
    state: "reviews",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Reviews",
      icon:require('./../assets/img/sidebar/reviews.png')
    }
  }
 ,
  {
   path: "/dashboard/settings",
    element: <DashboardIndex />,
    state: "settings",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Settings",
      icon:require('./../assets/img/sidebar/setting.png')
    }
  }
];

export default spAppRoutes;