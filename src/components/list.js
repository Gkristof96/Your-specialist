import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const List = (props) => {
  const { name, professions } = props.data;
  return (
    <>
      <div>
        <FaArrowAltCircleLeft onClick={() => props.handleClick()} />
        <h1>{name}</h1>
        {professions.map((data, i) => (
          <Link to={`/providerslist?profession=${data}`} key={i}>
            {data}
          </Link>
        ))}
      </div>
    </>
  );
};

export default List;
