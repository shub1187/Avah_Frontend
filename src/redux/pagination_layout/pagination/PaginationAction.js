import { category_get_full_page_api, category_page_api, category_page_search_api, FETCH_REQUEST, FETCH_SUCCESS, fuel_page_api, fuel_page_search_api, GET_FULL_LIST, manufacturers_page_api, manufacturers_page_search_api, model_get_full_page_api, model_page_api, model_page_search_api, SEARCH_URL, service_category_page_api, service_category_page_search_api, service_provider_api, service_provider_search_api, SUB_CATE_GET_FULL_LIST, sub_category_page_api, sub_category_page_search_api, USER_URL } from "../../../network/ApiConstant";
import { authPostRequestHeader, getRequest, postRequest } from "../../../network/Client";




export const PaginationStart = (type) => {
  return {
    type: type,
  }
}

const full_list_api = (menuname) => {
  console.log("*******" + menuname)
  switch (menuname) {

    case 'ModelsPage':
      return model_get_full_page_api;

    case 'ServiceCategoryPage':
    case 'SubCategoryPage':
      return category_get_full_page_api;

    default:
      return '';
  }
}

export const GetFullListAction = (menuname) => {

  var apiUrl = ""//USER_URL(pageNo).toString()
  apiUrl = full_list_api(menuname)

  var body = {}
  var type = GET_FULL_LIST

  return (dispatch) => {
    getRequest({ apiUrl, body, dispatch, type })
  }
}


export const SubCateGetFullListAction = () => {

  var apiUrl = ""//USER_URL(pageNo).toString()
  apiUrl = sub_category_page_api(0)

  var body = {}
  var type = SUB_CATE_GET_FULL_LIST

  return (dispatch) => {
    getRequest({ apiUrl, body, dispatch, type })
  }
}


const pagination_list_api = (pageNo, menuname) => {
  switch (menuname) {

    case 'CustomersPage':
      return USER_URL(pageNo).toString();

    case 'ServiceProviderPage':
      return service_provider_api(pageNo).toString();

    case 'ManufacturersPage':
      return manufacturers_page_api(pageNo).toString();

    case 'ModelsPage':
      return model_page_api(pageNo).toString();

    case 'FuelTypePage':
      return fuel_page_api(pageNo).toString();

    case 'CategoryPage':
      return category_page_api(pageNo).toString();

    case 'SubCategoryPage':
      return sub_category_page_api(pageNo).toString();

    case 'ServiceCategoryPage':
      return service_category_page_api(pageNo).toString();

    default:
      return '';
  }
}

export const PaginationAction = (pageNo, menuname) => {

  var apiUrl = ""//USER_URL(pageNo).toString()
  apiUrl = pagination_list_api(pageNo, menuname)

  var body = {}
  var type = FETCH_SUCCESS

  return (dispatch) => {
    getRequest({ apiUrl, body, dispatch, type })
  }
}


const search_pagination_api = (pageNo, menuname, search) => {
  switch (menuname) {

    case 'CustomersPage':
      return SEARCH_URL(pageNo, search).toString()

    case 'ServiceProviderPage':
      return service_provider_search_api(pageNo, search).toString();

    case 'ManufacturersPage':
      return manufacturers_page_search_api(pageNo, search).toString();

    case 'ModelsPage':
      return model_page_search_api(pageNo, search).toString();

    case 'FuelTypePage':
      return fuel_page_search_api(pageNo, search).toString();

    case 'CategoryPage':
      return category_page_search_api(pageNo, search).toString();

    case 'SubCategoryPage':
      return sub_category_page_search_api(pageNo, search).toString();

    case 'ServiceCategoryPage':
      return service_category_page_search_api(pageNo, search).toString();


    default:
      return '';
  }
}

export const PaginationActionSearch = (pageNo, search, menuname) => {

  console.log("PaginationActionSearch--> " + search)
  //var apiUrl = SEARCH_URL(pageNo, search).toString()
  var apiUrl = ""//USER_URL(pageNo).toString()
  apiUrl = search_pagination_api(pageNo, menuname, search)
  var body = {}
  var type = FETCH_SUCCESS
  return (dispatch) => {
    getRequest({ apiUrl, body, dispatch, type })
  }
}
