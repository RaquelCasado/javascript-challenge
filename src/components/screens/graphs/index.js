import React from "react";
import {connect} from "react-redux";
import {PieChart} from "../../graphs/pieChart";
import {fetchTotalRampsPerMaterialStarted} from "../../../actions/totalRampsPerConstructionMaterialActions";
import {fetchTotalRampsPerSizeStarted} from "../../../actions/totalRampsPerSizeActions.";
import {chooseForDetail, clearDetail} from "../../../actions/detailedRampsActions";


class GraphsScreen extends React.Component {
    state ={
        coord: {}
    };

    componentWillMount() {
        this.props.dispatchFetchTotalRampsPerMaterial();
        this.props.dispatchFetchTotalRampsPerSize();
    }

    componentDidUpdate() {
        const {coord} = this.props;
        if(this.state.coord !== coord){
            this.setState({coord});
            this.props.dispatchFetchTotalRampsPerMaterial(coord);
            this.props.dispatchFetchTotalRampsPerSize(coord);
        }
    }

    getDataForGraph = (rawData) => {
        const data = [];
        for (const prop in rawData) {
            if (rawData.hasOwnProperty(prop)) {
                const property = rawData[prop][0];
                const rampsNumber = rawData[prop][1];
                data.push({id: property, label: property, value: rampsNumber});
            }
        }
        return data;
    };

    handleChartClick = (prop, data) => {
        this.props.dispatchChoseForDetails(prop, data.label);
    };

    render() {
        return (
            <div style={{padding: 20, backgroundColor: '#2c303b', textAlign: 'center'}}>
                <button onClick={() => this.props.dispatchClearDetails()}>Clear filters</button>
                <div style={{textAlign: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom:30}}>
                    <div style={{width: '20vh', height: '21vh'}}>
                        <PieChart
                            data={this.getDataForGraph(this.props.totalRampsPerMaterial)}
                            onClick={(data) => this.handleChartClick('Material', data)}/>
                        <a style={{color: '#d1d6e3'}}>Ramps Per Construction Material</a>
                    </div>
                    <div style={{width: '20vh', height: '21vh'}}>
                        <PieChart
                            data={this.getDataForGraph(this.props.totalRampsPerSize)}
                            onClick={(data) => this.handleChartClick('Size', data)}/>
                        <a style={{color: '#d1d6e3'}}>Ramps Per Size Category</a>
                    </div>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        dispatchFetchTotalRampsPerMaterial: (coord) => dispatch(fetchTotalRampsPerMaterialStarted(coord)),
        dispatchFetchTotalRampsPerSize: (coord) => dispatch(fetchTotalRampsPerSizeStarted(coord)),
        dispatchChoseForDetails: (prop, type) => dispatch(chooseForDetail(prop, type)),
        dispatchClearDetails: () => dispatch(clearDetail())
    }
};

const mapStateToProps = state => ({
    totalRampsPerMaterial: state.totalRampsPerConstructionMaterial.result.body,
    totalRampsPerSize: state.totalRampsPerSize.result.body,
    coord: state.detailedRamps.coord
});

export const Graphs = connect(mapStateToProps, mapDispatchToProps)(GraphsScreen);