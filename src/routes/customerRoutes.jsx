import CustomerAppointment from "pages/Customer/Appointment";
import CustomerDashboard from "pages/Customer/Dashboard";
import CustomerHome from "pages/Customer/LandingPageHome";
import UpdateCustomerProfile from "pages/Customer/UpdateProfile";
import CustomerVehicle from "pages/Customer/Vehicle";



const customerRoutes = [
    {
        id:1,
        link:'customer/home',
        component:<CustomerHome/>

    },
    {
        id:2,
        link:"customer/dashboard",
        component:<CustomerDashboard/>
    },
    {
        id:3,
        link:'customer/vehicle',
        component:<CustomerVehicle/>

    },
    {
        id:4,
        link:'customer/appointment',
        subList:[
            {
            id:41,
            link:'approvedAppointment',
            component:<CustomerAppointment/>
            },
        ]
        },
    {
        id:5,
        link:'customer/profile',
        component:<UpdateCustomerProfile/>

    }
]

export default customerRoutes