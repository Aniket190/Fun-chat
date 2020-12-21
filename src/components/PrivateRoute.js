import React from 'react';
import { Redirect,Route } from 'react-router';

const PrivateRoute = ({childrens,...routeProps}) => {
    
    const profile=true;
    
    if(!profile)
    {
        return <Redirect to="/signin" />;
    }

    return <Route {...routeProps}> {childrens}</Route>
}

export default PrivateRoute
