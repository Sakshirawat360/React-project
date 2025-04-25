import React  from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localhost'
export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const [userdata, setUserData] = useState(null)


    useEffect(() => {
        setLocalStorage()
        const{employees, admin} = getLocalStorage()
        setUserData({employees, admin})
    }, [])
    
   

  return (
    <div>
        <AuthContext.Provider value={userdata}>
             {children}
        </AuthContext.Provider>
       
    </div>
  )
}

export default AuthProvider