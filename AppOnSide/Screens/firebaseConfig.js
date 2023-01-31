// Import the functions you need from the SDKs you need
import { initializeApp } from "@react-native-firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHWWaAhq8pd-iV3FBW1xPrBhP7qM3v5UE",
    authDomain: "try1-a0d4b.firebaseapp.com",
    projectId: "try1-a0d4b",
    storageBucket: "try1-a0d4b.appspot.com",
    messagingSenderId: "743305535595",
    appId: "1:743305535595:web:33c27bc5359893f479512e"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import { getFirestore, getAuth } from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDHWWaAhq8pd-iV3FBW1xPrBhP7qM3v5UE",
//   authDomain: "try1-a0d4b.firebaseapp.com",
//   projectId: "try1-a0d4b",
//   storageBucket: "try1-a0d4b.appspot.com",
//   messagingSenderId: "743305535595",
//   appId: "1:743305535595:web:33c27bc5359893f479512e"
// };

// // Initialize Firebase
// // export const app = initializeApp(firebaseConfig);
// // export const db = getFirestore(app);

// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// if (__DEV__) {
//     try {
//         if (Platform.OS === "android") {
//             connectAuthEmulator(auth, "http://10.0.2.2:9099");
//         } else {
//             connectAuthEmulator(auth, "http://localhost:9099");
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }

// var db = null;
// if (__DEV__) {
//     try {
//         if (Platform.OS === "android") {
//             db = initializeFirestore(app, {experimentalForceLongPolling: true});
//             connectFirestoreEmulator(db, "10.0.2.2", 8080);
//         } else {
//             db = getFirestore(app);
//             connectFirestoreEmulator(db, "localhost", 8080);
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }
// else {
//     db = getFirestore(app);
// }