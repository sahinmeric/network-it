import { List, Typography } from "@mui/material";
import { IFeeds } from "../Interfaces";
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
        <FeedCard feed={feed} />
      ))}
    </List>
  );
};

export default FeedList;
