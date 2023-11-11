// components/Groups.js
import { useState } from "react";
import groupsData from "../mockdata/groups";

const Groups = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(groupsData);

  const handleSearch = (e: any) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter groups based on the search term
    const filteredGroups = groupsData.filter((group) =>
      group.name.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(filteredGroups);
  };

  return (
    <div>
      <h2>Groups</h2>
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
          {/* Display other group information */}
          <ul>
            {group.members.map((member) => (
              <li key={member.memberId}>
                {member.memberName} - {member.jobTitle}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Groups;
