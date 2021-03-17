import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC08IgFXONWWSPSJX9YH_MUs23o9rHWULI",
    authDomain: "expense-tracker-5002f.firebaseapp.com",
    projectId: "expense-tracker-5002f",
    storageBucket: "expense-tracker-5002f.appspot.com",
    messagingSenderId: "1020307746524",
    appId: "1:1020307746524:web:08d76b14c9a1698ef34e19",
    measurementId: "G-BG6ZBDNS9G",
    databaseURL: 'https://expense-tracker-5002f.firebaseio.com',
}

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;