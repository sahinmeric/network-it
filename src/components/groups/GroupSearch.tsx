import React from "react";
import { useGlobalContext } from "../Context/GlobalContext";
import { Box, Stack, TextField } from "@mui/material";

const GroupSearch = () => {
  const { searchGroupTerm, setSearchGroupTerm } = useGlobalContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchGroupTerm(event.target.value);
  };

  return (
    <Box>
      <TextField
        type="text"
        placeholder="Search"
        value={searchGroupTerm}
        onChange={handleChange}
      />
    </Box>
  );
};

export default GroupSearch;
