import React from "react";
import Logo from "./logo";
import NavBar from "./navbar";

function Header() {
  return (
    <header className="md:sticky top-0 z-50 shadow-md flex flex-col lg:flex-row  px-30 lg:py-8 bg-transparent backdrop-blur-md justify-around  items-center border-b-3 border-[#a37516]">
      <Logo />
      <NavBar />
    </header>
  );
}

export default Header;
