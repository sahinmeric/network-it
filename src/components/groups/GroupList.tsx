import React from "react";
import { List, Typography } from "@mui/material";
import { IGroup } from "../interfaces/Interfaces";
import { useGlobalContext } from "../Context/GlobalContext";
import { useEffect } from "react";
import GroupCard from "./GroupCard";

interface GroupListProps {
  groups: IGroup[];
}

const GroupList = ({ groups }: GroupListProps) => {
  const { searchGroupTerm } = useGlobalContext();
  const [searchResults, setSearchResults] = React.useState<IGroup[]>([]);

  useEffect(() => {
    const results = groups.filter((group) =>
      group.name.toLowerCase().includes(searchGroupTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchGroupTerm, groups, setSearchResults]);

  return (
    <List>
      <Typography variant="h5" gutterBottom>
        Groups
      </Typography>
      {searchResults.map((group) => (
        <GroupCard key={group.id} group={group} />
      ))}
    </List>
  );
};

export default GroupList;
