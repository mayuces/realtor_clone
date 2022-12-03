// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQHL6E1WzbJZIg4yWhBGbC3a8FwCVeDuo",
  authDomain: "realtor-clone-d6b7e.firebaseapp.com",
  projectId: "realtor-clone-d6b7e",
  storageBucket: "realtor-clone-d6b7e.appspot.com",
  messagingSenderId: "585789232595",
  appId: "1:585789232595:web:a0650b2db2030c37730b26"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();