import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "./../../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvides = ({ children }) => {
  const [user, setUser] = useState(null);

  // create user for sign up
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user login
  const userSignIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  // user sign out
  const userLogOut = ()=>{
    return signOut(auth)
  }

  // using observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    user,
    userSignIn,
    userLogOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvides.propTypes = {
  children: PropTypes.node,
};

export default AuthProvides;
