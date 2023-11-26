import React from "react";
import { Avatar, Card, CardHeader } from "@mui/material";
import { IMember } from "../interfaces/Interfaces";

const MemberCard = ({ member }: { member: IMember }) => {
  return (
    <Card variant="outlined" sx={{ marginBottom: "10px", minWidth: "50vw" }}>
      <CardHeader
        avatar={
          <Avatar src={`https://i.pravatar.cc/150?img=${member.memberId}`} />
        }
        title={member.memberName}
        subheader={member.jobTitle}
      />
    </Card>
  );
};

export default MemberCard;
