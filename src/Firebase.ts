import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from 'firebase/auth';

const FirebaseConfig = {
apiKey: "AIzaSyBImbMQDJssRB4ehwGtc1oNyBL7oiZz3-s",
authDomain: "pgmatch-d91d7.firebaseapp.com",
projectId: "pgmatch-d91d7",
storageBucket: "pgmatch-d91d7.appspot.com",
messagingSenderId: "829297342586",
appId: "1:829297342586:web:89a4e45bc87589061be3c3",
measurementId: "G-NGRJR3KBKS"
};

export const app = firebase.initializeApp(FirebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new firebase.auth.GoogleAuthProvider();

