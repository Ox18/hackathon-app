import Swal from 'sweetalert2';

import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';
import { startLoading, finishLoading } from './ui';

export const startLoginEmailWithPassword = (email: string, password: string) => {
    return (dispatch: any) => {

        dispatch(startLoading())

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }: any) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            })
            .catch((e) => {
                dispatch(finishLoading());
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: e.message
                });
            });
    }
};

export const startRegisterWithEmailPassword = (email: string, password: string, name: string) => {
    return (dispatch: any) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }: any) => {
                await user.updateProfile({
                    displayName: name
                });
                dispatch(login(user.uid, user.displayName));
            })
            .catch(err => {
                console.log(err);
            });
    };
}


export const startGoogleLogin = () => {
    return (dispatch: any) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }: any) => {
                dispatch(login(user.uid, user.displayName));
            })
    }
}

export const login = (uid: number, displayName: string) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLogout = () => {
    return async (dispatch: any) => {
        await firebase.auth().signOut();

        dispatch(logout());
    }
}

export const logout = () => {
    return {
        type: types.logout
    }
}