import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    value: false,
  },
  reducers: {
    open: (state) => {
      state.value = true;
    },
    close: (state) => {
      state.value = false;
    },
  },
});

export const sidebarActions = sidebarSlice.actions;

export default sidebarSlice.reducer;
