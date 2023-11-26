import React from "react";
import { IGroup } from "../interfaces/Interfaces";
import { Card, CardHeader, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MemberList from "../members/MemberList";

interface IGroupCardProps {
  group: IGroup;
}

const GroupCard = ({ group }: IGroupCardProps) => {
  return (
    <Card variant="outlined" sx={{ marginBottom: "10px", minWidth: "50vw" }}>
      <CardHeader
        title={group.name + " - " + group.location}
        subheader={group.private ? "Private" : "Public"}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <MemberList members={group.members} />
    </Card>
  );
};

export default GroupCard;
