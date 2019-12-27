import {combineReducers} from 'redux';
import {rampsReducer} from "./totalRampsReducer";
import {totalRampsPerConstructionMaterialReducer} from "./totalRampsPerConstructionMaterialReducer";
import {totalRampsPerSizeReducer} from "./totalRampsPerSizeReducer";
import {detailedRampsReducer} from "./detailedRampsReducer";

export default combineReducers({
    ramps: rampsReducer,
    totalRampsPerConstructionMaterial: totalRampsPerConstructionMaterialReducer,
    totalRampsPerSize: totalRampsPerSizeReducer,
    detailedRamps: detailedRampsReducer,
});