import React from "react";

const DrawerToggleButton = (props) => {
  const { open, drawerClick } = props;
  let buttonClass = "toggle-button";

  if (open) {
    buttonClass = "toggle-button open";
  }
  return (
    <>
      <button className={buttonClass} onClick={drawerClick}>
        <div className="line one" />
        <div className="line two" />
        <div className="line three" />
      </button>
    </>
  );
};

export default DrawerToggleButton;
