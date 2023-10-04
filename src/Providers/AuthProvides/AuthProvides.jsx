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
  const [loading, setLoading] = useState(true);

  // create user for sign up
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user login
  const userSignIn = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  // user sign out
  const userLogOut = ()=>{
    setLoading(true);
    return signOut(auth)
  }

  // using observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
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
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvides.propTypes = {
  children: PropTypes.node,
};

export default AuthProvides;
