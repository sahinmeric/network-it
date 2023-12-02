import { Avatar, AvatarGroup } from "@mui/material";
import { IMember } from "../interfaces/Interfaces";

interface MemberListProps {
  members: IMember[];
}

const MemberAvatarList = ({ members }: MemberListProps) => {
  return (
    <AvatarGroup max={8}>
      {members.map((member) => (
        <Avatar
          key={member.memberId}
          src={`https://i.pravatar.cc/150?img=${member.memberId}`}
        />
      ))}
    </AvatarGroup>
  );
};

export default MemberAvatarList;
