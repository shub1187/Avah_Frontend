import CustomerHome from "pages/Customer/Home/CustomerHome";
import CustomerVehicle from "pages/Customer/Vehicle/CustomerVehicle";



const customerRoutes = [
    {
        id:1,
        link:'customer/home',
        component:<CustomerHome/>

    },
    {
        id:2,
        link:'customer/vehicle',
        component:<CustomerVehicle/>

    }
]

export default customerRoutes