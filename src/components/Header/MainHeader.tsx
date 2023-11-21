// MainHeader.tsx
import React from "react";
import { Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LoginDialog from "../LoginDialog";
import SignupDialog from "../SignupDialog";
import HeaderWrapper from "../Wrapper/HeaderWrapper";
import ROUTES from "../../services/routes";
import { useGlobalContext } from "../Context/GlobalContext";

const MainHeader = () => {
  const navigate = useNavigate();
  const { signupOpen, loginOpen, setIsLoggedIn, setLoginOpen, setSignupOpen } =
    useGlobalContext();

  const handleLoginSuccess = () => {
    setLoginOpen(false);
    setIsLoggedIn(true);
    navigate(ROUTES.FEED);
  };

  const handleSignupSuccess = () => {
    setSignupOpen(false);
    setIsLoggedIn(true);
    navigate(ROUTES.PROFILE);
  };

  return (
    <HeaderWrapper>
      <Link
        to={ROUTES.HOME}
        style={{ textDecoration: "none", color: "white", flexGrow: 1 }}
      >
        <Typography variant="h5">Network-IT</Typography>
      </Link>
      <Button color="inherit" onClick={() => setSignupOpen(true)}>
        <Typography>Signup</Typography>
      </Button>
      <Button color="inherit" onClick={() => setLoginOpen(true)}>
        <Typography>Login</Typography>
      </Button>
      <LoginDialog
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
      <SignupDialog
        open={signupOpen}
        onClose={() => setSignupOpen(false)}
        onSignupSuccess={handleSignupSuccess}
      />
    </HeaderWrapper>
  );
};

export default MainHeader;
