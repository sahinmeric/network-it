import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import LoginDialog from "./components/LoginDialog";
import SignupDialog from "./components/SignupDialog";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const handleLoginSuccess = () => {
    // Close the login dialog
    setLoginOpen(false);
    // Redirect to the profile page
    navigate("/profile");
    //history.push("/profile");
  };

  const handleSignupSuccess = () => {
    // Close the signup dialog
    setSignupOpen(false);
    // Redirect to the profile page
    navigate("/profile");
    //history.push("/profile");
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Network-IT
          </Typography>
          <Button color="inherit" onClick={() => setSignupOpen(true)}>
            Signup
          </Button>
          <Button color="inherit" onClick={() => setLoginOpen(true)}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Container>{/* Page content goes here */}</Container>
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
    </div>
  );
};

export default Home;
