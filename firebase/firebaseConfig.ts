import {initializeApp, getApps, getApp} from 'firebase/app';

// Optionally import the services that you want to use
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
// import {...} from "firebase/database";
import {getFirestore} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";
import {getAnalytics} from "firebase/analytics"

// Initialize Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyDj2H4OZs-RXySjQG3JoC9z2xKtiuNtE7U',
    authDomain: 'birthday-reminder-f4082.firebaseapp.com',
    projectId: 'birthday-reminder-f4082',
    storageBucket: 'birthday-reminder-f4082.appspot.com',
    messagingSenderId: '98220838682',
    appId: '1:98220838682:web:9e7e11343fdb2cac1fe6a3',
    measurementId: 'G-7LYGXT25N9',
};

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

let app;
if (getApps().length === 0) {
    app = initializeApp(firebaseConfig)
} else {
    app = getApp("celebration")
}

const firestore = getFirestore(app)
const auth = getAuth(app)
const analytics = getAnalytics(app)

export {firestore, auth, signInWithEmailAndPassword, analytics}