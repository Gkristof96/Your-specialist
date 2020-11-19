import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState({})
    let history = useHistory();

    const handleLogin = () => {
        setLoggedIn(true)
        history.push(`/profile/2`)
        setUser({name: 'Pista'})
    }

    const handleLogout = () => {
        setLoggedIn(false)
    }

    const providerValue = {
        isLoggedIn,
        setLoggedIn,
        handleLogin,
        handleLogout,
        user,
        setUser,
    }
    return (
        <>
            <AuthContext.Provider value={providerValue}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
export default AuthContext