import React, { useState } from "react";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

const Header = () => {
  // állapot a menü megjelenítésének kezelésére
  const [isMenuOpen, setMenuOpen] = useState(false);
  // az állapot változtatása kattintásra
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