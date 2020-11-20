import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const List = ({ data, setShowList }) => {
  const { name, professions } = data;
  return (
    <>
        <FaArrowAltCircleLeft
          className="back-arrow"
          onClick={() => setShowList(false)}
        />
        <h1 className="title">{`${name} Kategória Szakmái`}</h1>
        <div className="professions-bar">
          {professions.map((data, i) => (
            <Link
              className="profession-item"
              to={`/providerslist?profession=${data}`}
              key={i}
            >
              {data}
            </Link>
          ))}
        </div>
    </>
  );
};

export default List;
