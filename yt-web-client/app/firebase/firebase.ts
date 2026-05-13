// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    User
  } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5K1G7sHkZ_bFj6a0eaG5STe-buCokcOA",
  authDomain: "yt-clone-d93ee.firebaseapp.com",
  projectId: "yt-clone-d93ee",
  appId: "1:102523231494:web:55a47f97110abdea381287"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

/**
 * Signs the user in with the Google pop up.
 * @returns A promise that resolves with user credentials.
 */
export function signInWithGoogle() {
    return signInWithPopup(auth, new GoogleAuthProvider());
}

/**
 * Signs the user out.
 * @returns A promise that resolves with user credentials.
 */
export function signOut() {
    return auth.signOut();
}

/**
 *Trigger a callback when user auth state changes.
 *@returns A fucntion to unsubscribe callback.  
 */
export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
}