import { takeLatest, call, all, put } from "redux-saga/effects";
import {
  auth,
  handleUserProfile,
  getCurrentUser,
  GoogleProvider,
} from "./../../firebase/utilities";
import userTypes from "./user.types";
import {
  resetPasswordSuccess,
  signInUserSuccess,
  signOutUserSuccess,
  userError,
} from "./user.actions";
import { handleResetPasswordAPI } from "./user.helpers";

export function* getSnapshotFromUserAuth(user, additionalData = {}) {
  try {
    const userRef = yield call(handleUserProfile, {
      userAuth: user,
      additionalData,
    });
    const snapshot = yield userRef.get();
    yield put(signInUserSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (err) {
    console.log(err);
    yield put(userError(err));
  }
}

export function* userSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(userError("password is wrong"));
    return;
  }
}

export function* onUserSignInStart() {
  yield takeLatest(userTypes.USER_SIGN_IN_START, userSignIn);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (err) {}
}

export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutUser() {
  try {
    yield auth.signOut();
    yield put(signOutUserSuccess());
  } catch (err) {}
}

export function* onSignOutUserStart() {
  yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser);
}

export function* signUpUser({
  payload: { accountName, email, password, confirmPassword },
}) {
  if (password !== confirmPassword) {
    const err = ["password don't match"];
    yield put(userError(err));
    return;
  }
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const additionalData = { accountName };
    yield getSnapshotFromUserAuth(user, additionalData);
  } catch {}
}

export function* onSignUpUserStart() {
  yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUser);
}

export function* resetPassword({ payload: { email } }) {
  try {
    yield call(handleResetPasswordAPI, email);
    yield put(resetPasswordSuccess());
  } catch (err) {
    yield put(userError(err));
  }
}

export function* onResetPasswordStart() {
  yield takeLatest(userTypes.RESET_PASSWORD_START, resetPassword);
}

export function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(GoogleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(userError(err));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

export default function* userSagas() {
  yield all([
    call(onUserSignInStart),
    call(onCheckUserSession),
    call(onSignOutUserStart),
    call(onSignUpUserStart),
    call(onResetPasswordStart),
    call(onGoogleSignInStart),
  ]);
}
