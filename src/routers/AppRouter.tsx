import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route
} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { FakeAPI } from "../redux/services/FakeAPI"

import { MainScreen } from '../pages/Main/MainScreen';
import { NotFounScreen } from '../pages/NotFounScreen';
import { LoginScreen } from '../pages/Auth/LoginScreen';
import { RegisterScreen } from '../pages/Auth/RegisterScreen';
import { RegisterCompanyScreen } from '../pages/Auth/RegisterCompanyScreen';
import { LoadingScreen } from "../pages/Loading/LoadingScreen";

import { login } from "../redux/actions/auth"

import PrivateRoute from './PrivateRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);

    useEffect(() => {
        FakeAPI.loadAuthentication()
        .then((res: any) => {
            dispatch(login(res.token, res.user));
            setChecking(false);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [dispatch]);

    if(checking){
        return <LoadingScreen />
    }

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