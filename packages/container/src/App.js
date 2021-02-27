import React from 'react';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
import { BrowserRouter as Router, Route, NavLink, BrowserRouter } from 'react-router-dom'



export default () => {
  return( 
    <BrowserRouter >
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};