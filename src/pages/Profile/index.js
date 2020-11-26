import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileCard from '../../components/Profile';
import Loading from "../../components/Loading";
import axios from "axios";

const Profile = ({ handleLogout }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  async function fetchUser() {
    await axios
      .get("../data/users.json")
      .then((response) => {
        setUser(response.data[id - 1]);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <section className="profile section">
        {loading ? (
          <Loading />
        ) : (
          <ProfileCard
            user={user}
            setUser={setUser}
            handleLogout={handleLogout}
          />
        )}
      </section>
    </>
  );
};

export default Profile;
