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
                localStorage.setItem('TYPE_OF_USER', "2");
                localStorage.setItem('access_tokenSP', token);
                localStorage.setItem('isLoggedInSP', "true");
                localStorage.setItem('sp_id', sp_id);      
                return {
                    ...state,
                    isLoading: 1,
                    isLogin:true,
                    
                };
                case FETCH_LOGIN_SUCCESS_CUSTOMER:
                    var token = payload.token;
                    var sp_id = payload.sp_id;
                    localStorage.setItem('TYPE_OF_USER', "3");
                    localStorage.setItem('access_tokenSP', token);
                    localStorage.setItem('isLoggedInSP', "true");
                    localStorage.setItem('sp_id', sp_id);      
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
