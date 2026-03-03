import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  course: {},
  user: {},
  loadingUser: false,
  loadingRegister: true,
  errorUser: "",
  loadingCourseDetails: false,
  courseDetails: [],
  errorCourseDetails: "",
};

const subFolderSlice = createSlice({
  name: "currentCourse",
  initialState,
  reducers: {
    resetUser: () => initialState,
    loadCourseDetails: (state, action) => {
      state.loadingCourseDetails = true;
    },
    storeCourseDetails: (state, action) => {
      state.loadingCourseDetails = false;
      state.courseDetails = action.payload;
      state.user = {};
    },
    errorCourse: (state, action) => {
      state.loadingCourseDetails = false;
      state.errorCourseDetails = "API Failure";
    },
    loadUser: (state, action) => {
      state.loadingUser = true;
    },
    loadUserRegister: (state, action) => {
      state.loadingRegister = true;
    },
    storeUser: (state, action) => {
      state.loadingUser = false;
      state.loadingRegister = false;
      state.user = action.payload;
    },
    storeCourse: (state, action) => {
      state.course = action.payload;
    },
    errorUser: (state, action) => {
      state.loadingUser = false;
      state.loadingRegister = false;
      state.errorUser = "API Failure";
    },
  },
});

export const {
  storeCourse,
  storeUser,
  errorUser,
  loadUser,
  resetUser,
  loadUserRegister,
  loadCourseDetails,
  storeCourseDetails,
  errorCourse,
} = subFolderSlice.actions;

export default subFolderSlice.reducer;
