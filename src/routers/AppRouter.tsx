import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
} from 'react-router-dom';

import { PublicRoute } from './PublicRoute';

import { MainScreen } from '../pages/Main/MainScreen';
import { LoginScreen } from '../pages/Auth/LoginScreen';
import { RegisterScreen } from '../pages/Auth/RegisterScreen';
import { RegisterCompanyScreen } from '../pages/Auth/RegisterCompanyScreen';

export const AppRouter = () => {

    const [isLoggedIn] = useState(false)

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth/login"
                        isAuthenticated={isLoggedIn}
                        component={LoginScreen}
                    />
                    <PublicRoute
                        path="/auth/register/user"
                        isAuthenticated={isLoggedIn}
                        component={RegisterScreen}
                    />
                    <PublicRoute
                        path="/auth/register/company"
                        isAuthenticated={isLoggedIn}
                        component={RegisterCompanyScreen}
                    />
                    <PublicRoute
                        path="/"
                        isAuthenticated={isLoggedIn}
                        component={MainScreen}
                    />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}