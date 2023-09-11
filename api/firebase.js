import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTt9TfnBlDM1gZ86IPfQreq5hyIanxzT8",
  authDomain: "quiz-react-app-7dddc.firebaseapp.com",
  projectId: "quiz-react-app-7dddc",
  storageBucket: "quiz-react-app-7dddc.appspot.com",
  messagingSenderId: "286604053036",
  appId: "1:286604053036:web:bb5fe06970c7353b055f89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }; // データベースオブジェクトをエクスポート
