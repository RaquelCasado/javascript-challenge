import React from "react";
import Logo from '../../assets/img/logo01.jpeg';

export class Header extends React.Component {
    render() {
        return (
            <div style={{height: 50, width: '100vw', backgroundColor: '#22252e'}}>
                <img src={Logo} style={{height: 40, width:40}}/>
            </div>
        );
    }
}