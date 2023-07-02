import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type appState = {
  appState: string;
  tabIndex:String
};

const initialState: appState = {
  appState: "",
  tabIndex:""
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<string>) => {
      state.appState = action.payload;
      state.tabIndex=action.payload;
    }
  }
});

export const {
  setAppState
} = appStateSlice.actions;



export default appStateSlice.reducer;