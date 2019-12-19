import React from "react";
import {Component} from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Polygon} from "react-google-maps";
import * as boatRamps from '../../fakeAPi//boat_ramps.json';

const map = () => (
    <GoogleMap defaultZoom={11} defaultCenter={{lat: -28.022101, lng: 153.408355}}>
        {boatRamps.features.map((ramp) => {
            return (<Polygon paths={getCoordinates(ramp)}/>)
        })}
    </GoogleMap>
);

const getCoordinates = (ramp) => {
    const newPaths = [];
    const paths = ramp.geometry.coordinates[0][0];
    paths.map((path) => {
        newPaths.push({lat: path[1], lng:path[0]})
    });
    return newPaths
};

const WrappedMap = withScriptjs(withGoogleMap(map));

export class Map extends Component {

    state = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            <div style={{width: '100vw', height: '100vh'}}>
                <WrappedMap
                    loadingElement={<div style={{height:'100%'}}/>}
                    containerElement={<div style={{height:'100%'}}/>}
                    mapElement={<div style={{height:'100%'}}/>}
                    googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDo5RzJzPphbDRl5ABpUTE4AUDzSbztMk8'}>
                </WrappedMap>
            </div>
        );
    }
}

