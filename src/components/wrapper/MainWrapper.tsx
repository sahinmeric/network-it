import React from "react";
import { Box } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const MainWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
};

export default MainWrapper;
