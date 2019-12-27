import {
    FETCH_RAMPS_FAILED,
    FETCH_RAMPS_STARTED,
    FETCH_RAMPS_SUCCEEDED,
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

