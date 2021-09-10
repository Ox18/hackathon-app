import React from 'react';
import { Redirect, Route } from "react-router-dom";

interface PrivateRouteProps {
    isAuthenticated: boolean;
    component: React.ComponentType<any>;
    path: string;
}

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}: PrivateRouteProps) => {
    return (
        <Route
            exact
            {...rest}
            component={(props: any) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: "/auth/login" }} />
                )
            }
        />
    );
};