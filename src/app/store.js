import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../feature/sidebar/sidebarSlice";
import modalReducer from "../feature/modal/modalSlice";

const store = configureStore({
  reducer: { sidebar: sidebarReducer, modal: modalReducer },
});

export default store;
