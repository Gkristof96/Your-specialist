import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "../../components/Profile/profilecard";
import Loading from "../../components/loading";

const Profile = (props) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  async function fetchData() {
    const response = await fetch("../data/users.json");
    const data = await response.json();
    setUser(data[id - 1]);
    setLoading(false);
    console.log(user);
  }
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ProfileCard user={user} handleLogout={props.handleLogout} />
      )}
    </>
  );
};

export default Profile;
