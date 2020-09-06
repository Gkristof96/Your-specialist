import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const ImageItem = (props) => {
  const { click } = props;
  return (
    <div className="image-container">
      <img
        onClick={(e) => click(e.target)}
        src={props.item}
        className="image"
      />
    </div>
  );
};
const PopUp = (props) => {
  const { source, setVisible } = props;
  return (
    <>
      <div className="background" onClick={() => setVisible(false)}>
        <div className="frame">
          <div className="wrapper">
            <img src={source} alt={source} />
          </div>
          <button className="btn" onClick={() => setVisible(false)}>
            X
          </button>
        </div>
      </div>
    </>
  );
};
const Gallery = (props) => {
  const [gallery, setGallery] = useState([]);
  const [visible, setVisible] = useState(false);
  const [source, setSource] = useState();
  const [x, setX] = useState(0);

  const url = "data/users.json";

  async function fetchUser() {
    const response = await fetch(url);
    const data = await response.json();
    setGallery(data[0].gallery);
  }
  useEffect(() => {
    fetchUser();
  }, []);

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
          <FaAngleLeft size="50" color="white" />
        </div>
        <div className="gallery__content">
          <div
            className="gallery__slide"
            style={{ transform: `translateX(${x}px)` }}
          >
            {gallery.map((gallery, i) => (
              <ImageItem click={handleVisible} key={i} item={gallery} />
            ))}
          </div>
        </div>
        <div className="gallery__arrow--right" onClick={handleRightClick}>
          <FaAngleRight size="50" color="white" />
        </div>
        {visible ? <PopUp setVisible={setVisible} source={source} /> : ""}
      </div>
    </>
  );
};

export default Gallery;
