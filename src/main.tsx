import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import SignUp from './components/SignUp'
import './index.css'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(user);
    // ...
  } else {
    alert('No estas logeado')
    // User is signed out
    // ...
  }
});


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <SignUp />
  </React.StrictMode>
)
