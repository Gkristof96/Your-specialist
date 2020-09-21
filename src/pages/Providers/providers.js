import React, { useState, useEffect } from "react";
import Photo from "../../components/photo";
import List from "../../components/list";
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
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <section className="providers">
          <div className="container">
            <div
              className={`provider-card ${showList ? "list" : "categories"}`}
            >
              {showList ? (
                <List setShowList={setShowList} data={listData} />
              ) : (
                <div className="providers-content">
                  {providers.map((provider, i) => (
                    <Photo
                      handleClick={handleClick}
                      key={i}
                      provider={provider}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Providers;
