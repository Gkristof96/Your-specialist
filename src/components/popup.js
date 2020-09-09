import React from "react";

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
export default PopUp;
