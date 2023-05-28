// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries


// console.log(import.meta.env.VITE_AUTHDOMAIN);
// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey:import.meta.env.VITE_APIKEY,
//     authDomain:import.meta.env.VITE_AUTHDOMAIN,
//     projectId:import.meta.env.VITE_PROJECTID,
//     storageBucket:import.meta.env.VITE_STORAGEBUCKET,
//     messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
//     appId:import.meta.env.VITE_APPID
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdyefsJBU3DNwdtqbZf6gStVFLHWMsggU",
  authDomain: "bistro-boss-1f5a7.firebaseapp.com",
  projectId: "bistro-boss-1f5a7",
  storageBucket: "bistro-boss-1f5a7.appspot.com",
  messagingSenderId: "297765692681",
  appId: "1:297765692681:web:d39a7382d698fba62d5fd8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);