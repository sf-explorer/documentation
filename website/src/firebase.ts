import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';

//# https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public

const config = {
  apiKey: "AIzaSyAsIgTtbQkg_u6sUjCYMuPJqT7rqz41v5U",
  authDomain: "learn-map-ez.firebaseapp.com",
  projectId: "learn-map-ez",
  storageBucket: "learn-map-ez.appspot.com",
  messagingSenderId: "326655846030",
  appId: "1:326655846030:web:2617fcae56ed22cbdf8bdf",
  measurementId: "G-S2GQJMLK4Z"
};

const app = initializeApp(config)
const db = getFirestore(app)
export const auth = getAuth(app)

export default db