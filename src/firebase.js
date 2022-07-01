// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAvxcG5BRQ_E14QBjGoYckXb0xQYCgCEA",
  authDomain: "pokemons-3415a.firebaseapp.com",
  databaseURL: "https://pokemons-3415a-default-rtdb.firebaseio.com",
  projectId: "pokemons-3415a",
  storageBucket: "pokemons-3415a.appspot.com",
  messagingSenderId: "871731056314",
  appId: "1:871731056314:web:1b125186132a8e24c6fc83"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);