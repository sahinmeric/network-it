// Header.tsx
import React from "react";
import HeaderWrapper from "../wrapper/HeaderWrapper";
import AccountMenu from "../account/AccountMenu";
import NavigationTabs from "../navigation/NavigationTabs";

const Header = () => {
  return (
    <HeaderWrapper>
      <NavigationTabs />
      <AccountMenu />
    </HeaderWrapper>
  );
};

export default Header;
