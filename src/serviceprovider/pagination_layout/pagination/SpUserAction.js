import { DELETE_USER_DETAIL, GET_USER_DETAIL, LOADING, SET_USER_STATUS, UPDATE_USER_DETAIL, UPDATE_USER_PASSWORD } from "../../../network/ApiConstant";
import { postRequest } from "../../../network/Client";
import { CREATE_USER_URL_SP, DELETE_USER_DETAIL_URL_SP, GET_USER_DETAIL_URL_SP, SET_USER_STATUS_URL_SP, SPARES_CREATE_URL, SPARES_DELETE_DETAIL_URL, SPARES_GET_DETAIL_URL, SPARES_SET_STATUS_URL, SPARES_UPDATE_DETAIL_URL, SP_CREATE_EMPLOYEE_URL, SP_DELETE_EMPLOYEE_DETAIL_URL, SP_GET_EMPLOYEE_DETAIL_URL, SP_SET_EMPLOYEE_STATUS_URL, SP_UPDATE_EMPLOYEE_DETAIL_URL, SP_UPDATE_EMPLOYEE_PASSWORD_URL, UPDATE_USER_DETAIL_URL_SP, UPDATE_USER_PASSWORD_URL_SP } from "../../../network/SpApiConstant";



export const SpResetValueAction = (type) => {
  return {
    type: type,
  }
}

// ----------------------Add user api-----------------------------
const sp_create_user_api = (menuname) => {
  switch (menuname) {

    case 'SpCustomersPage':
      return CREATE_USER_URL_SP

    case 'SpEmployeePage':
      return SP_CREATE_EMPLOYEE_URL

    case 'SparePage':
      return SPARES_CREATE_URL

    // case 'ModelsPage':
    //   return Model_CREATE_ROLE_URL

    // case 'FuelTypePage':
    //   return FUEL_CREATE_ROLE_URL

    // case 'CategoryPage':
    //   return CATEGORY_CREATE_URL

    // case 'SubCategoryPage':
    //   return SUB_CATEGORY_CREATE_URL

    // case 'ServiceCategoryPage':
    //   return SERVICE_CATEGORY_CREATE_URL


    default:
      return '';
  }
}


export const SPCreateUser = (props, menuname) => {
  console.log(menuname)
  var apiUrl = sp_create_user_api(menuname)
  console.log(apiUrl)
  var body = props;
  let type = "CREATE_USER"

  return (dispatch) => {
    dispatch(SpResetValueAction(LOADING))
    postRequest({ apiUrl, body, dispatch, type })
  }
}

// ----------------------get user  details api-----------------------------

const sp_get_user_details_api = (menuname) => {

  switch (menuname) {

    case 'SpCustomersPage':
      return GET_USER_DETAIL_URL_SP

    case 'SpEmployeePage':
      return SP_GET_EMPLOYEE_DETAIL_URL

    case 'SparePage':
      return SPARES_GET_DETAIL_URL

    // case 'ModelsPage':
    //   return Model_GET_ROLE_DETAIL_URL

    // case 'FuelTypePage':
    //   return FUEL_GET_ROLE_DETAIL_URL

    // case 'CategoryPage':
    //   return CATEGORY_GET_DETAIL_URL

    // case 'SubCategoryPage':
    //   return SUB_CATEGORY_GET_DETAIL_URL

    // case 'ServiceCategoryPage':
    //   return SERVICE_CATEGORY_GET_DETAIL_URL
    default:
      return '';
  }
}

export const sp_UserGetDetailsAction = (props, menuName) => {
  var apiUrl = sp_get_user_details_api(menuName)
    var body = {};
    if (menuName == "SpCustomersPage" || menuName == "SpEmployeePage") {
      body = { "user_id": props }
    } else {
      body = { "id": props }
    }

  let type = GET_USER_DETAIL


  return (dispatch) => {
    dispatch(SpResetValueAction(LOADING))
    postRequest({ apiUrl, body, dispatch, type })
  }
}

// ----------------------update user status api-----------------------------


