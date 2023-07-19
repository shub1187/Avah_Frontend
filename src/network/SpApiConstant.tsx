// export const FETCH_REQUEST = 'FETCH_REQUEST'
// export const FETCH_SUCCESS = 'FETCH_SUCCESS'
// export const FETCH_FAILURE = 'FETCH_FAILURE'
// export const RESET_PAGE="RESET_PAGE" 
// export const GET_FULL_LIST="GET_FULL_LIST"
// export const SUB_CATE_GET_FULL_LIST="SUB_CATE_GET_FULL_LIST"

// export const RELOAD_PAGE="RELOAD_PAGE" 


// export const CREATE_USER = 'CREATE_USER'
// export const GET_USER_DETAIL = 'GET_USER_DETAIL'
// export const SET_USER_STATUS = 'SET_USER_STATUS'
// export const UPDATE_USER_DETAIL = 'UPDATE_USER_DETAIL'
// export const DELETE_USER_DETAIL = 'DELETE_USER_DETAIL'
// export const UPDATE_USER_PASSWORD = 'UPDATE_USER_PASSWORD'

// export const USER_RESET = 'USER_RESET'

//export const DISMISS_DIALOG = 'DISMISS_DIALOG'

export const FETCH_LOGIN_SUCCESS_SP = 'FETCH_LOGIN_SUCCESS_SP'


const BASE_URL = 'http://localhost:3008'
const folder='/api/serviceprovider/'
const url=BASE_URL+folder

let numPagePer=10
export const LOGIN_URL_SP = url + "login"
export const REGISTER_URL_SP = url + "login"
export const USER_URL_SP=(pageNo:string) => url+`getAllUsers?page=${pageNo}&numberPerPage=${numPagePer}`
export const SEARCH_URL_SP=(pageNo:string,props:string) => url+`getUserSearch?page=${pageNo}&numberPerPage=${numPagePer}&searchText=`+props

export const CREATE_USER_URL_SP= url+'createUser'
export const GET_USER_DETAIL_URL_SP= url+'getUserById'
export const SET_USER_STATUS_URL_SP= url+'updateUserActive'
export const UPDATE_USER_DETAIL_URL_SP= url+'updateUserDetail'
export const DELETE_USER_DETAIL_URL_SP= url+'deleteUser'
export const UPDATE_USER_PASSWORD_URL_SP= url+'updateUserPassword'

//service provider
export const employee_provider_api=(pageNo:string) => url+`getAllEmployee?page=${pageNo}&numberPerPage=${numPagePer}`
export const employee_provider_search_api=(pageNo:string,props:string) => url+`getEmployeeSearch?page=${pageNo}&numberPerPage=${numPagePer}&searchText=`+props

export const SP_CREATE_EMPLOYEE_URL= url+'createEmployee'
export const SP_GET_EMPLOYEE_DETAIL_URL= url+'getEmployeeById'
export const SP_SET_EMPLOYEE_STATUS_URL= url+'updateEmployeeActive'
export const SP_UPDATE_EMPLOYEE_DETAIL_URL= url+'updateEmployeeDetail'
export const SP_DELETE_EMPLOYEE_DETAIL_URL= url+'deleteEmployee'
export const SP_UPDATE_EMPLOYEE_PASSWORD_URL= url+'updateEmployeePassword'

//manufacturers_page
export const spares_page_api=(pageNo:string) => url+`getAllSpare?page=${pageNo}&numberPerPage=${numPagePer}`
export const spares_page_search_api=(pageNo:string,props:string) => url+`getSpareSearch?page=${pageNo}&numberPerPage=${numPagePer}&searchText=`+props
export const spares_get_full_page_api= url+`getAllBrands?page=0&numberPerPage=10`

export const SPARES_CREATE_URL= url+'createSpare'
export const SPARES_GET_DETAIL_URL= url+'getSpareById'
export const SPARES_SET_STATUS_URL= url+'updateSpareActive'
export const SPARES_UPDATE_DETAIL_URL= url+'updateSpareDetail'
export const SPARES_DELETE_DETAIL_URL= url+'deleteSpare'


