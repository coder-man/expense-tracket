import { 
    LOGIN, 
    SIGNUP, 
    UPDATE_NAME, 
    UPDATE_EMAIL, 
    UPDATE_PASSWORD, 
    UPDATE_CONFPASSWORD, 
    FACEBOOK_LOGIN, 
    FACEBOOK_SIGNUP, 
    GOOGLE_LOGIN, 
    GOOGLE_SIGNUP } from '../actions';

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    conf_password: '',
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOGIN:
            return action.payload;
        case SIGNUP:
            return action.payload;
        case FACEBOOK_LOGIN:
             return action.payload;
        case FACEBOOK_SIGNUP:
             return action.payload;
        case GOOGLE_SIGNUP:
             return action.payload;
        case GOOGLE_LOGIN:
             return action.payload;
        case UPDATE_NAME:
             return { ...state, name:action.payload };
        case UPDATE_EMAIL:
            return { ...state, email:action.payload };
        case UPDATE_PASSWORD:
             return { ...state, password:action.payload };
        case UPDATE_CONFPASSWORD:
             return { ...state, conf_password:action.payload };      
        default:
            return state;

    }
}