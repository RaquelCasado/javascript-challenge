import {CHOOSE_FOR_DETAIL, CLEAR_DETAIL, IDLE_MAP} from "../../constants";

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