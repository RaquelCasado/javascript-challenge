import {combineReducers} from 'redux';
import {
    detailedRampsReducer,
    rampsReducer,
    totalRampsPerConstructionMaterialReducer,
    totalRampsPerSizeReducer
} from "./ramps";

export default combineReducers({
    ramps: rampsReducer,
    totalRampsPerConstructionMaterial: totalRampsPerConstructionMaterialReducer,
    totalRampsPerSize: totalRampsPerSizeReducer,
    detailedRamps: detailedRampsReducer,
});