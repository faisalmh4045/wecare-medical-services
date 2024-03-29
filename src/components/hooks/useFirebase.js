import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAunthentication from "../../Firebase/firebase.initialize";

initializeAunthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [userDisplayName, setUserDisplayName] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
        /* signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            }) */
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
            setUserDisplayName('');
        }).catch((error) => {
            // An error happened.
            setError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user);
            }
            setIsLoading(false);
        });
    }, [auth]);

    const processLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            /* .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                setUser(user);
            })
            .catch(error => {
                setError(error.message);
            }) */
    }
    
    const createNewAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            /* .then(result => {
                const user = result.user;
                console.log(user);
                auth.getcurrentUser().reload()
                setUserName(name);
                setError('');
                setUser(user);
            })
            .catch(error => {
                setError(error.message);
            }) */
    }
    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {
                // Profile updated!
            }).catch((error) => {
                // An error occurred
            });
    }

    return {
        userDisplayName,
        setUserDisplayName,
        user,
        error,
        isLoading,
        setIsLoading,
        setUserName,
        setUser,
        setError,
        signInUsingGoogle,
        processLogin,
        createNewAccount,
        logOut
    }
}

export default useFirebase;