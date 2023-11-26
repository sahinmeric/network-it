// Groups.js
import React from "react";
import groupsData from "../../mockdata/groups";
import { Stack } from "@mui/material";
import GroupList from "./GroupList";
import GroupSearch from "./GroupSearch";

const Groups = () => {
  return (
    <Stack alignItems="center">
      <GroupSearch />
      <GroupList groups={groupsData} />
    </Stack>
  );
};

export default Groups;
