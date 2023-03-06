
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyDHWWaAhq8pd-iV3FBW1xPrBhP7qM3v5UE",
//     authDomain: "try1-a0d4b.firebaseapp.com",
//     projectId: "try1-a0d4b",
//     storageBucket: "try1-a0d4b.appspot.com",
//     messagingSenderId: "743305535595",
//     appId: "1:743305535595:web:33c27bc5359893f479512e"
//   };
  
// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

import AsyncStorage from '@react-native-async-storage/async-storage';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs;

import {LogBox} from 'react-native';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9yekQ28jODMfqxBIrxNDK1JR95ffxFPo",
  authDomain: "ardex-a90b5.firebaseapp.com",
  projectId: "ardex-a90b5",
  storageBucket: "ardex-a90b5.appspot.com",
  messagingSenderId: "501376279923",
  appId: "1:501376279923:web:f9efe43fc09771193b9106"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);