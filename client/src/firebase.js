import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEYS,
  authDomain: process.env.REACT_APP_FIREBASE_KEYS,
  databaseURL: process.env.REACT_APP_FIREBASE_KEYS,
  projectId: process.env.REACT_APP_FIREBASE_KEYS,
  storageBucket: process.env.REACT_APP_FIREBASE_KEYS,
  messagingSenderId: process.env.REACT_APP_FIREBASE_KEYS,
  appId: process.env.REACT_APP_FIREBASE_KEYS,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectAuth = firebase.auth();
export const projectAuthProvider = new firebase.auth.GoogleAuthProvider();
