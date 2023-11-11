// Dashboard.tsx
import React from "react";
import { AppBar, Tabs, Tab, Container, Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <Box>
      <AppBar position="static">
        <Tabs value={false} centered>
          <Tab component={Link} to="/dashboard" label="Dashboard" />
          <Tab component={Link} to="/dashboard/groups" label="Groups" />
          <Tab component={Link} to="/dashboard/events" label="Events" />
        </Tabs>
      </AppBar>
      <Container>
        <Outlet /> {/* Render nested routes */}
      </Container>
    </Box>
  );
};

export default Dashboard;
