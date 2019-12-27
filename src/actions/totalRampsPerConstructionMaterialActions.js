import {
    FETCH_TOTAL_RAMPS_PER_CONSTRUCTION_MATERIAL_FAILED,
    FETCH_TOTAL_RAMPS_PER_CONSTRUCTION_MATERIAL_STARTED,
    FETCH_TOTAL_RAMPS_PER_CONSTRUCTION_MATERIAL_SUCCEEDED
} from "../constants";

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