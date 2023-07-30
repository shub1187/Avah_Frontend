import axios from "axios";
import { createContext, useContext, useEffect, useReducer, useState } from "react";

const actionTypes = {
    START_PROCESS: 'START_PROCESS',
    SUCCESS_PROCESS: 'SUCCESS_PROCESS',
    ERROR_PROCESS: 'ERROR_PROCESS',
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    REGISTER: 'REGISTER'
}

const AuthContext = createContext()

const useAuth = ()=>{
    const [user,setUser] = useState(null);
    const [loading,setloading] = useState(true)
    const [state, dispatch] = useReducer(authReducer,{
        user:null,
        loading:true,
        error:""
    })
    useEffect(()=>{
        
    },[])

    const login = async(userType, email, password)=>{
        dispatch({type:actionTypes.START_PROCESS})
        const response = await axios.post()
    }
}