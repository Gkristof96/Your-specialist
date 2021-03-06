import React, { useState } from "react";
import axios from 'axios'
import ImageCard from "./ImageCard";

const GalleryUpload = ({ gallery, user, setUser }) => {
  const [galleryData, setGallery] = useState(gallery);

  const handleSave = () => {
    setUser({ ...user, gallery: galleryData });
    axios
      .post("url", {
        gallery: user.gallery,
      })
      .then((response) => {
        console.log("elküldve", response);
      })
      .catch((error) => {
         console.log(error);
      });
  };
  return (
    <>
      <div className="gallery-upload">
        <h1 className="gallery-upload__title">Galléria beállításai</h1>
        <div className="gallery-upload__gallery-container">
          {galleryData.map((image, i) => (
            <ImageCard
              key={i}
              image={image}
              gallery={galleryData}
              setGallery={setGallery}
            />
          ))}
        </div>
        <div className="gallery-upload__upload-container">
          <input type="file" />
          <button className="btn">Hozzáad</button>
        </div>
        <button className="btn" onClick={() => handleSave()}>
          Mentés
        </button>
      </div>
    </>
  );
};

export default GalleryUpload;