
const BASE_URL = "http://localhost:3008"

const PRODUCTION_URL = ''

const LOCAL_STORAGE = {
    sp_id:localStorage.getItem('sp_id')
}

const replaceUrl =(url)=>{
    if(PRODUCTION_URL && process.env.NODE_ENV==='production'){
        return url.replace(BASE_URL,PRODUCTION_URL)
    }
    return url
}

const URL = {
    LOGIN_REGISTER:{
        login_admin:replaceUrl(`${BASE_URL}/api/admin/login`),
        login_service_provider:replaceUrl(`${BASE_URL}/api/serviceprovider/login`),
        login_customer : replaceUrl(`${BASE_URL}/api/customer/login`),
        register_service_provider:replaceUrl(`${BASE_URL}/api/serviceprovider/registerServiceProvider`),
        register_customer:replaceUrl(`${BASE_URL}/api/customer/registerCustomer`),
    },
    ADMIN:{

    },
    SERVICE_PROVIDER:{
        SPARES : {
            addspare: replaceUrl(`${BASE_URL}/api/serviceprovider/addspare`),
            getAllSpares : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllSpares`),
            getAllFuelTypes:replaceUrl(`${BASE_URL}/api/admin/getAllFuelTypes`),
            deleteSpare : replaceUrl(`${BASE_URL}/api/serviceprovider/deleteSpare`)
        },
        LABOURS : {
            addlabour: replaceUrl(`${BASE_URL}/api/serviceprovider/addlabour`),
            getAllLabour : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllLabour`),
            deleteLabour : replaceUrl(`${BASE_URL}/api/serviceprovider/deleteLabour`),
        }

    },
    CUSTOMER:{
        VEHICLE:{
            getAllModelPerBrand:replaceUrl(`${BASE_URL}/api/serviceprovider/getAllModelPerBrand`),
            getAllFuelTypes:replaceUrl(`${BASE_URL}/api/admin/getAllFuelTypes`),
            vehicleRegistration:replaceUrl(`${BASE_URL}/api/customer/vehicleRegistration`),
        },
        UPDATEPROFILE:{
            getAllCitiesPerState:replaceUrl(`${BASE_URL}/api/customer/getAllCitiesPerState`),
            getCustomerProfile:replaceUrl(`${BASE_URL}/api/customer/getCustomerProfile`),
            profileCompletion:replaceUrl(`${BASE_URL}/api/customer/profileCompletion`),
        }
    }

}

export default URL