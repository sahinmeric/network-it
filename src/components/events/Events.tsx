// Events.tsx
import React from "react";
import events from "../../mockdata/events";
import { Stack, Typography } from "@mui/material";
import EventList from "./EventList";

const Events = () => {
  return (
    <Stack alignItems="center">
      <Typography variant="h5">Events</Typography>
      <EventList events={events} />
    </Stack>
  );
};

export default Events;
