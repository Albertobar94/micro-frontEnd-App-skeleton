import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import { StylesProvider } from "@material-ui/core/styles";

import Landing from './components/Landing';
import Pricing from './components/Pricing'

export default () => {
    return <div>
        <StylesProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/pricing' component={Pricing} />
                    <Route exact path='/' component={Landing} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
}
