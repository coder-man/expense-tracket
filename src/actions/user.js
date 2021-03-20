import Firebase, { db } from '../config/FirebaseConfig';
import firebase from 'firebase';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';

// Define Types

export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';

export const GOOGLE_SIGNUP = 'GOOGLE_SIGNUP';
export const GOOGLE_LOGIN = 'GOOGLE_LOGIN';

export const FACEBOOK_SIGNUP = 'FACEBOOK_SIGNUP';
export const FACEBOOK_LOGIN = 'FACEBOOK_LOGIN';

// Action Creator

export const updateEmail = email => {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

export const updatePassword = (password) => {
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}

export const login = () => {
    return async (dispatch, getState) => {
        try{
            const { email, password } = getState().user;
            const response = await Firebase.auth().signInWithEmailAndPassword(email, password);
            dispatch(getUser(response.user.uid))

        } catch(e){
            alert(e);
        }
    }
}

export const getUser = uid => {
    return async (dispatch, getState) => {
        try{
            const user = await db
                    .collection('users')
                    .doc(uid)
                    .get()

            dispatch({ type: LOGIN, payload: user.data() });
        } catch(e){
            alert(e);
        }
    }
}

export const signup = () => {
    return async (dispatch, getState) => {
        try{
           const { email, password } = getState().user;
           const response = await Firebase.auth().createUserWithEmailAndPassword(email, password);
            if(response.user.uid){
                const user = {
                    uid: response.user.uid,
                    email: email
                }

                db.collection('users')
                    .doc(response.user.uid)
                    .set(user)
            }

           dispatch({ type: SIGNUP, payload: response.user });
        } catch(e){
            alert(e);
        }
    }
}

export const google_signin = () => {
    return async (dispatch, getState) => {
      try{

   GoogleSignin.configure({
     scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
     webClientId:
       '789279390394-b0eou3c00m4piojdq4v8iii64ause1b3.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
     });


        await GoogleSignin.hasPlayServices();
        const { accessToken, idToken, type } = await GoogleSignin.signIn();
        // code to user login and update to users
        const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
              firebase.auth().signInWithCredential(credential).then((data) => {
                const { currentUser } = firebase.auth();
                dispatch(getUser(currentUser.uid));
              }).catch((error) => {
                  alert(error.toString());
              });
      } catch(e){
        alert(e);
      }
    }
}
