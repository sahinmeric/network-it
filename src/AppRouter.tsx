// AppRouter.tsx
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import ROUTES from "./services/routes";
import Groups from "./components/Groups";
import Events from "./components/Events";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="groups" element={<Groups />} />
        <Route path="events" element={<Events />} />
      </Route>
      <Route path="*" element={<Navigate replace to={ROUTES.HOME} />} />
    </Routes>
  );
};

export default AppRouter;
