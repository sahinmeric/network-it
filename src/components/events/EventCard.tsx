import React from "react";
import { IEvent } from "../interfaces/Interfaces";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MemberList from "../members/MemberList";

interface IEventCardProps {
  event: IEvent;
}

const EventCard = ({ event }: IEventCardProps) => {
  const { name, date, description, members } = event;
  return (
    <Card variant="outlined" sx={{ marginBottom: "10px" }}>
      <CardHeader
        title={name}
        subheader={date}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <Stack alignItems="center">
        <Typography variant="h4">Attendees</Typography>
        <MemberList members={members} />
      </Stack>
    </Card>
  );
};

export default EventCard;
