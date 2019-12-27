import {CHOOSE_FOR_DETAIL, CLEAR_DETAIL, IDLE_MAP} from "../constants";

export function chooseForDetail(prop, type){
    return {
        type: CHOOSE_FOR_DETAIL,
        payload: {
            type,
            prop
        }
    }
}

export function clearDetail(){
    return {
        type: CLEAR_DETAIL
    }
}

export function idleMap(ne_lat, ne_lng, sw_lat, sw_lng){
    return {
        type: IDLE_MAP,
        payload: {
            coord: {
                ne_lat, ne_lng, sw_lat, sw_lng
            }
        }
    }
}