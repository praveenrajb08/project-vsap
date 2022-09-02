import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
}
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload.user;
    },
  },
});
export const { setUserInfo } = userSlice.actions;

export const selectUser = (state) => state.channel.User;

export default userSlice.reducer;