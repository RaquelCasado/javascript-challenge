import {
    FETCH_TOTAL_RAMPS_PER_CONSTRUCTION_MATERIAL_FAILED,
    FETCH_TOTAL_RAMPS_PER_CONSTRUCTION_MATERIAL_STARTED,
    FETCH_TOTAL_RAMPS_PER_CONSTRUCTION_MATERIAL_SUCCEEDED
} from "../../constants";

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