import React, { useState, useEffect, useContext } from "react";
import AutoSearch from "../../autoinput";
import Pagination from "../../ProviderList/pagination";
import ProviderCard from "../../ProviderList/providercard";
import Loading from "../../loading";
import { useLocation } from "react-router-dom";
import axios from "axios";
import InputContext from '../../../contexts/inputContext'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const ProvidersList = () => {
  let query = useQuery();
  // állapotok deklarálása
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState(query.get("city"));
  const [profession, setProfession] = useState(query.get("profession"));
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState({ city: "", profession: "" });
  // context hívása
  const {cities,professions} = useContext(InputContext)
  // input változásának kezelése
  const handleClick = () => {
    setSearch({ city: city, profession: profession });
  };
  // szakemberek lekérés a szervertől
  async function fetchProviders() {
    await axios
      .get("../data/users.json")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }
  // szakember adatok lekérésének hívása, betöltéskor, és ha változik a search
  useEffect(() => {
    fetchProviders();
  }, [search]);
  // aktuális oldal számát tároló állapot
  const [currentPage, setCurrentPage] = useState(1);
  // lapozást kezelő függvény
  const paginate = (pageNumber) => {
    if (!(pageNumber < 1 || pageNumber > numberOfPages)) {
      setCurrentPage(pageNumber);
    } else {
    }
  };
  // lapozáshoz használt változók számítása
  const numberOfPages = users.length / 10;
  const indexOfLastPost = currentPage * 10;
  const indexOfFirstPost = indexOfLastPost - 10;
  const currentPost = users.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <>
      <section className="pvheader"></section>
      <section className="pvlist">
        <div className="search">
          <AutoSearch
            type="city"
            search={city}
            setSearch={setCity}
            items={cities}
          />
          <AutoSearch
            type="profession"
            search={profession}
            setSearch={setProfession}
            items={professions}
          />
          <button className="btn" onClick={() => handleClick()}>
            Keresés
          </button>
        </div>
        <div className="content">
          {loading ? (
            <Loading />
          ) : (
            <>
              {currentPost.map((user) => (
                <ProviderCard key={user.id} user={user} />
              ))}
            </>
          )}
        </div>
        <div className="pagination">
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
