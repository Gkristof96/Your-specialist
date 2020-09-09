import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const List = (props) => {
  const { name, professions } = props.data;
  return (
    <>
      <div>
        <FaArrowAltCircleLeft onClick={() => props.handleClick()} />
        <h1>{name}</h1>
        {professions.map((data, i) => (
          <h4 key={i}>{data}</h4>
        ))}
      </div>
    </>
  );
};

export default List;
