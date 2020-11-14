import React, { useState } from 'react'

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState({})

    const handleLogin = () => {
        setLoggedIn(true)
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