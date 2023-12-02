import React from "react";
import { useGlobalContext } from "../Context/GlobalContext";
import { Stack, TextField } from "@mui/material";

const GroupSearch = () => {
  const { searchGroupTerm, setSearchGroupTerm } = useGlobalContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchGroupTerm(event.target.value);
  };

  return (
    <Stack width="50vh">
      <TextField
        variant="standard"
        type="search"
        placeholder="Search groups"
        value={searchGroupTerm}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default GroupSearch;
