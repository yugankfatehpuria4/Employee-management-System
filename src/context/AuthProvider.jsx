import React, { createContext, useState } from 'react';
import { getLocalstorage, setLocalstorage } from '../Utils/localstorage';
import { useEffect } from 'react';
export const AuthContext = createContext()
const AuthProvider = ({children})=>{
    const [userData,setUserData] = useState(null)
    
    useEffect(()=>{
        setLocalstorage()
        const {admin,employees} = getLocalstorage()
        setUserData({employees,admin})
    },[])

    return(
        <div>
            <AuthContext.Provider value={userData}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}
export default AuthProvider