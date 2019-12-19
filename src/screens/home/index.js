import React from "react";
import {Header} from "../header";
import {Map} from "../map";
import {Graphs} from "../graphs";

export class Home extends React.Component {
    render() {
        return (
            <div>
               <Header/>
                <div style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
                    <Map style={{flexGrow: 4}}/>
                    <Graphs style={{flexGrow: 1}}/>
                </div>
            </div>
        );
    }
}