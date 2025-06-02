import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  refreshToPullUpdateList: true,
};

export const post = createSlice({
  name: "post",
  initialState,
  reducers: {
    setRefreshToPullUpdateList: (state, action: PayloadAction<boolean>) => {
      state.refreshToPullUpdateList = action.payload;
    },
  },
});

export const { setRefreshToPullUpdateList } = post.actions;

export default post.reducer;
