import { useContext, createContext, useState, useEffect } from "react";
import * as SecureStore from 'expo-secure-store';
import axios from "axios";
import { API_URL } from "../../assets/API";
import { User } from "../types/User";

interface AuthProps {
    authState?: {token:string|null, authenticated:boolean|null };
    user: User;
    setUser?: React.Dispatch<React.SetStateAction<User>>;
    onSignUp?: (first:string, last:string, email:string, password:string) => Promise<any>;
    onLogin?: (email:string, password:string) => Promise<any>;
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
        email: "",
        password: "",
        id: undefined 
    })


    useEffect(() => {
        const loadToken = async () => {
            try {
                const authToken = await SecureStore.getItemAsync(TOKEN_KEY);
                const userToken = await SecureStore.getItemAsync(USER_KEY);

                if (authToken) {
                    setAuthState({
                        token:authToken,
                        authenticated: true
                    })
                }

                if (USER_KEY) {
                    
                    const userInfo = JSON.parse(userToken!)
                    setUser({
                        first:userInfo.first,
                        last:userInfo.last,
                        email: userInfo.email,
                        password: userInfo.password, 
                        id: userInfo.id
                    })
                }

            } catch (e) {
                console.log("Error during loading token", "e:", e)
                return {error: true, msg:(e as any).response.data.msg}
            }
        }

        loadToken();
    }, [])


    const signup = async( first:string, last:string, email:string, password:string ) => {
        try {
            const res = await axios.post(`${API_URL}/users`, {first, last, email, password})
            return res

        } catch (e:any) {
            console.error("Error during account creation:", e.response.data);
            return {error:true, msg:e}
        }
    }

    const login = async (email:string, password:string) => {
        try {
            console.log("logging in...")
            const res = await axios.post(`${API_URL}/login`, {email, password})

            setAuthState({
                token: res.data.token,
                authenticated:true
            })

            setUser({
                first: res.data.user.first,
                last: res.data.user.last,
                email: res.data.user.email, 
                password: res.data.password
            })

            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`
            await SecureStore.setItemAsync(TOKEN_KEY, res.data.token)
            // set user info token
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`
            await SecureStore.setItemAsync(USER_KEY,  JSON.stringify(res.data.user))

            return res

        } catch (e) {
            console.log("Error during login", "e:", e)
            return {error: true, msg:(e as any).response.data.msg}
        }
    }

    const logout = async () => {
        try {
            console.log("logging out")

            // delete token from storage
            await SecureStore.deleteItemAsync(TOKEN_KEY);
            // delete user token from storage
            await SecureStore.deleteItemAsync(USER_KEY);
            // update HTTP axios headers
            axios.defaults.headers.common['Authorization'] = "";

            setAuthState({
                    token:null,
                    authenticated:false
                })
            setUser({
                first:"",
                last:"",
                email: "",
                password: ""
            })

        } catch (e) {
            console.log("Error during login", "e:", e)
            return {error: true, msg:(e as any).response.data.msg}
        }
    }
    const value = {
        user,
        setUser,
        authState,
        onLogin:login,
        onLogout:logout,
        onSignUp: signup
    }
    
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}
