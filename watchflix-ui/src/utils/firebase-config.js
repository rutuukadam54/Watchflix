
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBisZJ5mVSaE-0ZhQWTLo-hZn2hCZE39Tc",
  authDomain: "watchflix-react-project.firebaseapp.com",
  projectId: "watchflix-react-project",
  storageBucket: "watchflix-react-project.appspot.com",
  messagingSenderId: "305152783985",
  appId: "1:305152783985:web:1325d65bff152dcda40dd0",
  measurementId: "G-ZK6MJBYNBZ"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);