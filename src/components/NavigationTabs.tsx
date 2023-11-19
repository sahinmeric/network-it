import { Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";
import ROUTES from "../services/routes";

const NavigationTabs = () => {
  return (
    <Tabs value={false}>
      <Tab component={Link} to={ROUTES.FEED} label="Feed" />
      <Tab component={Link} to={ROUTES.GROUPS} label="Groups" />
      <Tab component={Link} to={ROUTES.EVENTS} label="Events" />
    </Tabs>
  );
};

export default NavigationTabs;
