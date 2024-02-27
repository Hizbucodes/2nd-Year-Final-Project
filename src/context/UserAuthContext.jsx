import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail} from 'firebase/auth';
import {auth} from '../firebase'

const userAuthContext = createContext();

export const UserAuthContextProvider = ({children}) =>{

    const[user, setUser] = useState("");

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }


    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    };

    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })

        return ()=>{
            unsubscribe();
        }
    }, []); 

    return(
        <userAuthContext.Provider value={{signUp, user, logIn, logOut, resetPassword}}>
            {children}
        </userAuthContext.Provider>
    )
}

export const useUserAuth = ()=>{
    return useContext(userAuthContext);
}