
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAyYkiSM_zfWNGQRhjPeNCqB3Q7Ryfci4Q",
  authDomain: "oneshop-diaz.firebaseapp.com",
  projectId: "oneshop-diaz",
  storageBucket: "oneshop-diaz.appspot.com",
  messagingSenderId: "823372962020",
  appId: "1:823372962020:web:e01f0e3674a44f451774f1",
  measurementId: "G-11ZRNKRQ55"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);