
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
        USERS:{
            CUSTOMER:{

            },
            EMPLOYEES:{
                getAllEmployee : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllEmployee`),
                createEmployee :replaceUrl(`${BASE_URL}/api/serviceprovider/createEmployee`),
                getAllPermissionPerRoles : replaceUrl(`${BASE_URL}http://localhost:3008/api/serviceprovider/getAllPermissionPerRoles`)

            }
        },
        SPARES : {
            addspare: replaceUrl(`${BASE_URL}/api/serviceprovider/addspare`),
            getAllSpares : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllSpares`),
            getAllFuelTypes:replaceUrl(`${BASE_URL}/api/admin/getAllFuelTypes`),
            deleteSpare : replaceUrl(`${BASE_URL}/api/serviceprovider/deleteSpare`),
        },
        LABOURS : {
            addlabour: replaceUrl(`${BASE_URL}/api/serviceprovider/addlabour`),
            getAllLabour : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllLabour`),
            deleteLabour : replaceUrl(`${BASE_URL}/api/serviceprovider/deleteLabour`),
        },
        ROLE:{
            addEmployeeRole : replaceUrl(`${BASE_URL}/api/serviceprovider/addEmployeeRole`),
            getAllEmployeeRoles : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllEmployeeRoles`)
        },  
        SERVICE:{
            ESTIMATE:{
                getAllSpareListForAutoFill: replaceUrl(`${BASE_URL}/api/serviceprovider/getAllSpareListForAutoFill`),
                getSpecificSpareDetailsForEstimate : replaceUrl(`${BASE_URL}/api/serviceprovider/getSpecificSpareDetailsForEstimate`),
                getAllLabourListForAutoFill : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllLabourListForAutoFill`),
                getSpecificLabourDetailsForEstimate : replaceUrl(`${BASE_URL}/api/serviceprovider/getSpecificLabourDetailsForEstimate`),
                addEstimate : replaceUrl(`${BASE_URL}/api/serviceprovider/addEstimate`),
                getEstimatePendingVehcileList : replaceUrl(`${BASE_URL}/api/serviceprovider/getEstimatePendingVehcileList`),
                getSpecificVechicleDetailsToCreateEstimate : replaceUrl(`${BASE_URL}/api/serviceprovider/getSpecificVechicleDetailsToCreateEstimate`),
                getAllCreatedEstimateList : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllCreatedEstimateList`),
                getEstimateDetails : replaceUrl(`${BASE_URL}/api/serviceprovider/getEstimateDetails`),
                editEstimate : replaceUrl(`${BASE_URL}/api/serviceprovider/editEstimate`)


            },
            APPOINTMENT:{
                addEstimate : replaceUrl(`${BASE_URL}/api/serviceprovider/addEstimate`),
                getAllLabourListForAutoFill : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllLabourListForAutoFill`),
                getAllSpareListForAutoFill: replaceUrl(`${BASE_URL}/api/serviceprovider/getAllSpareListForAutoFill`),
                getSpecificSpareDetailsForEstimate : replaceUrl(`${BASE_URL}/api/serviceprovider/getSpecificSpareDetailsForEstimate`),
                getSpecificLabourDetailsForEstimate : replaceUrl(`${BASE_URL}/api/serviceprovider/getSpecificLabourDetailsForEstimate`),

            }
        },
        NOTIFICATION:{
            getNotificationNumbers : replaceUrl(`${BASE_URL}http://localhost:3008/api/serviceprovider/getNotificationNumbers`)
        },

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