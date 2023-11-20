import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import colors from "../../config/colors";

interface Props {
  children: React.ReactNode;
}

const HeaderWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: colors.primary }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>{children}</Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderWrapper;
