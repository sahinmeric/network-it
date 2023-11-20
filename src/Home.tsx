import { Button, Container, Paper } from "@mui/material";
import { useGlobalContext } from "./components/Context/GlobalContext";

const Home = () => {
  const { setSignupOpen } = useGlobalContext();
  const imgURL =
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <Container maxWidth={false} disableGutters>
      <Paper elevation={3}>
        <img
          src={imgURL}
          alt="Welcome"
          style={{ width: "100%", height: "auto" }}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          onClick={() => setSignupOpen(true)}
        >
          Get Started
        </Button>
      </Paper>
    </Container>
  );
};

export default Home;
