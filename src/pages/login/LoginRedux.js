import { FETCH_FAILURE, FETCH_LOGIN_SUCCESS, LOGIN_LOADER, Logout ,FETCH_LOGIN_SUCCESS_CUSTOMER} from "../../network/ApiConstant";
import { FETCH_LOGIN_SUCCESS_SP } from "../../network/SpApiConstant";




// type pageState = {
//     queryPageIndex: number,
//     queryPageSize: number,
//     totalCount: number,
//     queryPageFilter:string
//     queryPageSortBy: Array<object>,
//     isLoading:number,
//     isFirstLoad:boolean
// };


const initialState = {
  isLogin:false,
  isLoading:-1
}


export const LoginRedux = (state = initialState, props) => {

    let type = props.type

    let payload = props.payload


    switch (type) {
        // case RESET_PAGE:
        //     return initialState

        case LOGIN_LOADER:
            return {
                ...state,
                isLoading: 0,
                isLogin: false,
            };
        case Logout:{
           

            localStorage.clear();
            window.history.replaceState(null, "", "/")

            window.location.reload();
            return initialState
        }

        case FETCH_LOGIN_SUCCESS:
            var token = payload.token;
            localStorage.setItem('TYPE_OF_USER', "1");
            localStorage.setItem('role', "Administrator");
            localStorage.setItem('access_token', token);
            localStorage.setItem('isLoggedIn', "true");

            return {
                ...state,
                isLoading: 1,
                isLogin:true,
                
            };

            case FETCH_LOGIN_SUCCESS_SP:
                var token = payload.token;
                var sp_id = payload.sp_id;
                var profile_name = payload.profile_name;
                localStorage.setItem('TYPE_OF_USER', "2");
                localStorage.setItem('role', "Service Provider");
                localStorage.setItem('access_tokenSP', token);
                localStorage.setItem('isLoggedInSP', "true");
                localStorage.setItem('sp_id', sp_id);  
                localStorage.setItem('profile_name', profile_name);
                return {
                    ...state,
                    isLoading: 1,
                    isLogin:true,
                    
                };
                case FETCH_LOGIN_SUCCESS_CUSTOMER:
                    var token = payload.token;
                    var profile_name = payload.profile_name;
                    var customer_id = payload.customer_id
                    var customer_email = payload.customer_email
                    localStorage.setItem('TYPE_OF_USER', "3");
                    localStorage.setItem('role', "Customer");
                    localStorage.setItem('customer_id', customer_id);
                    localStorage.setItem('customer_email', customer_email);
                    localStorage.setItem('access_tokenSP', token);
                    localStorage.setItem('isLoggedInSP', "true"); 
                    localStorage.setItem('profile_name', profile_name);   
                    return {
                        ...state,
                        isLoading: 1,
                        isLogin:true,
                        
                    };
                case FETCH_FAILURE:
                    return{
                        ...state,
                        isLoading: 1,
                        isLogin:false,
                        
                    };

        default:

            return state
        //throw new Error(`Unhandled action type: ${type}`);
    }
};
