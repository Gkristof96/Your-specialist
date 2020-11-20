import React from 'react'
import Photo from '../CategoryPhoto'

const Categories = ({providers, handleClick}) => {
    return (
        <>
            <h1 className="title">Szakma kategóriák</h1>
            <div className="providers-content">
                {providers.map((provider, i) => (
                    <Photo
                     handleClick={handleClick}
                     key={i}
                     provider={provider}
                    />
                    ))}
            </div>
        </>
    )
}

export default Categories