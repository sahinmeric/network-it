import React from "react";
import { List, Typography } from "@mui/material";
import { IFeeds } from "../interfaces/Interfaces";
import FeedCard from "./FeedCard";

interface FeedListProps {
  feeds: IFeeds;
}

const FeedList = ({ feeds }: FeedListProps) => {
  return (
    <List>
      <Typography variant="h1" sx={{ marginBottom: "10px" }}>
        Feed
      </Typography>
      {feeds.feeds.map((feed) => (
        <FeedCard key={feed.memberId} feed={feed} />
      ))}
    </List>
  );
};

export default FeedList;
