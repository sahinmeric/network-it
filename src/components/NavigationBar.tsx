// NavigationBar.tsx
import { AppBar, Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <AppBar position="static">
      <Tabs value={false} centered>
        <Tab component={Link} to="/feed" label="Feed" />
        <Tab component={Link} to="/groups" label="Groups" />
        <Tab component={Link} to="/events" label="Events" />
      </Tabs>
    </AppBar>
  );
};

export default NavigationBar;
