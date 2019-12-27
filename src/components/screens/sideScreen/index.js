import React from "react";
import {Graphs} from "../graphs";
import {Details} from "../details";
import {SideBarDivider} from "../../dividers/sideBarDivider";

export class SideScreen extends React.Component {
    render(){
        return(
            <div style={{height: '95vh', width: '45vw'}}>
                <SideBarDivider title="Graphs"/>
                <Graphs/>
                <SideBarDivider title="Details"/>
                <Details/>
            </div>
        )
    }
}
