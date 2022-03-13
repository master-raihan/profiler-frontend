import { all } from "redux-saga/effects";
import adminSaga from "./Admin/adminSaga";

export default function* rootSaga() {
    yield all([
        adminSaga()
    ])
}