// Feed.tsx
import { Paper, Stack, Typography } from "@mui/material";
import feeds from "../mockdata/feeds";

const Feed = () => {
  return (
    <Stack>
      <Typography variant="h5" gutterBottom>
        Social Updates
      </Typography>
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
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
                <img src={item.link} alt="Meme" style={{ maxWidth: "200px" }} />
              </div>
            )}
            <hr style={{ margin: "10px 0" }} />
          </div>
        ))}
      </Paper>
    </Stack>
  );
};

export default Feed;
