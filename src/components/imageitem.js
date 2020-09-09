import React from "react";

const ImageItem = ({ image, click }) => {
  return (
    <div className="image-container">
      <img
        onClick={(e) => click(e.target)}
        src={`../images/gallery/${image}`}
        className="image"
        alt={image}
      />
    </div>
  );
};
export default ImageItem;
