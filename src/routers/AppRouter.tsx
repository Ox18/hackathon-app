import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route
} from 'react-router-dom';

import { LocalStorageHandler } from "../utils/LocalStorageHandler";

import { MainScreen } from '../pages/Main/MainScreen';
import { NotFounScreen } from '../pages/NotFound/NotFounScreen';
import { LoginScreen } from '../pages/Auth/LoginScreen';
import { RegisterScreen } from '../pages/Auth/RegisterScreen';
import { RegisterCompanyScreen } from '../pages/Auth/RegisterCompanyScreen';

import PrivateRoute from './PrivateRoute';
import { NewFeedCompany } from '../pages/NewFeeds/NewFeedCompany';
import { NewFeedUser } from '../pages/NewFeeds/NewFeedUser';

const instanceAuth = LocalStorageHandler.instanceAuth;

export const AppRouter = () => {

    const [checking, setChecking] = useState(true);

    useEffect(() => {
        const isAuth = instanceAuth.get();
        if(isAuth != null){ // hay una autenticacion pediente
            setTimeout(() => {
                setChecking(false);
            }, 4000);
        }else{
            setChecking(false);
        }
    }, [])

    if(checking) {
        return <div>cargando</div>
    }

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={MainScreen} />
                    <PrivateRoute path="/login" exact component={LoginScreen} />
                    <PrivateRoute path="/register" exact component={RegisterScreen} />
                    <PrivateRoute path="/register-company" exact component={RegisterCompanyScreen} />
                    <Route path="/newfeed-company" exact component={NewFeedCompany} />
                    <Route path="/newfeed-user" exact component={NewFeedUser} />
                    <Route path="/404" exact component={NotFounScreen} />
                    <Route path="*">
                        <Redirect to="/404" />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}