import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProfileCard from '../../components/Profile';
import Loading from "../../components/Loading";

const Profile = ({ handleLogout }) => {
  // állapotok a felhasználó és annak adatainak meglétének tárolására
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  // felhasználói adatokat lekérő függvény
  async function fetchUser() {
    await axios
      .get("../data/users.json")
      .then((response) => {
        setUser(response.data[id - 1]);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }
  // felhasználói adatok lekérése a komponens betöltésekor
  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <section className="profile section">
        {/* komponensek eldöntésére feltételes renderelés*/}
        {isLoading ? (
          <Loading />
        ) : (
          <ProfileCard
            provider={user}
            setUser={setUser}
            handleLogout={handleLogout}
          />
        )}
      </section>
    </>
  );
};

export default Profile;