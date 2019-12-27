import {all} from 'redux-saga/effects';
import {rampWatcher} from "./rampsSaga";

export default function* rootSaga() {
    yield all([rampWatcher()]);
}