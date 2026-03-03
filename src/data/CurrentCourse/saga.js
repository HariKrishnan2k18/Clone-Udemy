import { call, put, takeLatest } from "redux-saga/effects";
import {
  loadUser,
  storeUser,
  errorUser,
  loadUserRegister,
  loadCourseDetails,
  storeCourseDetails,
  errorCourse,
} from "./index";
import { getCourseDetails, getRegisterData, getUserData } from "./api";
import toast from "react-hot-toast";

function* fetchDataSaga({ payload }) {
  try {
    const data = yield call(getUserData, { payload });
    yield put(storeUser(data));
    toast.success("Successfully LoggedIn !!");
  } catch (error) {
    yield put(errorUser(error.message));
  }
}

function* fetchRegisterData({ payload }) {
  try {
    const data = yield call(getRegisterData, { payload });
    if (data.message?.user) {
      yield put(storeUser(data.message));
      toast.success("Successfully Registered !!");
    } else {
      yield put(errorUser(data.message));
    }
  } catch (error) {
    yield put(errorUser(error.message));
  }
}

function* fetchCourseData({ payload }) {
  try {
    const data = yield call(getCourseDetails);
    if (data) {
      yield put(storeCourseDetails(data));
      sessionStorage.setItem("courseDetails", JSON.stringify(data));
      toast.success("Successfully get Courses List !!");
    } else {
      yield put(errorCourse(data.message));
    }
  } catch (error) {
    yield put(errorCourse(error.message));
  }
}

export function* watchFetchUserSaga() {
  yield takeLatest(loadUser.type, fetchDataSaga);
  yield takeLatest(loadUserRegister.type, fetchRegisterData);
  yield takeLatest(loadCourseDetails.type, fetchCourseData);
}
