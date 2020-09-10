import React, { useState, useEffect } from "react";
import AutoSearch from "../../components/autoinput";
import Pagination from "../../components/pagination";
import ProviderCard from "../../components/providercard";
import Loading from "../../components/loading";
import { useLocation } from "react-router-dom";
import axios from "axios";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const ProvidersList = ({ location }) => {
  let query = useQuery();

  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState(query.get("city"));
  const [profession, setProfession] = useState(query.get("profession"));
  const [users, setUsers] = useState([]);
  const [cities, setCities] = useState([]);
  const [professions, setProfessions] = useState([]);
  const [search, setSearch] = useState({ city: "", profession: "" });

  const handleClick = () => {
    setSearch({ city: city, profession: profession });
  };
  async function fetchProviders() {
    await axios
      .get("../data/users.json")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }

  async function fetchCities() {
    await axios
      .get("data/cities.json")
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) => console.log(error));
  }

  async function fetchProfessions() {
    await axios
      .get("data/professions.json")
      .then((response) => {
        setProfessions(response.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchProviders();
    fetchCities();
    fetchProfessions();
  }, [search]);

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
          <button onClick={() => handleClick()}>Keresés</button>
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
