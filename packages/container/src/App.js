import React, { lazy, Suspense, useState } from 'react';
import Header from './components/Header';
import Progress from "./components/Progress";
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';


const MarketingAppLazy = lazy(() => import('./components/MarketingApp'));
const AuthAppLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  return(
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter >
        <div>
          <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn}/>
          <Suspense fallback={
            <Progress />
          }>
            <Switch>
              <Route path="/auth">
                <AuthAppLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/" component={MarketingAppLazy} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};