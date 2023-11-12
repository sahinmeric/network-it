// Header.tsx
import { Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";
import HeaderWrapper from "../Wrapper/HeaderWrapper";

const Header = () => {
  return (
    <HeaderWrapper>
      <Tabs value={false} centered>
        <Tab component={Link} to="/feed" label="Feed" />
        <Tab component={Link} to="/groups" label="Groups" />
        <Tab component={Link} to="/events" label="Events" />
      </Tabs>
    </HeaderWrapper>
  );
};

export default Header;
