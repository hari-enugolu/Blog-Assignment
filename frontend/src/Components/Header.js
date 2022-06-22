import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  Box,
  Tabs,
  Tab,
} from "@mui/material";
import { useSelector } from "react-redux";

function Header() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState();
  return (
    <AppBar
      position="sticky"
      sx={{
        top: "0",
        background:
          " radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography varient="h1" fontSize={"23px"} sx={{ color: "black" }}>
          BlogsApp
        </Typography>
        {isLoggedIn && (
          <Box display="flex" marginLeft="auto" marginRight="auto">
            <Tabs value={value} onChange={(e, val) => setValue(val)}>
              <Tab
                LinkComponent={Link}
                to="/blogs"
                sx={{ color: "black" }}
                label="All Blogs"
              ></Tab>
              <Tab
                LinkComponent={Link}
                to="/myblogs"
                sx={{ color: "black" }}
                label="My blogs"
              ></Tab>
            </Tabs>
          </Box>
        )}
        ;
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10, color: "black" }}
              >
                Login
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10, color: "black" }}
              >
                Signup
              </Button>
            </>
          )}

          {isLoggedIn && (
            <Button
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10, color: "black" }}
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
