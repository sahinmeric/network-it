import React from "react";
import { Box } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const ContentWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        overflow: "auto",
      }}
    >
      {children}
    </Box>
  );
};

export default ContentWrapper;
