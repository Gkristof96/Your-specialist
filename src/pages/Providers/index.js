import React, { useState, useEffect } from "react";
import List from '../../components/ProfessionsList'
import Categories from '../../components/Categories'
import Loading from '../../components/Loading'
import axios from "axios";

const Providers = () => {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showList, setShowList] = useState(false);
  const [listData, setListData] = useState({});

  async function fetchProviders() {
    await axios
      .get("data/providers.json")
      .then((response) => {
        setProviders(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchProviders();
    // eslint-disable-next-line
  }, []);

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
              {loading ? (
                <Loading />
              ) : ( 
                <>
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
