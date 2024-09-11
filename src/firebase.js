import { initializeApp} from "firebase/app";
import { getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA0Skl6tup9NSlNrFH_wkMerZtGyPPZlcE",
    authDomain: "todoapp-31247.firebaseapp.com",
    projectId: "todoapp-31247",
    storageBucket: "todoapp-31247.appspot.com",
    messagingSenderId: "724988379462",
    appId: "1:724988379462:web:94e380e4525735a8986547",
    measurementId: "G-BJ68WBXL8M"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};
