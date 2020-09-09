import React, { useState, useEffect } from "react";
import Photo from "../../components/photo";
import List from "../../components/list";

const Providers = () => {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showList, setShowList] = useState(false);
  const [listData, setListData] = useState({});
  async function fetchData() {
    const response = await fetch("data/providers.json");
    const data = await response.json();
    setProviders(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
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
          {showList ? (
            <List handleClick={setShowList} data={listData} />
          ) : (
            <div>
              {providers.map((provider, i) => (
                <Photo handleClick={handleClick} key={i} provider={provider} />
              ))}
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default Providers;
