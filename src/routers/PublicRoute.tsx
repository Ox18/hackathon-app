import React from 'react';
import { Route } from 'react-router-dom';

interface PublicRouteProps {
    isAuthenticated: boolean;
    component: React.ComponentType<any>;
    path: string;
}

export const PublicRoute = ({
    isAuthenticated,
    path,
    component: Component,
    ...rest
}: PublicRouteProps) => {
    return (
        <Route
            exact
            path={path}
            {...rest}
            component={(props: any) =>
                <Component {...props} />
            }
        />
    );
};