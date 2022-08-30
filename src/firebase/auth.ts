import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut ,FacebookAuthProvider, onAuthStateChanged,GoogleAuthProvider, GithubAuthProvider, TwitterAuthProvider} from "firebase/auth";

export class Auth {

    // Standar configuration
    async createUserWithEmailandPassword(email: string, password: string) {
        const auth = getAuth();
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;
            console.log('userCredentials', userCredentials);
            console.log('user', user);
        } catch (error) {
            console.log(error);
        }
    }
    async authEmailandPassword(email: string, password: string) {

        const auth = getAuth();
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;
            console.log('userCredentials', userCredentials);
            console.log('user', user);
        } catch (error) {
            console.log(error);
        }

    }
    async onAuthStateChanged(){
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              console.log(`Si estas logeado`)
              // ...
            } else {
                console.log(`No estas logeado`)
            }
          });
    }
    
    authGoogle() {
        const provider = new GoogleAuthProvider();
    }
    authFacebook() {
        const provider = new FacebookAuthProvider();
    }
    authGithub() {
        const provide = new GithubAuthProvider();
    }
    authTwitter(){
        const provider = new TwitterAuthProvider();
    }
    authApple(){
        // hay que registrarse en sitio de apple
    }
    logOut() {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log(`Sign-out successful.`)
        }).catch((error) => {
            console.log(`An error happened.`);
            console.log(error);
        });

    }

    // Your configuration
}