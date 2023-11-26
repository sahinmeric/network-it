import React from "react";
import { List, Typography } from "@mui/material";
import MemberCard from "./MemberCard";
import { IMember } from "../interfaces/Interfaces";

interface MemberListProps {
  members: IMember[];
}

const MemberList = ({ members }: MemberListProps) => {
  return (
    <List>
      <Typography variant="h6" gutterBottom>
        Members
      </Typography>
      {members.map((member) => (
        <MemberCard key={member.memberId} member={member} />
      ))}
    </List>
  );
};

export default MemberList;
