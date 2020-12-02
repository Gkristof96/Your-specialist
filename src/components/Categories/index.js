import React from 'react'
import Photo from '../CategoryPhoto'

const Categories = ({providers, handleClick}) => {
    return (
        <>
            <h1 className="title">Szakma kategóriák</h1>
            <div className="professions-category">
                {/*A tömb minden eleméből egy <Photo> 
                komponenst csinálunk aminek átadjuk
                a tömb értékeit*/}
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