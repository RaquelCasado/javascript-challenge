import React from "react";
import {Component} from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps";
import {connect} from "react-redux";
import {filterRampsByProp} from "../../utils";
import {idleMap} from "../../actions/ramps";

class MapScreen extends Component {
    state = {
        ramps: [],
        detailedType: '',
        map: React.createRef()
    };

    componentDidMount() {
        setTimeout(() =>this.setState({ramps: this.getRampsToRender()}), 1000)
    }


    componentDidUpdate(prevProps) {
        if (this.props.detailedRamps.type !== this.state.detailedType) {
            this.setState({
                ramps: this.getRampsToRender(),
                detailedType: this.props.detailedRamps.type
            });
        }
    }

    getRampsToRender() {
        const {ramps, detailedRamps} = this.props;
        let rampsToRender = ramps || [];
        if(detailedRamps.type !== ''){
            rampsToRender = filterRampsByProp(ramps, detailedRamps.type, detailedRamps.prop, detailedRamps.coord);
        }
        return rampsToRender
    }

    map = () => (
        <GoogleMap defaultZoom={11}
                   defaultCenter={{lat: -27.914618, lng: 153.334750}}
                   ref={map => {this.map = map;}}
                   onIdle={() => {
                       let ne = this.map.getBounds().getNorthEast();
                       let sw = this.map.getBounds().getSouthWest();
                       this.props.dispatchIdleMap(ne.lat(), ne.lng(), sw.lat(), sw.lng());
                   }}>
            {this.state.ramps ? this.state.ramps.map((ramp) => {
                return (
                    <div>
                        <Marker key={ramp.id} position={this.getCoordinates(ramp)[0]}/>
                    </div>)
            }): null}
        </GoogleMap>
    );

     WrappedMap = withScriptjs(withGoogleMap(this.map));

    getCoordinates = (ramp) => {
        const newPaths = [];
        const paths = ramp.geometry.coordinates[0][0];
        paths.map((path) => {
            newPaths.push({lat: path[1], lng:path[0]})
        });
        return newPaths
    };

    render() {
        return (
            <div style={{width: '100vw', height: '95vh'}}>
                <this.WrappedMap
                    loadingElement={<div style={{height:'100%'}}/>}
                    containerElement={<div style={{height:'100%'}}/>}
                    mapElement={<div style={{height:'100%'}}/>}
                    googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDo5RzJzPphbDRl5ABpUTE4AUDzSbztMk8'}>
                </this.WrappedMap>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchIdleMap: (ne_lat, ne_lng, sw_lat, sw_lng) => dispatch(idleMap(ne_lat, ne_lng, sw_lat, sw_lng))
});

const mapStateToProps = (state) => ({
    ramps: state.ramps.result.body,
    detailedRamps: state.detailedRamps});

export const Map = connect(mapStateToProps, mapDispatchToProps)(MapScreen);

