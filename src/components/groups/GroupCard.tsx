import React from "react";
import { IGroup } from "../interfaces/Interfaces";
import { Card, CardHeader, IconButton, Stack, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MemberList from "../members/MemberList";
import MemberAvatarList from "../members/MemberAvatarList";

interface IGroupCardProps {
  group: IGroup;
}

const GroupCard = ({ group }: IGroupCardProps) => {
  const { name, location, private: isPrivate, members } = group;
  return (
    <Card variant="outlined" sx={{ mb: 1 }}>
      <CardHeader
        title={name + " - " + location}
        subheader={isPrivate ? "Private" : "Public"}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <Stack sx={{ p: 1 }}>
        <MemberAvatarList members={members} />
      </Stack>
    </Card>
  );
};

export default GroupCard;
