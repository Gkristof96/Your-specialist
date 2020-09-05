import React, { useState, useEffect } from "react";
import AutoSearch from "../../components/autoinput";
import Pagination from "../../components/pagination";
import ProviderCard from "../../components/providercard";
import Loading from "../../components/loading";

const ProvidersList = () => {
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("");
  const [profession, setProfession] = useState("");
  const [users, setUsers] = useState([]);
  const [cities, setCities] = useState([]);
  const [professions, setProfessions] = useState([]);

  const urlCities = "data/cities.json";
  const urlProfessions = "data/professions.json";
  const urlUsers = "../data/users.json";

  async function fetchData() {
    const response = await fetch(urlUsers);
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  }

  async function fetchCities() {
    const response = await fetch(urlCities);
    const data = await response.json();
    setCities(data.cities);
  }

  async function fetchProfessions() {
    const response = await fetch(urlProfessions);
    const data = await response.json();
    setProfessions(data.professions);
  }
  useEffect(() => {
    fetchData();
    fetchCities();
    fetchProfessions();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (pageNumber) => {
    if (!(pageNumber < 1 || pageNumber > numberOfPages)) {
      setCurrentPage(pageNumber);
    } else {
    }
  };

  const numberOfPages = users.length / 10;
  const indexOfLastPost = currentPage * 10;
  const indexOfFirstPost = indexOfLastPost - 10;
  const currentPost = users.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <>
      <section className="pvlist">
        <div className="pvlist__search">
          <AutoSearch search={city} setSearch={setCity} items={cities} />
          <AutoSearch
            search={profession}
            setSearch={setProfession}
            items={professions}
          />
          <button>Keresés</button>
        </div>
        <div className="pvlist__content">
          {loading ? (
            <Loading />
          ) : (
            <div className="provider-container">
              {currentPost.map((user) => (
                <ProviderCard key={user.id} user={user} />
              ))}
            </div>
          )}
        </div>
        <div className="pvlist__pagination">
          <Pagination
            totalPosts={users.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </section>
    </>
  );
};

export default ProvidersList;
