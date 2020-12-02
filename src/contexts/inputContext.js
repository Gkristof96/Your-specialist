import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const InputContext = React.createContext();

export const InputProvider = ({children}) => {
    // állapotok a városok és szakmák tárolására
    const [professions,setProfessions] = useState([])
    const [cities,setCities] = useState([])
    // kérvény küldése a településekhez
    async function fetchCities() {
        await axios
          .get("../data/cities.json")
          .then((response) => {
            setCities(response.data.cities);
          })
          .catch((error) => console.log(error));
    }
    // kérvény küldése a szakmákhoz
    async function fetchProfessions() {
        await axios
          .get("../data/professions.json")
          .then((response) => {
            setProfessions(response.data.professions);
          })
          .catch((error) => console.log(error));
    }
    // kérvény küldő függvények meghívása a context betöltésekor
    useEffect(() => {
        fetchCities();
        fetchProfessions();
      }, []);
    // a context által átadott értékek
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