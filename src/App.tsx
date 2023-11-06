import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import LoginDialog from "./components/LoginDialog";
import SignupDialog from "./components/SignupDialog";

const App: React.FC = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            IT Professionals Community
          </Typography>
          <Button color="inherit" onClick={() => setSignupOpen(true)}>
            Signup
          </Button>
          <Button color="inherit" onClick={() => setLoginOpen(true)}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Container>{/* Your page content goes here */}</Container>
      <LoginDialog open={loginOpen} onClose={() => setLoginOpen(false)} />
      <SignupDialog open={signupOpen} onClose={() => setSignupOpen(false)} />
    </div>
  );
};

export default App;
