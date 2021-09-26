// import { useSelector } from 'react-redux';
import { Route, Redirect, useLocation } from 'react-router-dom';

// import { IState } from "../interfaces/IState";

export default function PrivateRoute({ component: Component, ...rest }: any) {

    const location = useLocation();
    const logged = true;

    // const state = useSelector((state: IState) => state);

    return (
        <Route {...rest}>
            {logged ? (<Component />) : (<Redirect to={{ pathname: '/404', state: { from: location } }} />)}
        </Route>)
};