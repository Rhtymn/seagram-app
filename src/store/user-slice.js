import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    information: {},
  },
  reducers: {
    setUser(state, actions) {
      state.information = actions.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
