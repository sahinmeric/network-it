import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginDialog from "./components/LoginDialog";
import SignupDialog from "./components/SignupDialog";

const Home = () => {
  const navigate = useNavigate();
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const handleLoginSuccess = () => {
    setLoginOpen(false);
    navigate("/feed");
  };

  const handleSignupSuccess = () => {
    setSignupOpen(false);
    navigate("/profile");
  };

  return (
    <>
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
    </>
  );
};

export default Home;