//model_page
export const model_page_api=(pageNo:string) => BASE_URL+`/api/admin/getAllModels?page=${pageNo}&numberPerPage=${numPagePer}`
export const model_page_search_api=(pageNo:string,props:string) => BASE_URL+`/api/admin/getUserSearch?page=${pageNo}&numberPerPage=${numPagePer}&searchText=`+props

export const Model_CREATE_ROLE_URL= url+'createModel'
export const Model_GET_ROLE_DETAIL_URL= url+'getModelById'
export const Model_SET_ROLE_STATUS_URL= url+'updateModelActive'
export const Model_UPDATE_ROLE_DETAIL_URL= url+'updateModelDetail'
export const Model_DELETE_ROLE_DETAIL_URL= url+'deleteModel'


//fuel_page
export const fuel_page_api=(pageNo:string) => BASE_URL+`/api/admin/getAllFuelTypes?page=${pageNo}&numberPerPage=${numPagePer}`
export const fuel_page_search_api=(pageNo:string,props:string) => BASE_URL+`/api/admin/getFuelTypeSearch?page=${pageNo}&numberPerPage=${numPagePer}&searchText=`+props
export const FUEL_CREATE_ROLE_URL= url+'createFuelType'
export const FUEL_GET_ROLE_DETAIL_URL= url+'getFuelTypeById'
export const FUEL_SET_ROLE_STATUS_URL= url+'updateFuelTypeActive'
export const FUEL_UPDATE_ROLE_DETAIL_URL= url+'updateFuelTypeDetail'
export const FUEL_DELETE_ROLE_DETAIL_URL= url+'deleteFuelType'

//category_page
export const category_page_api=(pageNo:string) => BASE_URL+`/api/admin/getAllCategory?page=${pageNo}&numberPerPage=${numPagePer}`
export const category_page_search_api=(pageNo:string,props:string) => BASE_URL+`/api/admin/getCategorySearch?page=${pageNo}&numberPerPage=${numPagePer}&searchText=`+props
export const CATEGORY_CREATE_URL= url+'createCategory'
export const CATEGORY_GET_DETAIL_URL= url+'getCategoryById'
export const CATEGORY_SET_STATUS_URL= url+'updateCategoryActive'
export const CATEGORY_UPDATE_DETAIL_URL= url+'updateCategoryDetail'
export const CATEGORY_DELETE_DETAIL_URL= url+'deleteCategory'
export const category_get_full_page_api= BASE_URL+`/api/admin/getAllCategory?page=0&numberPerPage=10`


//category_page
export const sub_category_page_api=(pageNo:string) => BASE_URL+`/api/admin/getAllSubCategory?page=${pageNo}&numberPerPage=${numPagePer}`
export const sub_category_page_search_api=(pageNo:string,props:string) => BASE_URL+`/api/admin/getSubCategorySearch?page=${pageNo}&numberPerPage=${numPagePer}&searchText=`+props
export const SUB_CATEGORY_CREATE_URL= url+'createSubCategory'
export const SUB_CATEGORY_GET_DETAIL_URL= url+'getSubCategoryById'
export const SUB_CATEGORY_SET_STATUS_URL= url+'updateSubCategoryActive'
export const SUB_CATEGORY_UPDATE_DETAIL_URL= url+'updateSubCategoryDetail'
export const SUB_CATEGORY_DELETE_DETAIL_URL= url+'deleteSubCategory'


//category_page
export const service_category_page_api=(pageNo:string) => BASE_URL+`/api/admin/getAllServiceCategory?page=${pageNo}&numberPerPage=${numPagePer}`
export const service_category_page_search_api=(pageNo:string,props:string) => BASE_URL+`/api/admin/getServiceCategorySearch?page=${pageNo}&numberPerPage=${numPagePer}&searchText=`+props
export const SERVICE_CATEGORY_CREATE_URL= url+'createServiceCategory'
export const SERVICE_CATEGORY_GET_DETAIL_URL= url+'getServiceCategoryById'
export const SERVICE_CATEGORY_SET_STATUS_URL= url+'updateServiceCategoryActive'
export const SERVICE_CATEGORY_UPDATE_DETAIL_URL= url+'updateServiceCategoryDetail'
export const SERVICE_CATEGORY_DELETE_DETAIL_URL= url+'deleteServiceCategory'