// Header.tsx
import { Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";
import HeaderWrapper from "../Wrapper/HeaderWrapper";
import ROUTES from "../../services/routes";

const Header = () => {
  return (
    <HeaderWrapper>
      <Tabs value={false} centered>
        <Tab component={Link} to={ROUTES.FEED} label="Feed" />
        <Tab component={Link} to={ROUTES.GROUPS} label="Groups" />
        <Tab component={Link} to={ROUTES.EVENTS} label="Events" />
      </Tabs>
    </HeaderWrapper>
  );
};

export default Header;
