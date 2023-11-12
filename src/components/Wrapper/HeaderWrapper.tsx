import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const HeaderWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <AppBar position="static" sx={{ backgroundColor: "blueviolet" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>{children}</Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderWrapper;
