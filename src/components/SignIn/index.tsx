import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword, connectAuthEmulator, createUserWithEmailAndPassword,onAuthStateChanged,signOut} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyD3UECePpG4pyM-oE2iPIJxXjdlJG9GyFQ",
  authDomain: "desarrollo-web-308421.firebaseapp.com",
  projectId: "desarrollo-web-308421",
  storageBucket: "desarrollo-web-308421.appspot.com",
  messagingSenderId: "462116199377",
  appId: "1:462116199377:web:e664c449fefcabffbc1ef0",
  measurementId: "G-CXN4RVLGKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log('hello firebase');
function SignIn(props:any) {
  return (
    <form className="flex flex-col gap-4">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="email1"
        value="Your email"
      />
    </div>
    <TextInput
      id="email1"
      type="email"
      placeholder="name@flowbite.com"
      required={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="password1"
        value="Your password"
      />
    </div>
    <TextInput
      id="password1"
      type="password"
      required={true}
    />
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="remember" />
    <Label htmlFor="remember">
      Remember me
    </Label>
  </div>
  <Button type="submit">
    Submit
  </Button>
</form>

  )
}

export default SignIn