import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const InputContext = React.createContext();

export const InputProvider = ({children}) => {
    const [professions,setProfessions] = useState([])
    const [cities,setCities] = useState([])

    async function fetchCities() {
        await axios
          .get("../data/cities.json")
          .then((response) => {
            setCities(response.data.cities);
          })
          .catch((error) => console.log(error));
    }
    
    async function fetchProfessions() {
        await axios
          .get("../data/professions.json")
          .then((response) => {
            setProfessions(response.data.professions);
          })
          .catch((error) => console.log(error));
    }

    useEffect(() => {
        fetchCities();
        fetchProfessions();
      }, []);

    const providerValue = {
        professions,
        setProfessions,
        cities,
        setCities
    }
    return (
        <>
            <InputContext.Provider value={providerValue}>
                {children}
            </InputContext.Provider>
        </>
    )
}
export default InputContext