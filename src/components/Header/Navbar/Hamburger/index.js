import React from "react";

const DrawerToggleButton = ({ drawerClick, open }) => {
  return (
    <>
      <button className={`toggle-button ${open && 'open'}`} onClick={drawerClick}>
        <div className="line one" />
        <div className="line two" />
        <div className="line three" />
      </button>
    </>
  );
};

export default DrawerToggleButton;
