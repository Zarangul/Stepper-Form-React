import { createSlice } from "@reduxjs/toolkit";

const state = {
  arr: {},
};

const formData = createSlice({
  name: "formData",
  initialState: state,
  reducers: {
    setFormData: (state, action) => {
      state.arr = Object.assign(state.arr,action.payload);
    },
  },
});

export default formData.reducer;
export const { setFormData } = formData.actions;
