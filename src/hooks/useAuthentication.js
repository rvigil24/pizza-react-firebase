import { useState, useEffect } from "react";

const auth = window.firebase.auth();
const provider = new window.firebase.auth.GoogleAuthProvider();

export const useAuthentication = () => {
    const [authenticated, setAuthenticated ] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const login = () => {
        auth.signInWithPopup(provider);
    }

    const logout = () => {
        auth.signOut()
        .then( () => {
            setAuthenticated(null);
        } )
        .catch(

        )
    }

    const fetchUser = () => {
        setIsLoading(true);
        auth.onAuthStateChanged(
            (user) => {
              if (user) {
                  //user is signed in
                  setAuthenticated(user)
              } else {
                // User is signed out
                setAuthenticated(null);
              }
              setIsLoading(false);
            },
            (err) => {
              console.log(err);
              setAuthenticated(null);
              setIsLoading(false);
            }
          );
    }

    useEffect( () => {
        fetchUser();
    }, []);



    return { login, loggedIn: authenticated, isLoading, logout }
}