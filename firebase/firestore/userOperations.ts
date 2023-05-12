import {auth} from "../firebaseConfig";
import {signInWithEmailAndPassword} from "firebase/auth";


export const login = async (email: string, password: string): Promise<void> => {
    console.log('Firebase operation - Login')
    return await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Login successful: ', userCredential)
            // Signed in
        })

}