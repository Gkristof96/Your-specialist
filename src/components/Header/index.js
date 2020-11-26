import React, { useState } from "react";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header>
        <Navbar drawerClick={handleClick} open={isMenuOpen} />
        {isMenuOpen && <SideMenu drawerClick={handleClick}/>}
      </header>
    </>
  );
};

export default Header;
