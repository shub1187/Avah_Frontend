import axios from 'axios'
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from './ApiConstant'


type AuthProps = {
  apiUrl: string;
  body: any;
  dispatch: any;
  type: string
};

export const authPostRequestHeader = (props: AuthProps) => {
  console.log(props.apiUrl)
  console.log(props.body)

  props.dispatch(fetchUsersRequest())
  axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
  // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  axios
    .post(props.apiUrl, props.body)
    .then(response => {
      const payload = response.data
      console.log("shubh 23",response.data.token);
      props.dispatch(fetchUsersSuccess(props.type, payload))
    })
    .catch(error => {
      // error.message is the error message
      console.log(error.message)
      props.dispatch(fetchUsersFailure(error.message))
    })

}
export const postRequest = (props: AuthProps) => {
  console.log("------------------")
  console.log("TYPE-----> " + props.type)
  console.log("URL------>" + props.apiUrl)
  console.log(`BODY----->${JSON.stringify(props.body)}`)
  console.log("------------------")
  var token=localStorage.getItem('access_token')
  var typeOfUser = localStorage.getItem("TYPE_OF_USER") == "1"
  if (!typeOfUser)
  token = localStorage.getItem('access_tokenSP')


  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    "Access-Control-Allow-Headers": "X-Requested-With",
    'Access-Control-Allow-Credentials': 'true',
    'Cross-Origin-Embedder-Policy': 'cross-origin',
    'Authorization': "Bearer " + token
  };
  props.dispatch(fetchUsersRequest())
  axios
    .post(props.apiUrl,
      props.body, { headers })
    .then(response => {
      const payload = response.data

      props.dispatch(fetchUsersSuccess(props.type, payload))
    })
    .catch(error => {
      // error.message is the error message
      console.log(error.message)
      props.dispatch(fetchUsersFailure(error.message))
    })

}

export const getRequest = (props: AuthProps) => {
  console.log(props.apiUrl)
  console.log(props.body)
  console.log(props.type)

  props.dispatch(fetchUsersRequest())

  var token=localStorage.getItem('access_token')
  var typeOfUser = localStorage.getItem("TYPE_OF_USER") == "1"
  if (!typeOfUser)
  token = localStorage.getItem('access_tokenSP')

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    "Access-Control-Allow-Headers": "X-Requested-With",
    'Access-Control-Allow-Credentials': 'true',
    'Cross-Origin-Embedder-Policy': 'cross-origin',

    'Authorization': "Bearer " +token
  };
  axios.get(
    props.apiUrl,
    { headers }
  ).then(response => {
    console.log("Success ========> " + props.type, response);
    const payload = response.data
    // console.log("payload "+payload )

    // console.log("payload "+JSON. stringify(payload  ) )

    props.dispatch(fetchUsersSuccess(props.type, payload))

  })
    .catch(error => {
      console.log("Error ========>", error);
      props.dispatch(fetchUsersFailure(error.message))

    }
    )

  // axios
  // .get(props.apiUrl,props.body)
  // .then(response => {
  //   // response.data is the users
  //  // console.log(response.headers.get("x-auth-token"));

  // })
  // .catch(error => {
  //   // error.message is the error message
  //   console.log(error.message)
  // })

}


export const fetchUsersRequest = () => {
  return {
    type: FETCH_REQUEST
  }
}

export const fetchUsersSuccess = (type: any, response: any) => {
  return {
    type: type,
    payload: response
  }
}

export const fetchUsersFailure = (error: any) => {
  return {
    type: FETCH_FAILURE,
    payload: error
  }
}