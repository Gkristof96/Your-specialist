import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "../../components/Profile/profilecard";
import Loading from "../../components/loading";
import axios from "axios";

const Profile = (props) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  async function fetchUser() {
    await axios
      .get("../data/users.json")
      .then((response) => {
        console.log(response);
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
      <section className="profile">
        <div className="container">
          {loading ? (
            <Loading />
          ) : (
            <ProfileCard user={user} handleLogout={props.handleLogout} />
          )}
        </div>
      </section>
    </>
  );
};

export default Profile;
