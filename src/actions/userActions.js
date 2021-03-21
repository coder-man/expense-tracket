import Firebase, { db } from '../config/FirebaseConfig';
import firebase from 'firebase';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';

// Define Types
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const UPDATE_CONFPASSWORD = 'UPDATE_CONFPASSWORD';

export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';

export const GOOGLE_SIGNUP = 'GOOGLE_SIGNUP';
export const GOOGLE_LOGIN = 'GOOGLE_LOGIN';

export const FACEBOOK_SIGNUP = 'FACEBOOK_SIGNUP';
export const FACEBOOK_LOGIN = 'FACEBOOK_LOGIN';

// Action Creator
export const updateName = name => {
    return {
        type: UPDATE_NAME,
        payload: name,
    }
}

export const updateEmail = email => {
    return {
        type: UPDATE_EMAIL,
        payload: email,
    }
}

export const updatePassword = (password) => {
    return {
        type: UPDATE_PASSWORD,
        payload: password,
    }
}

export const updateConfpassword = (conf_password) => {
    return {
        type: UPDATE_CONFPASSWORD,
        payload: conf_password,
    }
}

export const login = () => {
    return async (dispatch, getState) => {
        try{
            const { email, password } = getState().user;
            const response = await Firebase.auth().signInWithEmailAndPassword(email, password);
            if(response){
                const uid = response.user.uid;
                const usersRef = firebase.firestore().collection('users');

                usersRef.doc(uid)
                        .get()
                        .then((firestroeDocument) =>{
                            if(!firestoreDocument.exists){
                                alert("User does not exist anymore");
                                return;
                            }
                            const user = firestoreDocument.data();
                            dispatch(getUser(response.user));
                        });    
            } else {
                alert('Login fail');
            }            

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
           const { name, email, password, conf_password } = getState().user;
           if( password === conf_password){
           const response = await Firebase.auth().createUserWithEmailAndPassword(email, password);
            if(response.user.uid){
                const uid = response.user.uid;
                const user_data = {
                    id : uid,
                    name,
                    email,
                };

                const usersRef = firebase.firestore().collection('users');
                      usersRef
                          .doc(uid)
                          .set(user_data)
                          .then(() => {
                            dispatch({ type: SIGNUP, payload: response.user });
                          })
                          .catch((error) => alert(error));  

               /* const user = {
                    uid: response.user.uid,
                    email: email
                }

                db.collection('users')
                    .doc(response.user.uid)
                    .set(user); */
            }

           dispatch({ type: SIGNUP, payload: response.user });
        } else {
            alert('Password Not Matched');
        }
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