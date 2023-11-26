import React from "react";
import { IGroup } from "../interfaces/Interfaces";
import { Card, CardHeader, IconButton, Stack, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MemberList from "../members/MemberList";

interface IGroupCardProps {
  group: IGroup;
}

const GroupCard = ({ group }: IGroupCardProps) => {
  const { name, location, private: isPrivate, members } = group;
  return (
    <Card variant="outlined" sx={{ marginBottom: "10px" }}>
      <CardHeader
        title={name + " - " + location}
        subheader={isPrivate ? "Private" : "Public"}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <Stack alignItems="center">
        <Typography variant="h4">Members</Typography>
        <MemberList members={members} />
      </Stack>
    </Card>
  );
};

export default GroupCard;
