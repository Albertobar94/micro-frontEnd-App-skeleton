import { mount } from "dashboard/DashboardApp";
import React, { useEffect, useRef } from 'react';

export default () => {
  /**
   * This ref is to grab the DOM HTMLElement reference to render the app
   */
  const ref = useRef(null)

  useEffect(() => {
    mount(ref.current);
  },[]);

  return <div ref={ref} />
}
