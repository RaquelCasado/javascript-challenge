import React from "react";
import {Route, Switch} from 'react-router';
import {Home} from "./components/screens/home";
import {BrowserRouter} from "react-router-dom";

export default () =>
    (<BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
        </Switch>
    </BrowserRouter>);

