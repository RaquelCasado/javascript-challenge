import {
    FETCH_TOTAL_RAMPS_PER_SIZE_FAILED,
    FETCH_TOTAL_RAMPS_PER_SIZE_STARTED,
    FETCH_TOTAL_RAMPS_PER_SIZE_SUCCEEDED
} from "../../constants";

const totalRampsPerSizeInitialState = {
    error: '',
    result: '',
    inProgress: false,
};

export function totalRampsPerSizeReducer(state = totalRampsPerSizeInitialState, action) {
    switch (action.type) {
        case FETCH_TOTAL_RAMPS_PER_SIZE_STARTED:
            return {...state, inProgress: true};
        case FETCH_TOTAL_RAMPS_PER_SIZE_SUCCEEDED:
            return {...state, result: action.payload.result, inProgress: false};
        case FETCH_TOTAL_RAMPS_PER_SIZE_FAILED:
            return {...state, error: action.payload.error, inProgress: false};
        default:
            return state
    }
}