
let BASE_URL = 'http://localhost:3008'
let PRODUCTION_URL = 'https://avahservices.com/service'

const replaceUrl =(url)=>{
    if(process.env.NODE_ENV=='production'){
        return url.replace(BASE_URL,PRODUCTION_URL)
    }
    // console.log("line 9 checking url : ", url)
    // console.log("line 10 checking env : ", process.env.NODE_ENV )
    return url
}

// console.log("ln 12 ", PRODUCTION_URL)

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
        adminResetPassword : replaceUrl(`${BASE_URL}/api/admin/resetPassword`),
        getAllBrandsMultiSelect : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllBrandsMultiSelect`)

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
                getAllRejectedSp : replaceUrl(`${BASE_URL}/api/admin/getAllRejectedSp`),
                getSpecificApprovedSpDocument : replaceUrl(`${BASE_URL}/api/admin/getSpecificApprovedSpDocument`),
                getSpecificRejectedSpDocument :  replaceUrl(`${BASE_URL}/api/admin/getSpecificRejectedSpDocument`)
               
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
                spRequest : replaceUrl(`${BASE_URL}/api/admin/spRequest`),
                getSpecificPendingSpDocument : replaceUrl(`${BASE_URL}/api/admin/getSpecificPendingSpDocument`)
            }
        }
    },
    SERVICE_PROVIDER:{
        HOME:{
            getStatistics : replaceUrl(`${BASE_URL}/api/serviceprovider/getStatistics`)
        },
        USERS:{
            CUSTOMER:{

            },
            EMPLOYEES:{
                getAllEmployee : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllEmployee`),
                createEmployee :replaceUrl(`${BASE_URL}/api/serviceprovider/createEmployee`),
                getAllPermissionPerRoles : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllPermissionPerRoles`),
                updateEmployee : replaceUrl(`${BASE_URL}/api/serviceprovider/updateEmployee`),
                deleteEmployee :replaceUrl(`${BASE_URL}/api/serviceprovider/deleteEmployee`)

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
                editEstimate : replaceUrl(`${BASE_URL}/api/serviceprovider/editEstimate`),
                approveCustAppointment : replaceUrl(`${BASE_URL}/api/serviceprovider/approveCustAppointment`),



            },
            APPOINTMENT:{
                addEstimate : replaceUrl(`${BASE_URL}/api/serviceprovider/addEstimate`),
                getAllLabourListForAutoFill : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllLabourListForAutoFill`),
                getAllSpareListForAutoFill: replaceUrl(`${BASE_URL}/api/serviceprovider/getAllSpareListForAutoFill`),
                getSpecificSpareDetailsForEstimate : replaceUrl(`${BASE_URL}/api/serviceprovider/getSpecificSpareDetailsForEstimate`),
                getSpecificLabourDetailsForEstimate : replaceUrl(`${BASE_URL}/api/serviceprovider/getSpecificLabourDetailsForEstimate`),
                getAllVehicleList : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllVehicleList`),
                getSpecificVehicleDetailsForSpAppt : replaceUrl(`${BASE_URL}/api/serviceprovider/getSpecificVehicleDetailsForSpAppt`),
                createAppointment: replaceUrl(`${BASE_URL}/api/customer/createAppointment`),
                getAllPendingAppointment : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllPendingAppointment`),
                getAllRejectedAndCancelledAppointment : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllRejectedAndCancelledAppointment`),
                approveCustAppointment : replaceUrl(`${BASE_URL}/api/serviceprovider/approveCustAppointment`),
                createEstimate : replaceUrl(`${BASE_URL}/api/serviceprovider/createEstimate`),
                getAllModelPerBrand : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllModelPerBrand`),
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
                generateInvoice :   replaceUrl(`${BASE_URL}/api/serviceprovider/generateInvoice`),
                approveCustAppointment : replaceUrl(`${BASE_URL}/api/serviceprovider/approveCustAppointment`),

            }
        },
        BILLING : {
            PENDINGPAYMENTS : {
                getAllPendingPaymentInvoices : replaceUrl(`${BASE_URL}/api/serviceprovider/getAllPendingPaymentInvoices`),
                getJobcardDetails : replaceUrl(`${BASE_URL}/api/serviceprovider/getJobcardDetails`),
                recievePayment : replaceUrl(`${BASE_URL}/api/serviceprovider/recievePayment`),
                approveCustAppointment : replaceUrl(`${BASE_URL}/api/serviceprovider/approveCustAppointment`),
            },
            PAIDINVOICES : {
                getAllPaidInvoices: replaceUrl(`${BASE_URL}/api/serviceprovider/getAllPaidInvoices`),
                getJobcardDetails : replaceUrl(`${BASE_URL}/api/serviceprovider/getJobcardDetails`),
                approveCustAppointment : replaceUrl(`${BASE_URL}/api/serviceprovider/approveCustAppointment`),

            }

        },
        NOTIFICATION:{
            getNotificationNumbers : replaceUrl(`${BASE_URL}/api/serviceprovider/getNotificationNumbers`)
        },

    },
    CUSTOMER:{
        HOME:{
            getStatistics : replaceUrl(`${BASE_URL}/api/customer/getStatistics`)
        },
        LANDINGPAGE:{
            getRandomSp : replaceUrl(`${BASE_URL}/api/customer/getRandomSp`),
            getEstimateDetails : replaceUrl(`${BASE_URL}/api/serviceprovider/getEstimateDetails`),
            getGeneralStatistics :   replaceUrl(`${BASE_URL}/api/customer/getGeneralStatistics`)

        },
        VEHICLE:{
            getAllModelPerBrand:replaceUrl(`${BASE_URL}/api/serviceprovider/getAllModelPerBrand`),
            getAllFuelTypes:replaceUrl(`${BASE_URL}/api/admin/getAllFuelTypes`),
            vehicleRegistration:replaceUrl(`${BASE_URL}/api/customer/vehicleRegistration`),
            getCustomerVehicle : replaceUrl(`${BASE_URL}/api/customer/getCustomerVehicle`),
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
            getJobcardDetails : replaceUrl(`${BASE_URL}/api/serviceprovider/getJobcardDetails`),
            getAllPendingApprovedAppointment : replaceUrl(`${BASE_URL}/api/customer/getAllPendingApprovedAppointment`),
            getAllRejectedCancelledAppointment : replaceUrl(`${BASE_URL}/api/customer/getAllRejectedCancelledAppointment`),
            getSpDetailsPerCity : replaceUrl(`${BASE_URL}/api/customer/getSpDetailsPerCity`),
            getCustomerVehicleNumbers : replaceUrl(`${BASE_URL}/api/customer/getCustomerVehicleNumbers`),
            vehicleSearch : replaceUrl(`${BASE_URL}/api/customer/vehicleSearch`),
           
        }
    }

}

export default URL