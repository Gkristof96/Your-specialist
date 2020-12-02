import React from 'react'
import { Link } from 'react-router-dom'

const LoginButton = () => {
    return (
        <>  
            <Link to="/login" className='header-btn'>
                <h1 className='header-btn__title'>Bejelentkezés</h1>
            </Link>
        </>
    )
}

export default LoginButton