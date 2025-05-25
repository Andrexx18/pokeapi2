// firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDF-Zpimm3sFX7FF6U8Ay6XiZyh2IGhTuw",
  authDomain: "pokeapi2-22184.firebaseapp.com",
  projectId: "pokeapi2-22184",
  storageBucket: "pokeapi2-22184.firebasestorage.app",
  messagingSenderId: "591074988543",
  appId: "1:591074988543:web:dc5f6fdb16ade43b0417ca"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
