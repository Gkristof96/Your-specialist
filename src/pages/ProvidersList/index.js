import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import AutoSearch from "../../components/AutoInput";
import Pagination from "../../components/ProviderList/Pagination";
import ProviderCard from "../../components/ProviderList/ProviderCard";
import Loading from "../../components/Loading";
import InputContext from '../../contexts/inputContext'
import useInputs from '../../components/customHooks/useInputs'
import validate from '../../components/customHooks/validations/validateIndex'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const ProvidersList = () => {
  let query = useQuery();
  // állapotok deklarálása
  const [isLoading, setIsLoading] = useState(true);
  const [values, setValues] = useState({
    city: query.get("city"),
    profession: query.get("profession"),
  })
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState({ city: "", profession: "" });
  // context hívása
  const {cities,professions} = useContext(InputContext)
  // szakemberek lekérés a szervertől
  async function fetchProviders() {
    await axios
      .get("../data/users.json")
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }
  // keresés kezése
  const handleClick = () => {
    setSearch({ city: city, profession: profession });
  };
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
  // saját horog importálása
  const { handleChange } = useInputs(
    validate,
    values,
    setValues
  );
  return (
    <>
      <section className="pvheader"></section>
      <section className="pvlist">
        <div className="search">
          <AutoSearch
            search={values.city}
            values={values}
            setValues={setValues}
            handlechange={handleChange}
            items={cities}
            placeholder="Település"
            type="city"
          />
          <AutoSearch
            search={values.profession}
            values={values}
            setValues={setValues}
            handlechange={handleChange}
            items={professions}
            placeholder="Szakma"
            type="profession"
          />
          <button className="btn" onClick={() => handleClick()}>
            Keresés
          </button>
        </div>
        <div className="content">
          {/* töltés vagy a szakemberek listája*/}
          {loading ? (
            <isLoading />
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
