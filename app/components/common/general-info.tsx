import { Grid2, Typography } from "@mui/material";
import React from "react";

function GeneralInfo() {
  return (
    <Grid2 p={20} container>
      <Grid2 size={{ xs: 6 }} />
      <Grid2>
        <Typography variant="h5">We wont bother you</Typography>
      </Grid2>
    </Grid2>
  );
}

export default GeneralInfo;
