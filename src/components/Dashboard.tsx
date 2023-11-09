// Dashboard.tsx
import React from "react";
import { AppBar, Tabs, Tab, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    navigate(`/${newValue}`);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={false} onChange={handleChange}>
          <Tab label="Groups" value="groups" />
          <Tab label="Events" value="events" />
        </Tabs>
      </AppBar>
      <Container>Dashboard</Container>
    </div>
  );
};

export default Dashboard;
