import React, { useState, useContext, useRef } from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import "./header.scss";
const Header = ({ isOpen, setIsOpen }) => {
  const [isVisible, setIsVisible] = useState(() => {
    return isOpen ? true : false;
  });

  return (
    <header className="header_Container">
      <img
        className="header_hamburger"
        src={require("../image/menu_24px.png").default}
        alt="hamburger"
        onClick={() => setIsOpen(true)}
      />
      {isOpen === true && <HamburgerMenu setIsOpen={setIsOpen} />}
      <div className="header_Logo">
        <img
          className="header_image"
          src={require("../image/logo.png").default}
          alt="logo"
        />
      </div>
      <div className="header_SignIn">
        <div className="header_Company">
          <img
            className="header_vector"
            src={require("../image/Vector.png").default}
            alt="vector"
          />
          <div className="header_companyName">A가공 업체</div>
        </div>
        <div className="header_signout">로그아웃</div>
      </div>
    </header>
  );
};

export default Header;
