import React, { useContext} from 'react'
import authContext from '../../../../contexts/authContext'
import { Link } from 'react-router-dom'

const ProfileButton = ({username}) => {
    const {user} = useContext(authContext)
    return (
        <>
            <Link to={`/profile/${user.id}`} className='header-btn'>
                <h1 className='header-btn__title'>{username}</h1>
                <img className='header-btn__image' src='images/profile/profile.png' alt='profile-pic' />
            </Link>
        </>
    )
}

export default ProfileButton