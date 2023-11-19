// Feed.tsx
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import feeds from "../mockdata/feeds";

const Feed = () => {
  return (
    <Stack alignItems="center">
      <List>
        <Typography variant="h1" sx={{ marginBottom: "10px" }}>
          Feed
        </Typography>
        {feeds.map(
          ({ memberName, content, memberId, timestamp, type, link }, index) => (
            <Card
              variant="outlined"
              sx={{ marginBottom: "10px", minWidth: "50vw" }}
            >
              <CardHeader
                avatar={
                  <Avatar src={`https://i.pravatar.cc/150?img=${memberId}`} />
                }
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                title={memberName}
                subheader={timestamp}
              />
              <ListItem key={index + memberName}>
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
          )
        )}
      </List>
    </Stack>
  );
};

export default Feed;
