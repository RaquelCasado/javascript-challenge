import React from "react";
import {RadialChart} from "react-vis/es";

export class Graphs extends React.Component {
    
    render() {
        return (
            <div style={{height: '100vh', width: '35vw', backgroundColor: '#2c303b', padding: 50, textAlign: 'center', alignItems: 'center'}}>
                <h4 style={{color: 'white'}}>Ramps Per Construction Material</h4>
                <RadialChart
                    animation={{damping: 9, stiffness: 300}}
                    data={[{angle: 1}, {angle: 5}, {angle: 2}]}
                    width={350}
                    height={350}
                    style={{margin:'auto', display: 'block'}}/>
                <h4 style={{color: 'white'}}>Ramps Per Size Category</h4>
                <RadialChart
                    data={[{angle: 1}, {angle: 5}, {angle: 2}]}
                    width={350}
                    height={350} />
            </div>
        );
    }
}