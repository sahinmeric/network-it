// Feed.tsx
import React from "react";
import { Stack, Typography } from "@mui/material";
import feeds from "../../mockdata/feeds";
import FeedList from "./FeedList";

const Feed = () => {
  return (
    <Stack alignItems="center">
      <Typography variant="h5">Feed</Typography>
      <FeedList feeds={feeds} />
    </Stack>
  );
};

export default Feed;
