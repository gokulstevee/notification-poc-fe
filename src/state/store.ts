import { configureStore } from "@reduxjs/toolkit";
// import { loadState } from "./storage";
import layout from "./reducers/layout";
import post from "./reducers/post";

export const store = configureStore({
  reducer: {
    layout: layout,
    post: post,
  },
  // preloadedState: loadState(),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
