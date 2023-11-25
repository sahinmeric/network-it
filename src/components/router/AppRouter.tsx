// AppRouter.tsx
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Profile from "../profile/Profile";
import ROUTES from "../../services/routes";
import Groups from "../groups/Groups";
import Events from "../events/Events";
import Feed from "../feed/Feed";
import Header from "../header/Header";
import MainHeader from "../header/MainHeader";
import MainWrapper from "../wrapper/MainWrapper";
import ContentWrapper from "../wrapper/ContentWrapper";
import { useGlobalContext } from "../Context/GlobalContext";

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
