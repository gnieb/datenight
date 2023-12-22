import { useContext, createContext, useState, useEffect } from "react";
import * as SecureStore from 'expo-secure-store';
import axios from "axios";
import { API_URL } from "../../assets/API";
import { User } from "../types/User";

interface AuthProps {
    authState?: {token:string|null, authenticated:boolean|null };
    user: User;
    setUser?: React.Dispatch<React.SetStateAction<User>>;
    onSignUp?: () => Promise<any>;
    onLogin?: () => Promise<any>;
    onLogout?: () => Promise<any> | Promise<void>;
}


const TOKEN_KEY = 'my-jwt';
const USER_KEY = 'user-info';

const AuthContext = createContext<AuthProps>({user:{first:"", last:"", email:""}})

// export this to be used like a hook!
export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}:any) => {
    const [authState, setAuthState] = useState<{
        token:string | null;
        authenticated: boolean | null;
    }>({
        token:null,
        authenticated:null
    })

    const [user, setUser] = useState<User>({
        first:"",
        last:"",
        email: ""
    })

    const login = async () => {
        try {
            const response = await axios.post("")
        } catch {
            
        }
        
    }
    const value = {
        user

    }
    
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}
