import {
  CREATE_USER, CREATE_USER_URL, DELETE_USER_DETAIL,
  DELETE_USER_DETAIL_URL, FUEL_DELETE_ROLE_DETAIL_URL, FUEL_CREATE_ROLE_URL, FUEL_GET_ROLE_DETAIL_URL, FUEL_SET_ROLE_STATUS_URL, FUEL_UPDATE_ROLE_DETAIL_URL, GET_USER_DETAIL, GET_USER_DETAIL_URL, Model_CREATE_ROLE_URL, Model_DELETE_ROLE_DETAIL_URL, Model_GET_ROLE_DETAIL_URL, Model_SET_ROLE_STATUS_URL, Model_UPDATE_ROLE_DETAIL_URL, MP_CREATE_ROLE_URL, MP_DELETE_ROLE_DETAIL_URL, MP_GET_ROLE_DETAIL_URL, MP_SET_ROLE_STATUS_URL, MP_UPDATE_ROLE_DETAIL_URL, SET_USER_STATUS,
  SET_USER_STATUS_URL, SP_CREATE_USER_URL, SP_DELETE_USER_DETAIL_URL, SP_GET_USER_DETAIL_URL, SP_SET_USER_STATUS_URL, SP_UPDATE_USER_DETAIL_URL, UPDATE_USER_DETAIL, UPDATE_USER_DETAIL_URL,
  UPDATE_USER_PASSWORD, UPDATE_USER_PASSWORD_URL, CATEGORY_CREATE_URL, SUB_CATEGORY_CREATE_URL, SERVICE_CATEGORY_CREATE_URL, CATEGORY_GET_DETAIL_URL, SUB_CATEGORY_GET_DETAIL_URL, SERVICE_CATEGORY_GET_DETAIL_URL, CATEGORY_SET_STATUS_URL, SUB_CATEGORY_SET_STATUS_URL, SERVICE_CATEGORY_SET_STATUS_URL, CATEGORY_UPDATE_DETAIL_URL, CATEGORY_DELETE_DETAIL_URL, SUB_CATEGORY_DELETE_DETAIL_URL, SERVICE_CATEGORY_DELETE_DETAIL_URL, SUB_CATEGORY_UPDATE_DETAIL_URL, SERVICE_CATEGORY_UPDATE_DETAIL_URL, LOADING
} from "../../../../network/ApiConstant";
import { postRequest } from "../../../../network/Client";

export const ResetValueAction = (type) => {
  return {
    type: type,
  }
}

// ----------------------Add user api-----------------------------
const create_user_api = (menuname) => {
  switch (menuname) {

    case 'CustomersPage':
      return CREATE_USER_URL

    case 'ServiceProviderPage':
      return SP_CREATE_USER_URL

    case 'ManufacturersPage':
      return MP_CREATE_ROLE_URL

    case 'ModelsPage':
      return Model_CREATE_ROLE_URL

    case 'FuelTypePage':
      return FUEL_CREATE_ROLE_URL

    case 'CategoryPage':
      return CATEGORY_CREATE_URL

    case 'SubCategoryPage':
      return SUB_CATEGORY_CREATE_URL

    case 'ServiceCategoryPage':
      return SERVICE_CATEGORY_CREATE_URL


    default:
      return '';
  }
}


export const CreateUser = (props, menuname) => {
  console.log(menuname)
  var apiUrl = create_user_api(menuname)
  console.log(apiUrl)
  var body = props;
  let type = "CREATE_USER"

  return (dispatch) => {
    dispatch(ResetValueAction(LOADING))
    postRequest({ apiUrl, body, dispatch, type })
  }
}

// ----------------------get user  details api-----------------------------

const get_user_details_api = (menuname) => {

  switch (menuname) {

    case 'CustomersPage':
      return GET_USER_DETAIL_URL

    case 'ServiceProviderPage':
      return SP_GET_USER_DETAIL_URL

    case 'ManufacturersPage':
      return MP_GET_ROLE_DETAIL_URL

    case 'ModelsPage':
      return Model_GET_ROLE_DETAIL_URL

    case 'FuelTypePage':
      return FUEL_GET_ROLE_DETAIL_URL

    case 'CategoryPage':
      return CATEGORY_GET_DETAIL_URL

    case 'SubCategoryPage':
      return SUB_CATEGORY_GET_DETAIL_URL

    case 'ServiceCategoryPage':
      return SERVICE_CATEGORY_GET_DETAIL_URL
    default:
      return '';
  }
}

