import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  IconButton,
  Link,
  ListItem,
  ListItemText,
} from "@mui/material";
import { IFeed } from "../interfaces/Interfaces";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface FeedCardProps {
  feed: IFeed;
}

const FeedCard = ({ feed }: FeedCardProps) => {
  const { memberName, content, memberId, timestamp, type, link } = feed;

  return (
    <Card variant="outlined" sx={{ marginBottom: "10px" }}>
      <CardHeader
        avatar={<Avatar src={`https://i.pravatar.cc/150?img=${memberId}`} />}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={memberName}
        subheader={timestamp}
      />
      <ListItem key={memberId + memberName}>
        {type === "note" && <ListItemText secondary={content} />}
        {type === "video" && (
          <Box>
            <ListItemText secondary={content} />
            <Link href={link}>Video</Link>
          </Box>
        )}
        {type === "image" && (
          <Box>
            <ListItemText secondary={content} />
            <img src={link} alt="Meme" style={{ maxWidth: "200px" }} />
          </Box>
        )}
      </ListItem>
    </Card>
  );
};

export default FeedCard;
