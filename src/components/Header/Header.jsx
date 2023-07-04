import React from "react";
import "./Header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Eshwar B</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA/>
        <div className="me">
          <img src="assests/me.png" alt="me"/>
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
        <HeaderSocials/>
      </div>
    </header>
  );
};

export default Header;
