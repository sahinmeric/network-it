import React from "react";
import { Container, Fab, Typography } from "@mui/material";
import { useGlobalContext } from "./components/Context/GlobalContext";
import colors from "./config/colors";

const Home = () => {
  const { setSignupOpen } = useGlobalContext();
  const imgURL =
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <Container maxWidth={false} disableGutters>
      <img
        src={imgURL}
        alt="Welcome"
        style={{ width: "100%", height: "auto" }}
      />
      <Typography
        style={{
          fontSize: "3rem",
          position: "absolute",
          top: "42vh",
          left: "50vw",
          transform: "translate(-50%, -50%)",
        }}
        bgcolor={colors.lightGray}
      >
        Welcome to Network-IT
      </Typography>
      <Typography
        variant="h3"
        style={{
          position: "absolute",
          top: "50vh",
          left: "50vw",
          transform: "translate(-50%, -50%)",
        }}
        bgcolor={colors.mediumTransparent}
        color={colors.white}
      >
        Tailored groups based on cities and countries to meet local
        professionals and peers.
      </Typography>
      <Fab
        variant="extended"
        color="primary"
        style={{
          position: "absolute",
          top: "60vh",
          left: "50vw",
          transform: "translate(-50%, -50%)",
        }}
        onClick={() => setSignupOpen(true)}
      >
        Get Started
      </Fab>
    </Container>
  );
};

export default Home;
