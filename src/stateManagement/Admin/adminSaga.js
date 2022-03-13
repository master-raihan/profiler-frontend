import { all, call, put, takeEvery } from "redux-saga/effects";
import * as ACTION from "./adminActionType";
import { loginApi } from "../../api/adminApi";

function* adminLoginSaga(action) {
    try{
        const response = yield call(loginApi, action.payload);
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

function* adminWatcher() {
    yield takeEvery(ACTION.LOGIN, adminLoginSaga);
}

export default function* adminSaga() {
    yield all([adminWatcher()])
}
