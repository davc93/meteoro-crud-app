import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, connectAuthEmulator, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { firebaseConfig } from '../../../secret'

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function SignUp(props: any) {

  const logOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });

  }

  const signUp = async (e: any) => {
    e.preventDefault();
    const email = document.getElementById('email1');
    const password = document.getElementById('password1');

    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email.value, password.value);
      const user = userCredentials.user;
      console.log('userCredentials', userCredentials);
      console.log('user', user);
    } catch (error) {
      console.log(error);
    }
  }
  const signIn = async (e: any) => {
    e.preventDefault();
    const email = document.getElementById('email1');
    const password = document.getElementById('password1');

    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email.value, password.value);
      const user = userCredentials.user;
      alert(`Hola ${user.email}`)
      console.log('userCredentials', userCredentials);
      console.log('user', user);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="flex flex-col gap-4 w-60 lg:w-1/2">
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
      <Button type="submit" onClick={signUp}>
        Sign Up
      </Button>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
      <Button type="submit" onClick={logOut}>
        Log Out
      </Button>
    </form>

  )
}

export default SignUp