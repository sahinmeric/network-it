import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Profile from "./components/Profile";
import ROUTES from "./services/routes";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
    </Routes>
  );
};

export default AppRouter;
