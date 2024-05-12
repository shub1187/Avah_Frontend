
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
        getAllCitiesPerState : replaceUrl(`${BASE_URL}/api/customer/getAllCitiesPerState`),
        customerResetPassword : replaceUrl(`${BASE_URL}/api/customer/resetPassword`),
        serviceprovideResetPassword : replaceUrl(`${BASE_URL}/api/serviceprovider/resetPassword`),
        adminResetPassword : replaceUrl(`${BASE_URL}/api/admin/resetPassword`)
    },
    ADMIN:{
        HOME:{
            getStatistics : replaceUrl(`${BASE_URL}/api/admin/getStatistics`)
        },
        USER:{
            CUSTOMER:{
                getAllCustomers :  replaceUrl(`${BASE_URL}/api/admin/getAllCustomers`)

            },
            SERVICEPROVIDER:{
                getAllApprovedSp : replaceUrl(`${BASE_URL}/api/admin/getAllApprovedSp`),
                getAllRejectedSp : replaceUrl(`${BASE_URL}/api/admin/getAllRejectedSp`)

            }
        },
        VEHICLESETTINGS:{
            FUELTYPE:{
                getAllFuelTypes : replaceUrl(`${BASE_URL}/api/admin/getAllFuelTypes`),
                createFuelType : replaceUrl(`${BASE_URL}/api/admin/createFuelType`)

            },
            MANUFACTURER:{
                createBrand : replaceUrl(`${BASE_URL}/api/admin/createBrand`),
                getAllBrands : replaceUrl(`${BASE_URL}/api/admin/getAllBrands`)

            },
            MODELS:{
                getAllModels : replaceUrl(`${BASE_URL}/api/admin/getAllModels`),
                getAllBrandsAutoFill : replaceUrl(`${BASE_URL}/api/admin/getAllBrandsAutoFill`),
                getAllFuelTypeAutoFill : replaceUrl(`${BASE_URL}/api/admin/getAllFuelTypeAutoFill`),
                createModel : replaceUrl(`${BASE_URL}/api/admin/createModel`)

            }
        },
        REQUESTS:{
            PENDINGREQUESTS:{
                approveServiceProvider : replaceUrl(`${BASE_URL}/api/admin/approveServiceProvider`)    ,
                spRequest : replaceUrl(`${BASE_URL}/api/admin/spRequest`)  
            }
        }
    },
    SERVICE_PROVIDER:{
        USERS:{
            CUSTOMER:{

            },
            EMPLOYEES:{
                getAllEmployee : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllEmployee`),
                createEmployee :replaceUrl(`${BASE_URL}/api/serviceprovider/createEmployee`),
                getAllPermissionPerRoles : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllPermissionPerRoles`)

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
            getAllEmployeeRoles : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllEmployeeRoles`),
            deleteEmployeeRole : replaceUrl(`${BASE_URL}/api/serviceprovider/deleteEmployeeRole`),
            editEmployeeRole :  replaceUrl(`${BASE_URL}/api/serviceprovider/editEmployeeRole`)

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
                getAllVehicleList : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllVehicleList`),
                getSpecificVehicleDetailsForSpAppt : replaceUrl(`${BASE_URL}/api/serviceprovider/getSpecificVehicleDetailsForSpAppt`),
                createAppointment: replaceUrl(`${BASE_URL}/api/customer/createAppointment`)


            },
            JOBCARD:{
                getJobcardDetails : replaceUrl(`${BASE_URL}/api/serviceprovider/getJobcardDetails`),
                updateJobcard : replaceUrl(`${BASE_URL}/api/serviceprovider/updateJobcard`),
                getAllTechnicianEmployee : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllTechnicianEmployee`),
                getAllAdminAdvisorEmployee : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllAdminAdvisorEmployee`),
                getAllCreatedJobcardList :replaceUrl(`${BASE_URL}/api/serviceprovider/getAllCreatedJobcardList`),
                getAllSpareListForAutoFill: replaceUrl(`${BASE_URL}/api/serviceprovider/getAllSpareListForAutoFill`),
                getSpecificSpareDetailsForEstimate : replaceUrl(`${BASE_URL}/api/serviceprovider/getSpecificSpareDetailsForEstimate`),
                getAllLabourListForAutoFill : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllLabourListForAutoFill`),
                getSpecificLabourDetailsForEstimate : replaceUrl(`${BASE_URL}/api/serviceprovider/getSpecificLabourDetailsForEstimate`),
                generateInvoice :   replaceUrl(`${BASE_URL}/api/serviceprovider/generateInvoice`)

            }
        },
        BILLING : {
            PENDINGPAYMENTS : {
                getAllPendingPaymentInvoices : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllPendingPaymentInvoices`),
                getJobcardDetails : replaceUrl(`${BASE_URL}/api/serviceprovider/getJobcardDetails`),
                recievePayment : replaceUrl(`${BASE_URL}/api/serviceprovider/recievePayment`)
            },
            PAIDINVOICES : {
                getAllPaidInvoices: replaceUrl(`${BASE_URL}/api/serviceprovider/getAllPaidInvoices`),
                getJobcardDetails : replaceUrl(`${BASE_URL}/api/serviceprovider/getJobcardDetails`),

            }

        },
        NOTIFICATION:{
            getNotificationNumbers : replaceUrl(`${BASE_URL}/api/serviceprovider/getNotificationNumbers`)
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
        },
        APPOINTMENT:{
            getEstimateDetails : replaceUrl(`${BASE_URL}/api/serviceprovider/getEstimateDetails`),
            estimateApproval : replaceUrl(`${BASE_URL}/api/customer/estimateApproval`),
            estimateRejection : replaceUrl(`${BASE_URL}/api/customer/estimateRejection`),
            createAppointment :  replaceUrl(`${BASE_URL}/api/customer/createAppointment`),
            getJobcardDetails : replaceUrl(`${BASE_URL}/api/serviceprovider/getJobcardDetails`)
        }
    }

}

export default URL