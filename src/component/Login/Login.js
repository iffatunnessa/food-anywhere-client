import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                console.log(result.user);
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { displayName, email, photoURL };
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, credential, email);
            });
    }
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <hr className='solid' />
                <button onClick={handleGoogleSignIn} className="google-btn">
                    {/* <FontAwesomeIcon icon={faGoogle} style={{ fontSize: 20, color: "red" }} /> */}
                    <span className="text">Sign in with Google</span>
                </button>
            </div>
        </div>
    );
};

export default Login;