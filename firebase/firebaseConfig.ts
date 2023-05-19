import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDj2H4OZs-RXySjQG3JoC9z2xKtiuNtE7U",
    authDomain: "birthday-reminder-f4082.firebaseapp.com",
    projectId: "birthday-reminder-f4082",
    storageBucket: "birthday-reminder-f4082.appspot.com",
    messagingSenderId: "98220838682",
    appId: "1:98220838682:web:9e7e11343fdb2cac1fe6a3",
    measurementId: "G-7LYGXT25N9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//Google iso auth: 98220838682-gpod1r5df6k8vrlnnlcgbaajtln3jakv.apps.googleusercontent.com