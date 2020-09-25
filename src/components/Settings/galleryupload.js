import React, { useState } from "react";
import ImageCard from "./imagecard";

const GalleryUpload = ({ gallery, user, setUser }) => {
  const [galleryData, setGallery] = useState(gallery);
  const handleSave = () => {
    setUser({ ...user, gallery: galleryData });
  };
  return (
    <>
      <div className="profession-settings">
        <h1>Galléria beállításai</h1>
        <div className="profession-container">
          {galleryData.map((image, i) => (
            <ImageCard
              key={i}
              image={image}
              gallery={galleryData}
              setGallery={setGallery}
            />
          ))}
        </div>
        <button onClick={() => handleSave()}>Mentés</button>
      </div>
    </>
  );
};

export default GalleryUpload;