export const UserGetDetailsAction = (props, menuname) => {
  var apiUrl = get_user_details_api(menuname)
  var id = ""
  var body = {};
  if (menuname == "CustomersPage" || menuname == "ServiceProviderPage") {
    body = { "user_id": props }
  } else {
    body = { "id": props }
  }

  let type = GET_USER_DETAIL


  return (dispatch) => {
    dispatch(ResetValueAction(LOADING))
    postRequest({ apiUrl, body, dispatch, type })
  }
}

// ----------------------update user status api-----------------------------


const update_user_status_api = (menuname) => {
  switch (menuname) {

    case 'CustomersPage':
      return SET_USER_STATUS_URL

    case 'ServiceProviderPage':
      return SP_SET_USER_STATUS_URL

    case 'ManufacturersPage':
      return MP_SET_ROLE_STATUS_URL

    case 'ModelsPage':
      return Model_SET_ROLE_STATUS_URL

    case 'FuelTypePage':
      return FUEL_SET_ROLE_STATUS_URL

    case 'CategoryPage':
      return CATEGORY_SET_STATUS_URL

    case 'SubCategoryPage':
      return SUB_CATEGORY_SET_STATUS_URL

    case 'ServiceCategoryPage':
      return SERVICE_CATEGORY_SET_STATUS_URL


    default:
      return '';
  }
}
export const SetUserStatusAction = (profileId, is_active, menuname) => {
  let id = "id"
  if (menuname == "CustomersPage" || menuname == "ServiceProviderPage") {
    id = "user_id"
  }
  var apiUrl = update_user_status_api(menuname)
  var body = { id: profileId, "is_active": is_active };
  let type = SET_USER_STATUS

  return (dispatch) => {
    dispatch(ResetValueAction(LOADING))
    postRequest({ apiUrl, body, dispatch, type })
  }
}

// ----------------------update user details api-----------------------------
const update_user_details_api = (menuname) => {
  switch (menuname) {

    case 'CustomersPage':
      return UPDATE_USER_DETAIL_URL

    case 'ServiceProviderPage':
      return SP_UPDATE_USER_DETAIL_URL

    case 'ManufacturersPage':
      return MP_UPDATE_ROLE_DETAIL_URL

    case 'ModelsPage':
      return Model_UPDATE_ROLE_DETAIL_URL

    case 'FuelTypePage':
      return FUEL_UPDATE_ROLE_DETAIL_URL

    case 'CategoryPage':
      return CATEGORY_UPDATE_DETAIL_URL

    case 'SubCategoryPage':
      return SUB_CATEGORY_UPDATE_DETAIL_URL

    case 'ServiceCategoryPage':
      return SERVICE_CATEGORY_UPDATE_DETAIL_URL


    default:
      return '';
  }
}
export const UpdateUserDetailAction = (props, menuName) => {

  var apiUrl = update_user_details_api(menuName)
  var body = props;
  let type = UPDATE_USER_DETAIL

  return (dispatch) => {
    dispatch(ResetValueAction(LOADING))
    postRequest({ apiUrl, body, dispatch, type })
  }
}

// ----------------------update user password api-----------------------------

export const UserPasswordUpdate = (props) => {

  var apiUrl = UPDATE_USER_PASSWORD_URL
  var body = props;
  let type = UPDATE_USER_PASSWORD

  return (dispatch) => {
    dispatch(ResetValueAction(LOADING))
    postRequest({ apiUrl, body, dispatch, type })
  }
}

// ----------------------delete user details api-----------------------------
const delete_user_details_api = (menuname) => {
  switch (menuname) {

    case 'CustomersPage':
      return DELETE_USER_DETAIL

    case 'ServiceProviderPage':
      return SP_DELETE_USER_DETAIL_URL

    case 'ManufacturersPage':
      return MP_DELETE_ROLE_DETAIL_URL

    case 'ModelsPage':
      return Model_DELETE_ROLE_DETAIL_URL

    case 'FuelTypePage':
      return FUEL_DELETE_ROLE_DETAIL_URL

    case 'CategoryPage':
      return CATEGORY_DELETE_DETAIL_URL

    case 'SubCategoryPage':
      return SUB_CATEGORY_DELETE_DETAIL_URL

    case 'ServiceCategoryPage':
      return SERVICE_CATEGORY_DELETE_DETAIL_URL


    default:
      return '';
  }
}
export const DeleteUserDetailAction = (props, menuName) => {
  var body = {};
  if (menuName == "CustomersPage" || menuName == "ServiceProviderPage") {
    body = { "user_id": props }
  } else {
    body = { "id": props }
  }
  var apiUrl = delete_user_details_api(menuName)
  var body = { id: props };
  let type = DELETE_USER_DETAIL

  return (dispatch) => {
    dispatch(ResetValueAction(LOADING))
    postRequest({ apiUrl, body, dispatch, type })
  }
}