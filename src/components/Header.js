import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "../css/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__options">
        <div className="header__option">
          <PersonIcon className="header__icon" />
          Admin
        </div>
        <div className="header__option">
          <ExitToAppIcon className="header__icon" />
          Logout
        </div>
      </div>
    </div>
  );
}

export default Header;
