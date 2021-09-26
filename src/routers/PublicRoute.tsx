import { Route, Redirect } from 'react-router-dom';

export default function PublicRoute({ component: Component, ...rest }: any) {
    const logged = false;

    return (
        <Route {...rest}>
            {!logged ? <Component /> : <Redirect to="/dashboard" />}
        </Route>
    )
};