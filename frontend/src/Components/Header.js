import React from "react";
import { AppBar, Typography, Toolbar } from "@mui/material";

function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Typography varient="h4">Blog App</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
