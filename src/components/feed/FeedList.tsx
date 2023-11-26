import React from "react";
import { List } from "@mui/material";
import { IFeed } from "../interfaces/Interfaces";
import FeedCard from "./FeedCard";

interface FeedListProps {
  feeds: IFeed[];
}

const FeedList = ({ feeds }: FeedListProps) => {
  return (
    <List sx={{ width: "50vw" }}>
      {feeds.map((feed) => (
        <FeedCard key={feed.memberId} feed={feed} />
      ))}
    </List>
  );
};

export default FeedList;
