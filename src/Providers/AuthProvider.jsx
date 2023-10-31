import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);


    // created user
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    
    // sign in user
    const signInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logOut
    const logOut = () =>{
        return signOut(auth)
    }




    // observer
    useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log('observer', currentUser);
            setLoading(false)
        });

        return ()=> {
            unSubscribe()
        }

    }, [])


    const authInfo ={
        user,
        loading,
        createUser,
        signInUser,
        logOut

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
    
}