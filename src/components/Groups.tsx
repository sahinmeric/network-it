// Groups.js
import React from "react";
import { useState } from "react";
import groupsData from "../mockdata/groups";
import { Stack, Typography } from "@mui/material";

const Groups = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(groupsData);

  const handleSearch = (e: any) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredGroups = groupsData.filter((group) =>
      group.name.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(filteredGroups);
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Groups
      </Typography>
      <Stack spacing={2}>
        <input
          type="text"
          placeholder="Search groups..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {searchResults.map((group) => (
          <div key={group.id}>
            <h3>{group.name}</h3>
            <p>Location: {group.location}</p>
            <ul>
              {group.members.map((member) => (
                <li key={member.memberId}>
                  {member.memberName} - {member.jobTitle}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Stack>
    </div>
  );
};

export default Groups;
