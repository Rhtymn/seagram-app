import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    information: {
      name: "Roihan",
      dob: "2022-08-16T00:00:00.000Z",
      role: "student",
      instructorIsVerified: false,
      username: "Roihan",
      email: "hroihan6@gmail.com",
      emailVerified: true,
      id: "62fcc35fb1b5f7001672b438",
      token: "hbA79qOQPZENRmI3rBdrSXjhqd35UAYoG3n5NBuTpJoGCyZlQSHLYomyAcFBzZov",
    },
  },
  reducers: {
    setUser(state, actions) {
      state.information = actions.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
