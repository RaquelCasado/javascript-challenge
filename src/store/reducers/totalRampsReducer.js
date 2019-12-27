import {
    FETCH_RAMPS_FAILED,
    FETCH_RAMPS_STARTED,
    FETCH_RAMPS_SUCCEEDED
} from "../../constants";

const rampsInitialState = {
    error: '',
    result: [],
    inProgress: false,
};

export function rampsReducer(state = rampsInitialState, action) {
    switch (action.type) {
        case FETCH_RAMPS_STARTED:
            return {...state, inProgress: true};
        case FETCH_RAMPS_SUCCEEDED:
            return {...state, result: action.payload.result, inProgress: false};
        case FETCH_RAMPS_FAILED:
            return {...state, error: action.payload.error, inProgress: false};
        default:
            return state
    }
}

