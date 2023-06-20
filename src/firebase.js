import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCrj0r2wPBqdVi1ZOMAC29m7P_PopclbH8',
  authDomain: 'riads-development.firebaseapp.com',
  projectId: 'riads-development',
  storageBucket: 'riads-development.appspot.com',
  messagingSenderId: '1045705555366',
  appId: '1:1045705555366:web:9d6b5168bd32ecc147e367',
  measurementId: 'G-ND81F0ZW11',
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();

export default app;
