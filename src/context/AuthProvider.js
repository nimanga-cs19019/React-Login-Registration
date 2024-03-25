import { createContext,useState } from "react";
const AuthContext = createContext({});
export const Authprovider = ({childern})=>{
    const[auth,setAuth] = useState({});
    return(
        <AuthContext.Provider value={{auth,setAuth}}>
            {childern}
        </AuthContext.Provider>
    )
}
export default AuthContext;