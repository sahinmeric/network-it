import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import LoginDialog from "./components/LoginDialog";
import SignupDialog from "./components/SignupDialog";
import Profile from "./components/Profile";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

const App: React.FC = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const history = useHistory();

  const handleLoginSuccess = () => {
    // Close the login dialog
    setLoginOpen(false);
    // Redirect to the profile page
    history.push("/profile");
  };

  const handleSignupSuccess = () => {
    // Close the signup dialog
    setSignupOpen(false);
    // Redirect to the profile page
    history.push("/profile");
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
      {/* Setup your routes */}
      <Switch>
        <Route path="/profile" component={Profile} />
        {/* Other routes here */}
        <Redirect from="/" to="/profile" />
      </Switch>
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

export default App;
