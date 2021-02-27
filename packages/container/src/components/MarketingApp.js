import { mount } from "marketing/MarketingApp";
import React, { useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";


export default () => {
  /**
   * This ref is to grab the DOM HTMLElement reference to render the app
   */
  const ref = useRef(null)

  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      /**
       * @function onNavigate updates the history browser with the new pathname if the condition is met
       * @param {nextPathname} nextPathname is the pathname provided by memory history object
       * which we will use to sync with the container path
       */
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if(pathname !== nextPathname) return history.push(nextPathname);
      }
    });

    history.listen(onParentNavigate);
  },[]);

  return <div ref={ref} />
}
