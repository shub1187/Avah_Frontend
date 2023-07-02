export const LOADING = 'Loading'
export const LOADING_DISMISS = 'Loading_Dismiss'
export const FETCH_REQUEST = 'FETCH_REQUEST'

export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'
export const RESET_PAGE="RESET_PAGE" 
export const GET_FULL_LIST="GET_FULL_LIST"
export const SUB_CATE_GET_FULL_LIST="SUB_CATE_GET_FULL_LIST"

export const RELOAD_PAGE="RELOAD_PAGE" 
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS'
export const LOGIN_LOADER="Login_Loader"
export const Logout = 'Logout'


export const CREATE_USER = 'CREATE_USER'
export const GET_USER_DETAIL = 'GET_USER_DETAIL'
export const SET_USER_STATUS = 'SET_USER_STATUS'
export const UPDATE_USER_DETAIL = 'UPDATE_USER_DETAIL'
export const DELETE_USER_DETAIL = 'DELETE_USER_DETAIL'
export const UPDATE_USER_PASSWORD = 'UPDATE_USER_PASSWORD'

export const USER_RESET = 'USER_RESET'

export const DISMISS_DIALOG = 'DISMISS_DIALOG'



const BASE_URL = 'http://localhost:3008'
const folder='/api/admin/'
const url=BASE_URL+folder

let numPagePer=10
export const LOGIN_URL = url + "login"

export const USER_URL=(pageNo:string) => BASE_URL+`/api/admin/getAllUsers?page=${pageNo}&numberPerPage=${numPagePer}`
export const SEARCH_URL=(pageNo:string,props:string) => BASE_URL+`/api/admin/getUserSearch?page=${pageNo}&numberPerPage=${numPagePer}&searchText=`+props

export const CREATE_USER_URL= url+'createUser'
export const GET_USER_DETAIL_URL= url+'getUserById'
export const SET_USER_STATUS_URL= url+'updateUserActive'
export const UPDATE_USER_DETAIL_URL= url+'updateUserDetail'
export const DELETE_USER_DETAIL_URL= url+'deleteUser'
export const UPDATE_USER_PASSWORD_URL= url+'updatePassword'

//service provider
export const service_provider_api=(pageNo:string) => BASE_URL+`/api/admin/getAllServiceProviders?page=${pageNo}&numberPerPage=${numPagePer}`
export const service_provider_search_api=(pageNo:string,props:string) => BASE_URL+`/api/admin/getServiceProviderSearch?page=${pageNo}&numberPerPage=${numPagePer}&searchText=`+props

export const SP_CREATE_USER_URL= url+'createServiceProvider'
export const SP_GET_USER_DETAIL_URL= url+'getServiceProviderById'
export const SP_SET_USER_STATUS_URL= url+'updateServiceProviderActive'
export const SP_UPDATE_USER_DETAIL_URL= url+'updateServiceProviderDetail'
export const SP_DELETE_USER_DETAIL_URL= url+'deleteServiceProvider'
export const SP_UPDATE_USER_PASSWORD_URL= url+'updatePassword'

//manufacturers_page
export const manufacturers_page_api=(pageNo:string) => BASE_URL+`/api/admin/getAllBrands?page=${pageNo}&numberPerPage=${numPagePer}`
export const manufacturers_page_search_api=(pageNo:string,props:string) => BASE_URL+`/api/admin/getUserSearch?page=${pageNo}&numberPerPage=${numPagePer}&searchText=`+props
export const model_get_full_page_api= BASE_URL+`/api/admin/getAllBrands?page=0&numberPerPage=10`

export const MP_CREATE_ROLE_URL= url+'createbrand'
export const MP_GET_ROLE_DETAIL_URL= url+'getBrandById'
export const MP_SET_ROLE_STATUS_URL= url+'updateBrandActive'
export const MP_UPDATE_ROLE_DETAIL_URL= url+'updateBrandDetail'
export const MP_DELETE_ROLE_DETAIL_URL= url+'deleteBrand'


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