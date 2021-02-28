import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import SignIn from './components/Signin';
import SignUp from './components/Signup';

const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
});

SignUp

export default ({history}) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history} >
                    <Switch>
                        <Route path="/auth/signin" component={SignIn} />
                        <Route path="/auth/signup" component={SignUp} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}
