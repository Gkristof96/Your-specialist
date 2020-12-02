import React from "react";

const ImageCard = ({ gallery, setGallery, image }) => {
  // adott képet törlő függvény
  const handleDelete = () => {
    setGallery(gallery.filter((el) => el !== image));
    console.log(gallery);
  };
  return (
    <div className="photo-card">
      <img className="img" src={`../${image}`} alt={image} />
      <button className="del" onClick={() => handleDelete()}>
        X
      </button>
    </div>
  );
};

export default ImageCard;