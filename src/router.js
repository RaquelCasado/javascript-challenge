import React from "react";
import {Route, Switch} from 'react-router';
import {Home} from "./screens/home";
import {About} from "./screens/about";
import {BrowserRouter} from "react-router-dom";

export default () =>
    (<BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
        </Switch>
    </BrowserRouter>);

