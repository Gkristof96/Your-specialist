import React, { useState } from "react";
import Navbar from "./Navbar/navbar";
import SideDrawer from "./SideDrawer/sidedrawer";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const drawerClickHandler = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <header>
        <Navbar drawerClick={drawerClickHandler} open={isDrawerOpen} />
        <SideDrawer drawerClick={drawerClickHandler} open={isDrawerOpen} />
      </header>
    </>
  );
};

export default Header;