const update_user_status_api = (menuname) => {
  switch (menuname) {

    case 'SpCustomersPage':
      return SET_USER_STATUS_URL_SP

    case 'SpEmployeePage':
      return SP_SET_EMPLOYEE_STATUS_URL

    case 'SparePage':
      return SPARES_SET_STATUS_URL

    // case 'ModelsPage':
    //   return Model_SET_ROLE_STATUS_URL

    // case 'FuelTypePage':
    //   return FUEL_SET_ROLE_STATUS_URL

    // case 'CategoryPage':
    //   return CATEGORY_SET_STATUS_URL

    // case 'SubCategoryPage':
    //   return SUB_CATEGORY_SET_STATUS_URL

    // case 'ServiceCategoryPage':
    //   return SERVICE_CATEGORY_SET_STATUS_URL


    default:
      return '';
  }
}
export const SpSetUserStatusAction = (profileId, is_active, menuName) => {

  var apiUrl = update_user_status_api(menuName)
  var body = {  };
  if (menuName == "SpCustomersPage" || menuName == "SpEmployeePage") {
    body = { "user_id": profileId, "is_active": is_active };
  } else {
    body = { "id": profileId, "is_active": is_active };
  }
  let type = SET_USER_STATUS

  return (dispatch) => {
    dispatch(SpResetValueAction(LOADING))
    postRequest({ apiUrl, body, dispatch, type })
  }
}

// ----------------------update user details api-----------------------------
const sp_update_user_details_api = (menuname) => {
  switch (menuname) {

    case 'SpCustomersPage':
      return UPDATE_USER_DETAIL_URL_SP

    case 'SpEmployeePage':
      return SP_UPDATE_EMPLOYEE_DETAIL_URL

    case 'SparePage':
      return SPARES_UPDATE_DETAIL_URL

    // case 'ModelsPage':
    //   return Model_UPDATE_ROLE_DETAIL_URL

    // case 'FuelTypePage':
    //   return FUEL_UPDATE_ROLE_DETAIL_URL

    // case 'CategoryPage':
    //   return CATEGORY_UPDATE_DETAIL_URL

    // case 'SubCategoryPage':
    //   return SUB_CATEGORY_UPDATE_DETAIL_URL

    // case 'ServiceCategoryPage':
    //   return SERVICE_CATEGORY_GET_DETAIL_URL


    default:
      return '';
  }
}
export const SpUpdateUserDetailAction = (props, menuName) => {

  var apiUrl = sp_update_user_details_api(menuName)
  var body = props;
  let type = UPDATE_USER_DETAIL

  return (dispatch) => {
    dispatch(SpResetValueAction(LOADING))
    postRequest({ apiUrl, body, dispatch, type })
  }
}

// ----------------------update user password api-----------------------------




export const SpUserPasswordUpdate = (props,menuName) => {
  var url
  if(menuName=="SpCustomersPage"){
    url=UPDATE_USER_PASSWORD_URL_SP
  }else{
    url=SP_UPDATE_EMPLOYEE_PASSWORD_URL
  }

  var apiUrl = url
  var body = props;
  let type = UPDATE_USER_PASSWORD

  return (dispatch) => {
    dispatch(SpResetValueAction(LOADING))
    postRequest({ apiUrl, body, dispatch, type })
  }
}

// ----------------------delete user details api-----------------------------
const sp_delete_user_details_api = (menuname) => {
  switch (menuname) {

    case 'SpCustomersPage':
      return DELETE_USER_DETAIL_URL_SP

    case 'SpEmployeePage':
      return SP_DELETE_EMPLOYEE_DETAIL_URL

    case 'SparePage':
      return SPARES_DELETE_DETAIL_URL

    // case 'ModelsPage':
    //   return Model_DELETE_ROLE_DETAIL_URL

    // case 'FuelTypePage':
    //   return FUEL_DELETE_ROLE_DETAIL_URL

    // case 'CategoryPage':
    //   return CATEGORY_DELETE_DETAIL_URL

    // case 'SubCategoryPage':
    //   return SUB_CATEGORY_DELETE_DETAIL_URL

    // case 'ServiceCategoryPage':
    //   return SERVICE_CATEGORY_DELETE_DETAIL_URL


    default:
      return '';
  }
}
export const SpDeleteUserDetailAction = (props, menuName) => {
  var body = {};
  if (menuName == "SpCustomersPage" || menuName == "SpEmployeePage") {
    body = { "user_id": props }
  } else {
    body = { "id": props }
  }
  var apiUrl = sp_delete_user_details_api(menuName)
 // var body = { id: props };
  let type = DELETE_USER_DETAIL

  return (dispatch) => {
    
    dispatch(SpResetValueAction(LOADING))
    postRequest({ apiUrl, body, dispatch, type })
  }
}