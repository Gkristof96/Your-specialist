import React, { useState } from "react";
import Navbar from "./Navbar/navbar";
import SideMenu from "./SideDrawer/sidemenu";

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
