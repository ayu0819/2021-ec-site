import firebase from 'firebase/app';

// function
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/functions'

// config
import {firebaseConfig} from './config';

// firebase init
firebase.initializeApp(firebaseConfig);

// method
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export const functions = firebase.functions();

// date day
export const FirebaseTimestamp = firebase.firestore.Timestamp;