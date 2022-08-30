import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    // Your firebase configuration
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);