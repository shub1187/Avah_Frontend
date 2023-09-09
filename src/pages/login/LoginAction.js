import { Customer_LOGIN_API_URL } from "network/CustomerApiConstant"
import { FETCH_LOGIN_SUCCESS, FETCH_LOGIN_SUCCESS_CUSTOMER, LOGIN_LOADER, LOGIN_URL, Logout } from "../../network/ApiConstant"
import { authPostRequestHeader, postRequest } from "../../network/Client"
import { FETCH_LOGIN_SUCCESS_SP, LOGIN_URL_SP } from "../../network/SpApiConstant"



export const requestType = (type) => {
  return {
    type: type,
  }
}
export const LoginAction = (props) => {

    var apiUrl = LOGIN_URL
  
    var body = props
    var type = FETCH_LOGIN_SUCCESS
  
    return (dispatch) => {
      dispatch(requestType(LOGIN_LOADER))
      authPostRequestHeader({ apiUrl, body, dispatch, type })
    }
  }

  export const LogoutAction = () => {

    var type = Logout
  
    return {
      type: type,
    }
  }
  

  export const SPLoginAction = (props) => {

    var apiUrl = LOGIN_URL_SP
  
    var body = props
    var type = FETCH_LOGIN_SUCCESS_SP 
  
    return (dispatch) => {
      dispatch(requestType(LOGIN_LOADER))
      authPostRequestHeader({ apiUrl, body, dispatch, type })
    }
  }
  

  export const CustomerLoginAction = (props) => {
    var apiUrl = Customer_LOGIN_API_URL
  
    var body = props
    var type = FETCH_LOGIN_SUCCESS_CUSTOMER 
  
    return (dispatch) => {
      dispatch(requestType(LOGIN_LOADER))
      authPostRequestHeader({ apiUrl, body, dispatch, type })
    }
    // var apiUrl = Customer_LOGIN_API_URL
  
    // var body = props
    // var type = FETCH_LOGIN_SUCCESS_SP 
  
    // return (dispatch) => {
    //   dispatch(requestType(LOGIN_LOADER))
    //   authPostRequestHeader({ apiUrl, body, dispatch, type })
    // }
  }
  