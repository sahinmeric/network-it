// Header.tsx
import HeaderWrapper from "../Wrapper/HeaderWrapper";
import AccountMenu from "../AccountMenu";
import NavigationTabs from "../NavigationTabs";

const Header = () => {
  return (
    <HeaderWrapper>
      <NavigationTabs />
      <AccountMenu />
    </HeaderWrapper>
  );
};

export default Header;
