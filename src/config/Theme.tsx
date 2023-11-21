import { createTheme } from "@mui/material";

import colors from "./colors";

const themeOptions = createTheme({
  typography: {
    h1: {
      fontSize: 20,
      lineHeight: 1.2,
      letterSpacing: "0.15px",
      marginBottom: "1.2em",
    },
    h2: {
      fontSize: 18,
      lineHeight: 1.33,
      letterSpacing: "normal",
      fontWeight: "normal",
    },
    h3: {
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: "0.12px",
      fontWeight: 500,
    },
    h4: {
      fontSize: 18,
      lineHeight: 1.33,
      letterSpacing: "normal",
      fontWeight: "normal",
    },
    body1: {
      fontSize: 14,
      lineHeight: 1.3,
      letterSpacing: "normal",
    },
    body2: {
      fontSize: 14,
      lineHeight: 1.3,
      letterSpacing: "normal",
    },
    subtitle1: {
      fontSize: 12,
      fontWeight: "300",
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: "300",
      marginTop: "10px",
    },
    button: {
      fontSize: 14,
      fontWeight: "bold",
      textTransform: "none",
    },
    caption: {
      fontSize: 12,
      fontWeight: "normal",
    },
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.white,
    },
    text: {
      primary: colors.dark,
      secondary: colors.dark,
    },
    error: {
      main: colors.error,
    },
  },
});

export default themeOptions;
