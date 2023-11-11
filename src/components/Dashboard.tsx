// Dashboard.tsx
import React from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Container,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import feeds from "../mockdata/feeds";

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
        <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
          <Typography variant="h6" gutterBottom>
            Social Updates
          </Typography>
          {feeds.map((item) => (
            <div key={item.memberId}>
              <Typography variant="subtitle1">{item.memberName}</Typography>
              <Typography variant="body2" color="textSecondary">
                {item.timestamp}
              </Typography>
              {item.type === "note" && <Typography>{item.content}</Typography>}
              {item.type === "video" && (
                <div>
                  <Typography>{item.content}</Typography>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    Watch the video
                  </a>
                </div>
              )}
              {item.type === "image" && (
                <div>
                  <Typography>{item.content}</Typography>
                  <img
                    src={item.link}
                    alt="Meme"
                    style={{ maxWidth: "200px" }}
                  />
                </div>
              )}
              <hr style={{ margin: "10px 0" }} />
            </div>
          ))}
        </Paper>
      </Container>
    </Box>
  );
};

export default Dashboard;
