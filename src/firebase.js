import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBlP9RbXhQ63T2_cYTMZJ6h3H5FqizTM1E',
  authDomain: 'riads-c3aa0.firebaseapp.com',
  projectId: 'riads-c3aa0',
  storageBucket: 'riads-c3aa0.appspot.com',
  messagingSenderId: '169688549089',
  appId: '1:169688549089:web:ecce98e17c9544fd5419a0',
  measurementId: 'G-HCHYS24QBX',
};
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export default app;
