import React from "react";
import { useGlobalContext } from "../Context/GlobalContext";
import { Stack } from "@mui/material";

const GroupSearch = () => {
  const { searchGroupTerm, setSearchGroupTerm } = useGlobalContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchGroupTerm(event.target.value);
  };

  return (
    <Stack>
      <input
        type="text"
        placeholder="Search"
        value={searchGroupTerm}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default GroupSearch;
