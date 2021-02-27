import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from 'history';

/**
 * @param {el} el is the DOM reference whre we want to render the app
 * @param {onNavigate} onNavigate is a Function
 * @fires ReachDom.render with the App component
 * @returns onParentNavigate function to use for browser history updating
 */
const mount = (el, {onNavigate, defaultHistory }) => {
    const history = defaultHistory || createMemoryHistory();
    if(onNavigate) history.listen(onNavigate);
    ReactDOM.render(
        <App  history={history} />,
        el
    );
    return {
        /**
       * @function onParentNavigate 
       * @param {nextPathname} nextPathname is the pathname provided by memory history object
       * which we will use to sync with the container path
       * @returns the history browser with the new pathname if the condition is met
       */
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location;
            if(pathname !== nextPathname) return history.push(nextPathname);
        }
    }
};

/**
 * if we are in development and in isolation call mount immediately
 */
if (process.env.NODE_ENV === 'development' ){
    const devRoot = document.querySelector('#_marketing-dev-root')
    if ( devRoot ) {
        /**
         * we are providing browser history for development mode
         */
        mount( devRoot, { defaultHistory: createBrowserHistory() } );
    }
}

/**
 * we are running through container and we should export the mount function 
*/
export { mount };