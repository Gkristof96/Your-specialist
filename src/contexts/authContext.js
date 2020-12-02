import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    // állapotok a felhasználó adatainak és a bejelentkezetség tárolására
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState({})
    let history = useHistory();
    // bejelentkezést végrehajtó függvény
    const handleLogin = (data) => {
        setLoggedIn(true)
        setUser({data})
        history.push(`/profile/${user.id}`)
    }
    // kijelentkezést végrehajtó függvény
    const handleLogout = () => {
        setLoggedIn(false)
    }
    // a context által átadott értékek
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