import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

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
    authGoogle() {

    }
    authFacebook() {

    }
    authGithub() {

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