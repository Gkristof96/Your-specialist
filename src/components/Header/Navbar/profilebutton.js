import React from 'react'
import { Link } from 'react-router-dom'

const ProfileButton = () => {
    return (
        <>
            <div className='profile-btn'>
                <h1 className='profile-btn__title'>Kristóf</h1>
                <img className='profile-btn__image' src='images/profile/profile.png' alt='profile-pic' />
            </div>
        </>
    )
}

export default ProfileButton