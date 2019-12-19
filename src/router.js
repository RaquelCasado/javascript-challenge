import React from "react";
import {Route, Switch} from 'react-router';
import {Home} from "./screens/home";
import {Map} from "./screens/map";
import {About} from "./screens/about";
import {BrowserRouter} from "react-router-dom";

export default () =>
    (<BrowserRouter>
        <Switch>
            <Route path="/" exact component={Map}/>
            <Route path="/about" exact component={About}/>
        </Switch>
    </BrowserRouter>);

