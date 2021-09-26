import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route
} from 'react-router-dom';

import { MainScreen } from '../pages/Main/MainScreen';
import { NotFounScreen } from '../pages/NotFound/NotFounScreen';
import { LoginScreen } from '../pages/Auth/LoginScreen';
import { RegisterScreen } from '../pages/Auth/RegisterScreen';
import { RegisterCompanyScreen } from '../pages/Auth/RegisterCompanyScreen';

import PrivateRoute from './PrivateRoute';

export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={MainScreen} />
                    <PrivateRoute path="/login" exact component={LoginScreen} />
                    <PrivateRoute path="/register" exact component={RegisterScreen} />
                    <PrivateRoute path="/register-company" exact component={RegisterCompanyScreen} />
                    <Route path="/404" exact component={NotFounScreen} />
                    <Route path="*">
                        <Redirect to="/404" />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}