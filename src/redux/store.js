import { configureStore } from "@reduxjs/toolkit";
import appStateSlice from "./features/appStateSlice";


import { combineReducers } from '@reduxjs/toolkit'
import { UserRedux } from "../pages/dashboard/user/common/UserRedux";
import { PaginationReducer } from "./pagination_layout/pagination/PaginationReducer";
import { LoginRedux } from "../pages/login/LoginRedux";
// export type RootState1 = ReturnType<typeof rootReducer>
const rootReducer = combineReducers({

  appState: appStateSlice,
  login:LoginRedux,
  pagination: PaginationReducer,
  user:UserRedux,
})

export const store = configureStore({
  reducer: {
    appState: rootReducer
  }
});

// export type RootState = ReturnType<typeof store.getState>;