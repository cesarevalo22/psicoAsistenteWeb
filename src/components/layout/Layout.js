import React from 'react';
import Sidebar from '../sidebar/Sidebar';

function Layout(props) {
    return (
      <React.Fragment>
        <Sidebar />
        {props.children}
      </React.Fragment>
    );
  }
  
  export default Layout;
  