import React from 'react';
import { Redirect,Route } from 'react-router';

const PublicRoute = ({childrens,...routeProps}) => {
    
    const profile=true;
    
    if(profile)
    {
        return <Redirect to="/" />;
    }

    return <Route {...routeProps}> {childrens}</Route>
}

export default PublicRoute
