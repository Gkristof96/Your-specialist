import React from 'react'
import { Link } from 'react-router-dom'

const LoginButton = () => {
    return (
        <>  
            <Link to="/login" className='profile-btn'>
                <h1 className='profile-btn__title'>Bejelentkezés</h1>
            </Link>
        </>
    )
}

export default LoginButton