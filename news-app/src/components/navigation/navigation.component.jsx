import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { MenuItem, MenuList } from "@material-ui/core";

const NavigationBar = () => (
  <AppBar>
    <MenuList className="menulist">
      <MenuItem>Home</MenuItem>
      <MenuItem>Bookmark</MenuItem>
    </MenuList>
  </AppBar>
);

export default NavigationBar;
