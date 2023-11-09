// Dashboard.tsx
import React from "react";
import { AppBar, Tabs, Tab, Container } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div>
      <AppBar position="static">
        <Tabs value={false}>
          <Tab component={Link} to="/dashboard" label="Dashboard" />
          <Tab component={Link} to="/dashboard/groups" label="Groups" />
          <Tab component={Link} to="/dashboard/events" label="Events" />
        </Tabs>
      </AppBar>
      <Container>
        <Outlet /> {/* Render nested routes */}
      </Container>
    </div>
  );
};

export default Dashboard;
