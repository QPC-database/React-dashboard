import React from "react";
import LanguageIcon from "@material-ui/icons/Language";
import InfoIcon from "@material-ui/icons/Info";
import "../css/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__heading">Analytics Dashboard</div>
      <ul className="sidebar__list">
        <li>
          <InfoIcon className="sidebar__icon" />
          <span>Analytics Tips</span>
        </li>
        <li>
          <LanguageIcon className="sidebar__icon" />
          <span>Websites</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
