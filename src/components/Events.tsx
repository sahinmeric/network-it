// Events.tsx
import { useState } from "react";
import { events } from "../mockdata/generateMockData";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(events);

  const handleSearch = (e: any) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter events based on the search term
    const filteredEvents = events.filter(
      (event) =>
        event.location.toLowerCase().includes(term.toLowerCase()) ||
        event.description.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(filteredEvents);
  };

  return (
    <div>
      <h2>Events</h2>
      <input
        type="text"
        placeholder="Search Events..."
        value={searchTerm}
        onChange={handleSearch}
      />

      {searchResults.map((event) => (
        <div key={event.id}>
          <h3>{event.name}</h3>
          <p>Organizer: {event.organizer}</p>
          <p>Location: {event.location}</p>
          <p>
            Date & Time: {new Date(event.date).toLocaleDateString()}{" "}
            {new Date(event.date).toLocaleTimeString()}
          </p>
          {/* Display other group information */}
          <p>Description: {event.description}</p>
          <p>Members joining:</p>
          <ul>
            {event.members.map((member) => (
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

export default Events;
