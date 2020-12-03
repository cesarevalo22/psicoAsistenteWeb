import React from "react";

import { Route } from 'react-router-dom';  
  
const AppRouteComplement = ({component: Component, layout: Layout, showAllFooter, ...rest}) => {
  return (  
      <Route
       {...rest}
       render={props => (  
        <Layout showAllFooter={showAllFooter}>  
            <Component {...props} />  
        </Layout>  
      )} />  
    )};  
  
export default AppRouteComplement;