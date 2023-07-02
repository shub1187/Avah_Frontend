import UserPageLayout from "../pages/dashboard/UserPageLayout";
import { RouteType } from "./config";
import CustomersPage from "../pages/dashboard/user/page/CustomersPage";
 import ChangelogPage from "../pages/changelog/ChangelogPage";
import ServiceProviderPage from "../pages/dashboard/user/page/ServiceProviderPage";
import DealersPage from "../pages/dashboard/user/page/DealersPage";

import Homepage from "../pages/home/HomePage";
import RolesPageLayout from "../pages/dashboard/RolesPageLayout";
import ManufacturersPage from "../pages/dashboard/roles/page/ManufacturersPage";
import ModelsPage from "../pages/dashboard/roles/page/ModelsPage";
import FuelTypePage from "../pages/dashboard/roles/page/FuelTypePage";
import VehicleSettingsLayout from "../pages/dashboard/VehicleSettingsLayout";
import CategoryLayout from "../pages/dashboard/CategoryLayout";
import CategoryComponent from "../pages/dashboard/category/CategoryComponent";
import SubCategoryComponent from "../pages/dashboard/category/SubCategoryComponent";
import ServiceCategoryComponent from "../pages/dashboard/category/ServiceCategoryComponent";
import DashboardIndex from "../serviceprovider/page/dashboard/DashboardIndex";

const appRoutes: RouteType[] = [
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
        
       path: "/dashboard/user/customer",
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
       path: "/dashboard/user/service_providers",
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
       path: "/dashboard/user/dealers",
        element: <DealersPage />,
        state: "user.dealers",
        tabIndex:"3",
         childView:true,

        sidebarProps: {
          displayText: "Dealers",
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
   path: "/dashboard/roles",
    element: <DashboardIndex />,
    state: "roles",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Roles",
      icon: require('./../assets/img/sidebar/role.png')
    }
  },
  {
   path: "/dashboard/vehicle_settings",
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
        
       path: "/dashboard/vehicle_settings/manufacturers",
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
       path: "/dashboard/vehicle_settings/models",
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
       path: "/dashboard/vehicle_settings/fuel_type",
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
   path: "/dashboard/category",
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
        
       path: "/dashboard/category/category",
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
   path: "/dashboard/subcategory",
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
        
       path: "/dashboard/subcategory/subcategory",
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
   path: "/dashboard/service_category",
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
        
       path: "/dashboard/service_category/service_category",
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
   path: "/dashboard/requests",
    element: <DashboardIndex />,
    state: "requests",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Requests",
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
   path: "/dashboard/Orders",
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
   path: "/dashboard/service_records",
    element: <DashboardIndex />,
    state: "service_records",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Service Records",
      icon:require('./../assets/img/sidebar/servicerecords.png')
    }
  },

  {
   path: "/dashboard/reports",
    element: <DashboardIndex />,
    state: "reports",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Reports",
      icon:require('./../assets/img/sidebar/report.png')
    }
  },
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
  ,  {
   path: "/dashboard/notification",
    element: <DashboardIndex />,
    state: "notification",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Notifications",
      icon:require('./../assets/img/sidebar/notification.png')
    }
  },
  {
   path: "/dashboard/banner",
    element: <DashboardIndex />,
    state: "banner",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Banners",
      icon:require('./../assets/img/sidebar/banner.png')
    }
  }
  , {
   path: "/dashboard/webpage",
    element: <DashboardIndex />,
    state: "webpage",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Web Pages",
      icon:require('./../assets/img/sidebar/webpage.png')
    }
  }, {
   path: "/dashboard/support_tickets",
    element: <DashboardIndex />,
    state: "support_tickets",
    tabIndex:"0",
    sidebarProps: {
      displayText: "Support Tickets",
      icon:require('./../assets/img/sidebar/supportreq.png')
    }
  },
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

export default appRoutes;