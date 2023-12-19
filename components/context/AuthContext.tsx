import { useContext, createContext, useState, useEffect } from "react";
import * as SecureStore from 'expo-secure-store';
import axios from "axios";
import { API_URL } from "../../assets/API";
import { User } from "../types/User";

interface AuthProps {
    authState?: {token:string|null, authenticated:boolean|null };
    user: User;
    setUser?: React.Dispatch<React.SetStateAction<User>>;
}
