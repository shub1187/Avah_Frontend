import AdminApprovedRequestsPage from "pages/admin/Requests/ApprovedRequests";
import AdminPendingRequestsPage from "pages/admin/Requests/PendingRequests";
import AdminRejectedRequestsPage from "pages/admin/Requests/RejectedRequests";
import AdminCustomerPage from "pages/admin/User/Customer";
import AdminServiceProviderPage from "pages/admin/User/ServiceProvider";
import AdminVehicleFuelPage from "pages/admin/VehicleSettings/FuelType";
import AdminVehicleManufacturerPage from "pages/admin/VehicleSettings/Manufacturer";
import AdminVehicleModelsPage from "pages/admin/VehicleSettings/Models";


export const adminRoutes = [
    {
        id: 1,
        link: 'admin/home',
        component: <></>
    },
    {
        id: 2,
        link: 'admin/user',
        subList: [
            {
                id: 21,
                link: 'customer',
                component: <AdminCustomerPage/>
            },
            {
                id: 22,
                link: 'serviceProvider',
                component: <AdminServiceProviderPage/>
            }
        ]
    },
    {
        id: 3,
        link: 'admin/vehicleSettings',
        subList: [
            {
                id: 31,
                link: 'manufacturers',
                component: <AdminVehicleManufacturerPage/>
            },
            {
                id: 32,
                link: 'models',
                component: <AdminVehicleModelsPage/>
            },
            {
                id: 33,
                link: 'fuelType',
                component: <AdminVehicleFuelPage/>
            }
        ]
    },
    {
        id: 4,
        link: 'admin/requests',
        subList: [
            {
                id: 41,
                link: 'pendingRequests',
                component: <AdminPendingRequestsPage/>
            },
            {
                id: 42,
                link: 'approvedRequests',
                component:<AdminApprovedRequestsPage/>
            },
            {
                id: 43,
                link: 'rejectedRequests',
                component: <AdminRejectedRequestsPage/>
            }
        ]
    }
]