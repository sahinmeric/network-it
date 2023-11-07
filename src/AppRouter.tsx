import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Profile from "./components/Profile";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRouter;
