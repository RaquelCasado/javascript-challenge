import {
    CHOOSE_FOR_DETAIL, CLEAR_DETAIL,
    FETCH_RAMPS_FAILED,
    FETCH_RAMPS_STARTED,
    FETCH_RAMPS_SUCCEEDED,
    FETCH_TOTAL_RAMPS_PER_CONSTRUCTION_MATERIAL_FAILED,
    FETCH_TOTAL_RAMPS_PER_CONSTRUCTION_MATERIAL_STARTED,
    FETCH_TOTAL_RAMPS_PER_CONSTRUCTION_MATERIAL_SUCCEEDED, FETCH_TOTAL_RAMPS_PER_SIZE_FAILED,
    FETCH_TOTAL_RAMPS_PER_SIZE_STARTED,
    FETCH_TOTAL_RAMPS_PER_SIZE_SUCCEEDED, IDLE_MAP
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

const totalRampsPerConstructionMaterialInitialState = {
    error: '',
    result: '',
    inProgress: false,
};

export function totalRampsPerConstructionMaterialReducer(state = totalRampsPerConstructionMaterialInitialState, action) {
    switch (action.type) {
        case FETCH_TOTAL_RAMPS_PER_CONSTRUCTION_MATERIAL_STARTED:
            return {...state, inProgress: true};
        case FETCH_TOTAL_RAMPS_PER_CONSTRUCTION_MATERIAL_SUCCEEDED:
            return {...state, result: action.payload.result, inProgress: false};
        case FETCH_TOTAL_RAMPS_PER_CONSTRUCTION_MATERIAL_FAILED:
            return {...state, error: action.payload.error, inProgress: false};
        default:
            return state
    }
}

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

const detailedRampsInitialState = {
    type: '',
    prop: '',
    coord: {}
};

export function detailedRampsReducer(state = detailedRampsInitialState, action) {
    switch (action.type) {
        case CHOOSE_FOR_DETAIL:
            return{...state, type: action.payload.type, prop: action.payload.prop};
        case IDLE_MAP:
            return {...state, coord: action.payload.coord};
        case CLEAR_DETAIL:
            return {...state, type: '', prop: ''};
        default:
            return state;
    }
}

