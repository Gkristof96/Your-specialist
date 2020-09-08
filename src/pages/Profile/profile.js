import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "../../components/Profile/profilecard";
import Loading from "../../components/loading";
import axios from "axios";

const Profile = (props) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const fetchData = () => {
    axios
      .get("../data/users.json")
      .then((response) => {
        console.log(response);
        setUser(response.data);
        //setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
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
