
import { FETCH_SUCCESS, FETCH_REQUEST, RESET_PAGE, RELOAD_PAGE, GET_FULL_LIST, SUB_CATE_GET_FULL_LIST } from "../../../network/ApiConstant";


const initialState = {
    queryPageIndex: 0,
    queryPageSize: 10,
    totalCount: 0,
    queryPageFilter: "",
    queryPageSortBy: [],
    getFullList: [],
    getSubCateFullList: [],
    isLoading: -1,
    isFirstLoad: true,
    reloadPage: false
}


export const PaginationReducer = (state = initialState, props) => {

    let type = props.type

    let payload = props.payload

    switch (type) {
        case RESET_PAGE:
            return initialState

        case RELOAD_PAGE:
            return {
                ...state,
                isLoading: 0,
                reloadPage: true,
            };

        case FETCH_REQUEST:
            return {
                ...state,
                isLoading: 0,
                isFirstLoad: false,
            };

        case FETCH_SUCCESS:
            var body = payload.data.results;
            var pagination = payload.data.pagination.totalPage;

            // console.log(body)
            return {
                ...state,
                isLoading: 1,
                reloadPage: false,
                isFirstLoad: false,
                totalCount: pagination,
                queryPageSortBy: body,
            };
        case GET_FULL_LIST:
            var body = payload.data.results;

            console.log(body)
            return {
                ...state,
            
                getFullList: body,
            };

        case SUB_CATE_GET_FULL_LIST:
            var body = payload.data.results;

            console.log(body)
            return {
                ...state,
                getSubCateFullList: body,
            };
        default:

            return state
        //throw new Error(`Unhandled action type: ${type}`);
    }
};