import {
    FETCH_TOTAL_RAMPS_PER_SIZE_FAILED,
    FETCH_TOTAL_RAMPS_PER_SIZE_STARTED,
    FETCH_TOTAL_RAMPS_PER_SIZE_SUCCEEDED
} from "../constants";

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