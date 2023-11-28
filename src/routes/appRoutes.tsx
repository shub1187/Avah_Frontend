import UserPageLayout from "../pages/dashboard/UserPageLayout";
import { RouteType } from "./config";
import CustomersPage from "../pages/dashboard/user/page/CustomersPage";
import ServiceProviderPage from "../pages/dashboard/user/page/ServiceProviderPage";
import DealersPage from "../pages/dashboard/user/page/DealersPage";
import ModeratorsPage from "../pages/dashboard/user/page/ModeratorsPage";
import Homepage from "../pages/home/HomePage";
import ManufacturersPage from "../pages/dashboard/roles/page/ManufacturersPage";
import ModelsPage from "../pages/dashboard/roles/page/ModelsPage";
import FuelTypePage from "../pages/dashboard/roles/page/FuelTypePage";
import VehicleSettingsLayout from "../pages/dashboard/VehicleSettingsLayout";
import CategoryLayout from "../pages/dashboard/CategoryLayout";
import CategoryComponent from "../pages/dashboard/category/CategoryComponent";
import SubCategoryComponent from "../pages/dashboard/category/SubCategoryComponent";
import ServiceCategoryComponent from "../pages/dashboard/category/ServiceCategoryComponent";
import DashboardIndex from "../serviceprovider/page/dashboard/DashboardIndex";
import RequestsLayout from "pages/dashboard/RequestsLayout";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <Homepage />,
    state: "home",
    tabIndex:"0",
  },
  
  {
   path: "/admin/dashboard/home",
    element: <Homepage />,
    state: "home",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Home",
      icon: require('./../assets/img/sidebar/user.png')
    }
  },
  {
   path: "/admin/dashboard/user",
    element: <UserPageLayout />,
    tabIndex:"0",
    state: "user",
    sidebarProps: {
      displayText: "User",
      icon: require('./../assets/img/sidebar/user.png')
    },
    child: [
      {
        index: true,
        element: <CustomersPage />,
        tabIndex:"0",
        childView:true,
        state: "user",
      },
      {
        
       path: "/admin/dashboard/user/customer",
        element: <CustomersPage />,
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
       path: "/admin/dashboard/user/service_providers",
        element: <ServiceProviderPage />,
        tabIndex:"2",
        childView:true,
        state: "user.service_providers",
        sidebarProps: {
          displayText: "Service Providers",
          icon: ""
        }
      },
      {
       path: "/admin/dashboard/user/dealers",
        element: <DealersPage />,
        state: "user.dealers",
        tabIndex:"3",
         childView:true,

        sidebarProps: {
          displayText: "Dealers",
          icon: ""

        }
      },
      {
        path: "/admin/dashboard/user/moderators",
         element: <ModeratorsPage />,
         state: "user.moderators",
         tabIndex:"2",
          childView:true,
 
         sidebarProps: {
           displayText: "Moderators",
           icon: ""
         }
       }
    ]
  },
  // {
  //  path: "/dashboard/component",
  //   element: <ComponentPageLayout />,
  //   state: "component",
  //   sidebarProps: {
  //     displayText: "Components",
  //     icon: <AppsOutlinedIcon />
  //   },
  //   child: [
  //     {
  //       index: true,
  //       element: <AlertPage />,
  //       childView:true,
  //       state: "component",
  //     },
  //     {
  //      path: "/dashboard/component/alert",
  //       element: <AlertPage />,
  //       state: "component.alert",
  //       sidebarProps: {
  //         displayText: "Alert"
  //       },
  //     },
  //     {
  //      path: "/dashboard/component/button",
  //       element: <ButtonPage />,
  //       state: "component.button",
  //       sidebarProps: {
  //         displayText: "Button"
  //       }
  //     }
  //   ]
  // },
  {
   path: "/admin/dashboard/roles",
    element: <DashboardIndex />,
    state: "roles",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Roles",
      icon: require('./../assets/img/sidebar/role.png')
    }
  },
  {
   path: "/admin/dashboard/vehicle_settings",
    element: <VehicleSettingsLayout />,
    state: "vehicle_settings",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Vehicle Settings",
      icon:require('./../assets/img/sidebar/vehicle.png')
    },
    child: [
      {
        index: true,
        element: <ManufacturersPage />,
        childView:true,
        tabIndex:"0",
        state: "vehicle_settings",
      },
      {
        
       path: "/admin/dashboard/vehicle_settings/manufacturers",
        element: <ManufacturersPage />,
         childView:true,
        tabIndex:"1",
        state: "vehicle_settings.manufacturers",
        sidebarProps: {
          displayText: "Manufacturers",
          icon: ""

        },
      },
      {
       path: "/admin/dashboard/vehicle_settings/models",
        element: <ModelsPage />,
         childView:true,
        tabIndex:"1",
        state: "vehicle_settings.models",
        sidebarProps: {
          displayText: "Models",
          icon: ""
        }
      },
      {
       path: "/admin/dashboard/vehicle_settings/fuel_type",
        element: <FuelTypePage />,
        state: "vehicle_settings.fuel_type",
        tabIndex:"2",
         childView:true,

        sidebarProps: {
          displayText: "Fuel Type",
          icon: ""

        }
      }
    ]
  }
  ,
  {
   path: "/admin/dashboard/category",
    element: <CategoryLayout />,
    state: "category",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Category",
      icon:require('./../assets/img/sidebar/category.png')
    },
    child: [
      {
        index: true,
        element: <CategoryComponent />,
        childView:true,
        tabIndex:"0",
        state: "category",
      },
      {
        
       path: "/admin/dashboard/category/category",
        element: <CategoryComponent />,
         childView:true,
        tabIndex:"1",
        state: "category.category",
        sidebarProps: {
          displayText: "Manage Categories",
          icon: ""

        },
      }
    ]
  }
  ,
  {
   path: "/admin/dashboard/subcategory",
    element: <CategoryLayout />,
    state: "subcategory",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Sub Category",
      icon:require('./../assets/img/sidebar/subcategory.png')
    },
    child: [
      {
        index: true,
        element: <SubCategoryComponent />,
        childView:true,
        tabIndex:"0",
        state: "subcategory",
      },
      {
        
       path: "/admin/dashboard/subcategory/subcategory",
        element: <SubCategoryComponent />,
         childView:true,
        tabIndex:"1",
        state: "subcategory.subcategory",
        sidebarProps: {
          displayText: "Manage Sub Categories",
          icon: ""

        },
      }
    ]
  }
  ,
  {
   path: "/admin/dashboard/service_category",
    element: <CategoryLayout />,
    state: "service_category",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Service Category",
      icon:require('./../assets/img/sidebar/service.png')
    },
    child: [
      {
        index: true,
        element: <ServiceCategoryComponent />,
        childView:true,
        tabIndex:"0",
        state: "service_category",
      },
      {
        
       path: "/admin/dashboard/service_category/service_category",
        element: <ServiceCategoryComponent />,
        childView:true,
        tabIndex:"1",
        state: "service_category.service_category",
        sidebarProps: {
          displayText: "Manage Sub Categories",
          icon: ""

        },
      }
    ]
  }
  ,
  {
   path: "/admin/dashboard/requests",
    element: <RequestsLayout />,
    state: "requests",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Requests",
      icon:require('./../assets/img/sidebar/request.png')
    }
  }

  ,
  {
   path: "/admin/dashboard/package",
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
   path: "/admin/dashboard/Orders",
    element: <DashboardIndex />,
    state: "Orders",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Orders",
      icon:require('./../assets/img/sidebar/order.png')
    }
  }
  ,
  {
   path: "/admin/dashboard/service_records",
    element: <DashboardIndex />,
    state: "service_records",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Service Records",
      icon:require('./../assets/img/sidebar/servicerecords.png')
    }
  },

  {
   path: "/admin/dashboard/reports",
    element: <DashboardIndex />,
    state: "reports",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Reports",
      icon:require('./../assets/img/sidebar/report.png')
    }
  },
  {
   path: "/admin/dashboard/reviews",
    element: <DashboardIndex />,
    state: "reviews",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Reviews",
      icon:require('./../assets/img/sidebar/reviews.png')
    }
  }
  ,  {
   path: "/admin/dashboard/notification",
    element: <DashboardIndex />,
    state: "notification",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Notifications",
      icon:require('./../assets/img/sidebar/notification.png')
    }
  },
  {
   path: "/admin/dashboard/banner",
    element: <DashboardIndex />,
    state: "banner",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Banners",
      icon:require('./../assets/img/sidebar/banner.png')
    }
  }
  , {
   path: "/admin/dashboard/webpage",
    element: <DashboardIndex />,
    state: "webpage",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Web Pages",
      icon:require('./../assets/img/sidebar/webpage.png')
    }
  }, {
   path: "/admin/dashboard/support_tickets",
    element: <DashboardIndex />,
    state: "support_tickets",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Support Tickets",
      icon:require('./../assets/img/sidebar/supportreq.png')
    }
  },
  {
   path: "/admin/dashboard/settings",
    element: <DashboardIndex />,
    state: "settings",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Settings",
      icon:require('./../assets/img/sidebar/setting.png')
    }
  }
];

export default appRoutes;