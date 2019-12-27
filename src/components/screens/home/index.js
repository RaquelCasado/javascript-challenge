import React from "react";
import {Header} from "../header";
import {Map} from "../map";
import {fetchRampsStarted} from "../../../actions/totalRampsActions";
import {connect} from "react-redux";
import {SideScreen} from "../sideScreen";

class HomeScreen extends React.Component {
    componentWillMount() {
        this.props.dispatchFetchRamps();
    }

    render() {
        return (
            <div style={{backgroundColor: '#2c303b'}}>
                <Header/>
                <div style={{display: 'flex', flex: 1, flexDirection: 'row', height: '95vh'}}>
                    <Map style={{flexGrow: 4}}/>
                    <SideScreen style={{flexGrow: 1}}/>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchFetchRamps: () => dispatch(fetchRampsStarted()),
    }
};

export const Home = connect(null, mapDispatchToProps)(HomeScreen);