// MainHeader.tsx
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginDialog from "../LoginDialog";
import SignupDialog from "../SignupDialog";
import HeaderWrapper from "../Wrapper/HeaderWrapper";
import ROUTES from "../../services/routes";
import { useGlobalContext } from "../Context/GlobalContext";

const MainHeader = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const { setIsLoggedIn } = useGlobalContext();

  const handleLoginSuccess = () => {
    setLoginOpen(false);
    setIsLoggedIn(true);
  };

  const handleSignupSuccess = () => {
    setSignupOpen(false);
    setIsLoggedIn(true);
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
