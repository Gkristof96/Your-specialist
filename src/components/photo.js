import React from "react";

const Photo = ({ provider, handleClick }) => {
  const { name, image } = provider;
  return (
    <>
      <div className="category-card" onClick={() => handleClick(name)}>
        <h1>{name}</h1>
        <img src={image} alt={image} />
      </div>
    </>
  );
};

export default Photo;
