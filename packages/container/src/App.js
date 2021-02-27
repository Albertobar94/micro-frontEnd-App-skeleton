import React from 'react';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
import { BrowserRouter as Router, Route, NavLink, BrowserRouter } from 'react-router-dom'
import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

export default () => {
  return(
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter >
        <div>
          <Header />
          <MarketingApp />
        </div>
      </BrowserRouter>
    </StylesProvider>
    
  );
};