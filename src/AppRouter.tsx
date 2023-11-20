// AppRouter.tsx
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Profile from "./components/Profile";
import ROUTES from "./services/routes";
import Groups from "./components/Groups";
import Events from "./components/Events";
import Feed from "./components/Feed";
import Header from "./components/Header/Header";
import MainHeader from "./components/Header/MainHeader";
import MainWrapper from "./components/Wrapper/MainWrapper";
import ContentWrapper from "./components/Wrapper/ContentWrapper";
import { useGlobalContext } from "./components/Context/GlobalContext";

const AppRouter = () => {
  const { isLoggedIn } = useGlobalContext();

  return (
    <MainWrapper>
      {isLoggedIn ? <Header /> : <MainHeader />}
      <ContentWrapper>
        {!isLoggedIn && (
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path="*" element={<Navigate replace to={ROUTES.HOME} />} />
          </Routes>
        )}
        {isLoggedIn && (
          <Routes>
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            <Route path={ROUTES.FEED} element={<Feed />} />
            <Route path={ROUTES.GROUPS} element={<Groups />} />
            <Route path={ROUTES.EVENTS} element={<Events />} />
          </Routes>
        )}
      </ContentWrapper>
    </MainWrapper>
  );
};

export default AppRouter;
