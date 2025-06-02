import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFixedLoading: false,
};

export const layout = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setIsFixedLoading: (state, action: PayloadAction<boolean>) => {
      state.isFixedLoading = action.payload;
    },
  },
});

export const { setIsFixedLoading } = layout.actions;

export default layout.reducer;
