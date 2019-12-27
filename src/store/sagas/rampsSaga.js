import {put, takeEvery, all, call} from 'redux-saga/effects';
import {
    FETCH_RAMPS_STARTED,
    FETCH_TOTAL_RAMPS_PER_CONSTRUCTION_MATERIAL_STARTED,
    FETCH_TOTAL_RAMPS_PER_SIZE_STARTED
} from "../../constants";
import {
    fetchRampsFailed,
    fetchRampsSucceeded,
    fetchTotalRampsPerMaterialFailed,
    fetchTotalRampsPerMaterialSucceeded, fetchTotalRampsPerSizeFailed, fetchTotalRampsPerSizeSucceeded
} from "../../actions/ramps";

function* rampWorker() {
    try {
        const response = yield call(fetch,'http://localhost:3001/ramps');
        const responseBody = yield response.json();
         if(responseBody){
             yield put(fetchRampsSucceeded(responseBody))
         }else{
             yield put(fetchRampsSucceeded({body: []}))
             // yield put(fetchRampsFailed(error.message));
         }

    } catch (e) {
        yield put(fetchRampsFailed(e.message))
    }

}

function* totalRampsPerMaterialWorker({payload}){
    try{
        const coord = payload.coord;
        const response = yield call(fetch,`http://localhost:3001/ramps/totalPerConstructionMaterial/coord/${coord.ne_lat}/${coord.sw_lat}/${coord.ne_lng}/${coord.sw_lng}`);

        const responseBody = yield response.json();
        if(responseBody){
            yield put(fetchTotalRampsPerMaterialSucceeded(responseBody));
        }
    }catch (e) {
        yield put(fetchTotalRampsPerMaterialFailed(e.message));
    }
}

function* totalRampsPerSizeWorker({payload}){
    try{
        const coord = payload.coord;
        const response = yield call(fetch,`http://localhost:3001/ramps/totalRampsBySizeRange/coord/${coord.ne_lat}/${coord.sw_lat}/${coord.ne_lng}/${coord.sw_lng}`);
        const responseBody = yield response.json();
        yield put(fetchTotalRampsPerSizeSucceeded(responseBody))
    }catch (e) {
        yield put(fetchTotalRampsPerSizeFailed(e.message));
    }
}

export function* rampWatcher() {
    yield all([
        takeEvery(FETCH_RAMPS_STARTED, rampWorker),
        takeEvery(FETCH_TOTAL_RAMPS_PER_CONSTRUCTION_MATERIAL_STARTED, totalRampsPerMaterialWorker),
        takeEvery(FETCH_TOTAL_RAMPS_PER_SIZE_STARTED, totalRampsPerSizeWorker)
    ]);
}