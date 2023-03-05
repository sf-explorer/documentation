import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

//# https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public
//
const config = {
  apiKey: "AIzaSyBIzelXfuyzjMNwwRQzqxrheDKazx4J9Go",
  authDomain: "industry-explorer.firebaseapp.com",
  projectId: "industry-explorer",
  storageBucket: "industry-explorer.appspot.com",
  messagingSenderId: "485012555797",
  appId: "1:485012555797:web:f5d6b8757c275b7e3ca61c",
  measurementId: "G-S493TG50YY"
};

const app = initializeApp(config)
const db = getFirestore(app)
export const auth = getAuth(app)

export default db
