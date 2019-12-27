import React from "react";
import {connect} from "react-redux";
import {filterRampsByProp} from "../../utils";

class DetailsScreen extends React.Component{
    renderEmptyScreen = () => {
        return(
            <a style={{color: '#d1d6e3'}}> Choose a ramp in the map or a construction material or a size in the graphs above to see details on ramps.</a>
        )
    };

    renderDetails = () => {
        const {ramps, detailedRamps} = this.props;
        const rampList = filterRampsByProp(ramps, detailedRamps.type, detailedRamps.prop, detailedRamps.coord);
        return(
            <div>
                <h4 style={{color: '#d1d6e3'}}>List of ramps by {detailedRamps.prop}:{detailedRamps.type} </h4>
                {rampList.map(ramp => {
                    return(
                        <div style={{marginBottom: 15, backgroundColor:'#575d6e', padding:10}}>
                            <p style={{color: '#d1d6e3', fontSize:12}}>Id: {ramp.id}</p>
                            <p style={{color: '#d1d6e3', fontSize:12}}>Material: {ramp.properties.material}</p>
                            <p style={{color: '#d1d6e3', fontSize:12}}>Area: {ramp.properties.shape_area}</p>
                        </div>)
                })}
            </div>
        )
    };

    render(){
        const {detailedRamps} = this.props;
        return(
            <div style={{backgroundColor: '#2c303b', height:'45vh', padding: 50, overflowY: 'scroll'}}>
                {detailedRamps.type !== '' ? this.renderDetails() : this.renderEmptyScreen()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ramps:state.ramps.result.body,
    detailedRamps: state.detailedRamps});

export const Details = connect(mapStateToProps)(DetailsScreen);