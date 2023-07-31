import firebase from 'firebase/compat/app';

// import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBZDrCitSFXiAtcyGfvBfkpBuYa-S2dcgc",
  authDomain: "riads-2db45.firebaseapp.com",
  projectId: "riads-2db45",
  storageBucket: "riads-2db45.appspot.com",
  messagingSenderId: "164572104707",
  appId: "1:164572104707:web:fc2a738d2b1c721a032636",
  measurementId: "G-EPG2LGKGDK"
};

// const app = firebase.initializeApp(firebaseConfig);

const app = firebase.initializeApp(firebaseConfig);

// export const auth = app.auth();
const auth = app.auth();

const db = getFirestore(app);
const storage = getStorage(app)
export {db, auth ,storage};

// export default app;
