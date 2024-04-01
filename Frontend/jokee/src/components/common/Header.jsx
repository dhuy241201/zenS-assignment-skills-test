import React from "react";
import logo from "../../img/logo/logo-jokee.png";
import authorAvatar from "../../img/avatar/author-avatar.jpg"

function Header() {
  return (
    <div id="header" className="">
      <div className="header__container grid wide row">
        <div className="header__logo">
        <img src={logo} alt="jokee-logo" height={"50px"} />
        </div>
        <div className="header__author-info row">
          <div className="header__author-info--content">
            <span className="header__author-info--description">
              Handicrafted by
            </span>
            <span className="header__author-info--author-name">
              Jim HLS
            </span>
          </div>
          <div className="header__author-info--avatar">
          <img src={authorAvatar} alt="jokee-logo" height={"50px"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
