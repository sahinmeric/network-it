import React from "react";
import { List } from "@mui/material";
import { IEvent } from "../interfaces/Interfaces";
import EventCard from "./EventCard";

interface EventListProps {
  events: IEvent[];
}

const EventList = ({ events }: EventListProps) => {
  return (
    <List sx={{ width: "50vw" }}>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </List>
  );
};

export default EventList;
