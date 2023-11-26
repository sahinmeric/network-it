// Feed.tsx
import React from "react";
import { Stack } from "@mui/material";
import feeds from "../../mockdata/feeds";
import FeedList from "./FeedList";

const Feed = () => {
  return (
    <Stack alignItems="center">
      <FeedList feeds={feeds} />
    </Stack>
  );
};

export default Feed;
