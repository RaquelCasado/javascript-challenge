export function filterRampsByProp(ramps, type, prop, coord) {
    const rampsFilteredByCoord = filterByCoord(ramps, coord);
    switch(prop){
        case 'Material':
            return filterByMaterial(rampsFilteredByCoord, type);
        case 'Size':
            return filterBySize(rampsFilteredByCoord, type);
        default:
            return rampsFilteredByCoord
    }
}

function filterByMaterial(ramps, type){
    const rampsToRender = [];
    for(const ramp of ramps){
        if(ramp.properties.material === type){
            rampsToRender.push(ramp)
        }
    }
    return rampsToRender
}

function filterBySize(ramps, type) {
    const rampsToRender = [];
    let max, min;
    switch (type) {
        case 'big':
            min = 200;
            max = 526;
            break;
        case 'medium':
            min = 50;
            max = 200;
            break;
        case 'small':
            min = 0;
            max = 50;
            break;
    }
    for(const ramp of ramps){
        if(min <= ramp.properties.shape_area && ramp.properties.shape_area <= max){
            rampsToRender.push(ramp)
        }
    }
    return rampsToRender;
}

function filterByCoord(ramps, coord){
    const filteredRamps = [];
    for(const ramp of ramps){
        const rampCoord = ramp.geometry.coordinates[0][0][0];
        if((coord.sw_lat <= rampCoord[1]) && (rampCoord[1] <= coord.ne_lat) && (coord.sw_lng <= rampCoord[0]) && (rampCoord[0] <= coord.ne_lng)){
            filteredRamps.push(ramp);
        }
    }
    return filteredRamps;
}