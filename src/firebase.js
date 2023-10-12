// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD0CbuM61ajJRNvNLCmoc5jPUE9MpU7psU',
  authDomain: 'react-todo-b230e.firebaseapp.com',
  projectId: 'react-todo-b230e',
  storageBucket: 'react-todo-b230e.appspot.com',
  messagingSenderId: '75235781588',
  appId: '1:75235781588:web:68e4fe7c2d22b0ea858441',
  measurementId: 'G-G5CJVL3XVV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
