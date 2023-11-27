import React from "react";
import { List } from "@mui/material";
import MemberCard from "./MemberCard";
import { IMember } from "../interfaces/Interfaces";

interface MemberListProps {
  members: IMember[];
}

const MemberList = ({ members }: MemberListProps) => {
  return (
    <List>
      {members.map((member) => (
        <MemberCard key={member.memberId} member={member} />
      ))}
    </List>
  );
};

export default MemberList;
