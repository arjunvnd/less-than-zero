import { TextField, Typography } from "@mui/material";
import React from "react";

const VendorSearch = () => {
  return (
    <div>
      <Typography mb={2} variant="h6">
        Vendor Search
      </Typography>
      <TextField
        sx={{
          mb: 3,
        }}
        name="search"
        placeholder="Search"
        label="Search"
        type="search"
        fullWidth
        variant="filled"
      />
    </div>
  );
};

export default VendorSearch;
