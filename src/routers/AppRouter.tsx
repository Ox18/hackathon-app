import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';


import { firebase } from '../firebase/firebase-config';
import { login } from '../actions/auth';

import { PublicRoute } from './PublicRoute';

import { MainScreen } from '../pages/Main/MainScreen';


export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user: any) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }

            setChecking(false);
        });
    }, [dispatch, setChecking, setIsLoggedIn]);

    if (checking) {
        return <h1>Cargando...</h1>
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/"
                        isAuthenticated={isLoggedIn}
                        component={MainScreen}
                    />


                </Switch>
            </div>
        </Router>
    )
}