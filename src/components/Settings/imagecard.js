import React from "react";

const ImageCard = ({ gallery, setGallery, image }) => {
  const handleDelete = () => {
    setGallery(gallery.filter((el) => el !== image));
    console.log(gallery);
  };
  return (
    <>
      <img src={`../${image}`} alt={image} />
      <button onClick={() => handleDelete()}>X</button>
    </>
  );
};

export default ImageCard;
