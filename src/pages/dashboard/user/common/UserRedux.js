import { FETCH_REQUEST, GET_USER_DETAIL, FETCH_FAILURE, SET_USER_STATUS, UPDATE_USER_DETAIL, USER_RESET, DELETE_USER_DETAIL, UPDATE_USER_PASSWORD, CREATE_USER, LOADING, LOADING_DISMISS } from "../../../../network/ApiConstant";


const initialState = {
    reloadUserDetails: false,
    userCreatedDetails: false,
    loading: -1,
    reloadpage: false,
    error: '',
    userPayload: {}
}

export const UserRedux = (state = initialState, action) => {
    // const dispatch = useDispatch()

    let type = action.type
    let payload = action.payload
    switch (type) {
        case LOADING_DISMISS:
            return {
                ...state,
                loading: 1,
            
            }
        case LOADING:
            return {
                ...state,
                loading: 0,
            
            }

        case FETCH_REQUEST:
            return {
                ...state,
                loading: 0,
            }
        case USER_RESET:
            console.log("USER_RESET")
            return {
                ...state,
                loading: -1,
                reloadUserDetails: false,
                userPayload:{},
            }
        case GET_USER_DETAIL:
            console.log(payload.data)
            return {
                ...state,
                loading: 1,
                userPayload: payload.data,
            };
         case CREATE_USER:{
            return {
                ...state,
                loading: 1,
                userCreatedDetails: true,
                response: payload.data,
            };
         }
        case DELETE_USER_DETAIL:
        case UPDATE_USER_PASSWORD:
        case UPDATE_USER_DETAIL:
        case SET_USER_STATUS:

            return {
                ...state,
                loading: 1,
                reloadUserDetails: true,
                response: payload.data,
            };
        case FETCH_FAILURE:
            return {
                ...state,
                loading: 1,
                response: {},
            };

        default:
            return state
        //throw new Error(`Unhandled action type: ${type}`);
    }

}