import {
    CHOOSE_FOR_DETAIL, CLEAR_DETAIL,
    FETCH_RAMPS_FAILED,
    FETCH_RAMPS_STARTED,
    FETCH_RAMPS_SUCCEEDED,
    FETCH_TOTAL_RAMPS_PER_CONSTRUCTION_MATERIAL_FAILED,
    FETCH_TOTAL_RAMPS_PER_CONSTRUCTION_MATERIAL_STARTED,
    FETCH_TOTAL_RAMPS_PER_CONSTRUCTION_MATERIAL_SUCCEEDED, FETCH_TOTAL_RAMPS_PER_SIZE_FAILED,
    FETCH_TOTAL_RAMPS_PER_SIZE_STARTED, FETCH_TOTAL_RAMPS_PER_SIZE_SUCCEEDED, IDLE_MAP
} from "../constants";

export function fetchRampsFailed(error) {
    return {
        type: FETCH_RAMPS_FAILED,
        payload: {
            error
        }
    }
}

export function fetchRampsSucceeded(result) {
    return {
        type: FETCH_RAMPS_SUCCEEDED,
        payload: {
            result
        }
    }
}

export function fetchRampsStarted() {
    return {
        type: FETCH_RAMPS_STARTED
    }

}

export function fetchTotalRampsPerMaterialStarted(coord){
    return {
        type: FETCH_TOTAL_RAMPS_PER_CONSTRUCTION_MATERIAL_STARTED,
        payload: {
            coord
        }
    }
}

export function fetchTotalRampsPerMaterialSucceeded(result){
    return {
        type: FETCH_TOTAL_RAMPS_PER_CONSTRUCTION_MATERIAL_SUCCEEDED,
        payload: {
            result
        }
    }
}

export function fetchTotalRampsPerMaterialFailed(error){
    return {
        type: FETCH_TOTAL_RAMPS_PER_CONSTRUCTION_MATERIAL_FAILED,
        payload: {
            error
        }
    }
}

export function fetchTotalRampsPerSizeStarted(coord){
    return {
        type: FETCH_TOTAL_RAMPS_PER_SIZE_STARTED,
        payload: {
            coord
        }
    }
}

export function fetchTotalRampsPerSizeSucceeded(result){
    return {
        type: FETCH_TOTAL_RAMPS_PER_SIZE_SUCCEEDED,
        payload: {
            result
        }
    }
}

export function fetchTotalRampsPerSizeFailed(error){
    return {
        type: FETCH_TOTAL_RAMPS_PER_SIZE_FAILED,
        payload: {
            error
        }
    }
}

export function chooseForDetail(prop, type){
    return {
        type: CHOOSE_FOR_DETAIL,
        payload: {
            type,
            prop
        }
    }
}

export function clearDetail(){
    return {
        type: CLEAR_DETAIL
    }
}

export function idleMap(ne_lat, ne_lng, sw_lat, sw_lng){
    return {
        type: IDLE_MAP,
        payload: {
            coord: {
                ne_lat, ne_lng, sw_lat, sw_lng
            }
        }
    }
}