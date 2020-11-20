import React, { useState } from "react";
import Navbar from "./Navbar";
import SideMenu from "./SideDrawer";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const drawerClickHandler = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header>
        <Navbar drawerClick={drawerClickHandler} open={isMenuOpen} />
        {isMenuOpen && <SideMenu drawerClick={drawerClickHandler}/>}
      </header>
    </>
  );
};

export default Header;
