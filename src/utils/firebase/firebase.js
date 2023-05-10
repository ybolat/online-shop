import {initializeApp} from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCm6aE98TDWiwNna-AnsjWT2PSjEgst_YI",
    authDomain: "udemy-capstone1-db.firebaseapp.com",
    projectId: "udemy-capstone1-db",
    storageBucket: "udemy-capstone1-db.appspot.com",
    messagingSenderId: "73527058269",
    appId: "1:73527058269:web:d4b8a342643c03693b92b4"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {displayName, email, createdAt, ...additionalInformation});
        } catch (error) {
            console.log(error.message);
        }
    }

    return userDocRef;
}

export const createAuthUserWihEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWihEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);