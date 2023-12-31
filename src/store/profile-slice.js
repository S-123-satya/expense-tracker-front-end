import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  username: "",
  picUrl: "",
  isPremium: false,
  isEmailVerified: false,
  isCompleteProfile: false,
  isShowProfile: false,
};
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    toggleProfilePage(state) {
      state.isShowProfile = !state.isShowProfile;
    },
    premiumUser(state) {
      state.isPremium=true;
    },
    fillProfile(state, action) {
      state.username = action.payload.displayName;
      state.picUrl = action.payload.photoUrl;
      state.isEmailVerified = !!action.payload.emailVerified;
      state.isCompleteProfile =!!action.payload.displayName && !!action.payload.photoUrl;
    },
  },
});

export default profileSlice;
