import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import "./navigation.styles.scss";

const NavigationBar = () => (
  <AppBar>
    <div className="menulist">
      <Link to="/" className="link-button">
        Home
      </Link>
      <Link to="/bookmarks" className="link-button">
        Bookmark
      </Link>
    </div>
  </AppBar>
);

export default NavigationBar;
