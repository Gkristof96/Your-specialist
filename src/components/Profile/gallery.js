import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ImageItem from "../imageitem";
import PopUp from "../popup";

const Gallery = (props) => {
  const [gallery] = useState(props.gallery);
  const [visible, setVisible] = useState(false);
  const [source, setSource] = useState();
  const [x, setX] = useState(0);

  const handleLeftClick = () => {
    x === 0 ? setX(-680 * (gallery.length - 1)) : setX(x + 680);
  };
  const handleRightClick = () => {
    x === -680 * (gallery.length - 1) ? setX(0) : setX(x - 680);
  };
  const handleVisible = (target) => {
    setVisible(!visible);
    setSource(target.src);
  };
  return (
    <>
      <div className="gallery">
        <div className="gallery__arrow--left" onClick={handleLeftClick}>
          <FaAngleLeft size="50" />
        </div>
        <div className="gallery__content">
          <div
            className="gallery__slide"
            style={{ transform: `translateX(${x}px)` }}
          >
            {gallery.map((photo, i) => (
              <ImageItem click={handleVisible} key={i} image={photo} />
            ))}
          </div>
        </div>
        <div className="gallery__arrow--right" onClick={handleRightClick}>
          <FaAngleRight size="50" />
        </div>
        {visible ? <PopUp setVisible={setVisible} source={source} /> : ""}
      </div>
    </>
  );
};

export default Gallery;
