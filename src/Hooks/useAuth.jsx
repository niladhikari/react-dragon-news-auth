import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvides/AuthProvides";


const useAuth = () => {
    const all = useContext(AuthContext)
    return all;
};

export default useAuth;