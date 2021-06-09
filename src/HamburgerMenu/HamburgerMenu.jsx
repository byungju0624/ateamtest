import React, { useContext } from "react";
import "./HamburgerMenu.scss";
const HamburgerMenu = ({ setIsOpen }) => {
  const onClick = () => {
    setIsOpen(false);
  };
  return (
    <div className="hamburger_container">
      <div className="hamburger_logo">
        <img
          className="hamburger_logoImage"
          src={require("../image/CAPA_partners_colorlogo 1.png").default}
          alt="logo"
        />
      </div>
      <div className="hamburger_company">
        <img
          className="hamburger_companyImage"
          src={require("../image/Vector (1).png").default}
          alt="vector"
        />
        <div className="hamburger_companyText">파트너 정밀 가공</div>
      </div>

      <div className="hamburger_signout">로그아웃</div>

      <div className="hamburger_close" onClick={onClick}>
        닫기
      </div>
    </div>
  );
};

export default HamburgerMenu;
