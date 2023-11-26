// Groups.js
import React from "react";
import groupsData from "../../mockdata/groups";
import { Stack, Typography } from "@mui/material";
import GroupList from "./GroupList";
import GroupSearch from "./GroupSearch";

const Groups = () => {
  return (
    <Stack alignItems="center">
      <Typography variant="h5">Groups</Typography>
      <GroupSearch />
      <GroupList groups={groupsData} />
    </Stack>
  );
};

export default Groups;
