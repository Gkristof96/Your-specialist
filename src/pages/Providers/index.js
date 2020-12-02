import React, { useState, useEffect } from "react";
import axios from "axios";
import List from '../../components/ProfessionsList'
import Categories from '../../components/Categories'
import Loading from '../../components/Loading'

const Providers = () => {
  // állapotok a szakmai adatok és azok meglétének tárolására
  const [providers, setProviders] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [showList, setShowList] = useState(false);
  const [listData, setListData] = useState({});
  // szamkai adatokat lekérő függvény
  async function fetchProviders() {
    await axios
      .get("data/providers.json")
      .then((response) => {
        setProviders(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }
  // szakmai adatok lekérése a komponens betöltésekor
  useEffect(() => {
    fetchProviders();
    // eslint-disable-next-line
  }, []);
  // szakma lista beállítása a kapott név alapján
  const handleClick = (name) => {
    setShowList(true);
    const data = providers.find((data) => data.name === name);
    setListData(data);
  };
  return (
    <>
        <section className="providers section">
          <div className="providers__container">
            <div className={`provider-card ${showList ? "list" : "categories"}`}>
              {/* komponensek eldöntésére feltételes renderelés*/}
              {IsLoading ? (
                <Loading />
              ) : ( 
                <>
                {/* kategóriák vagy szakmák jelenjenek meg*/}
                {showList ? (
                  <List setShowList={setShowList} data={listData} />
                ) : (
                  <Categories providers={providers} handleClick={handleClick}/>
                )}
                </>
              
              )}
             </div>
          </div>
        </section>
    </>
  );
};

export default Providers;
