import React from "react";

const Photo = (props) => {
  const { name, image } = props.provider;
  return (
    <>
      <div className="category-card" onClick={() => props.handleClick(name)}>
        <h1>{name}</h1>
        <img src={image} alt={image} />
      </div>
    </>
  );
};

export default Photo;
