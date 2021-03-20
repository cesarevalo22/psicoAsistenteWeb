import React from "react";

import { Route } from 'react-router-dom';  
  
const AppRouteComplement = ({component: Component, showAllFooter, showCharacter, userName, layout: Layout, ...rest}) => {
  return (  
      <Route
       {...rest}
       render={props => (  
        <Layout showAllFooter={showAllFooter} showCharacter={showCharacter} userName={userName}>  
            <Component {...props} />  
        </Layout>  
      )} />  
    )};  
  
export default AppRouteComplement;