import { VendorStatus } from "@/app/utils/mocks";
import { Chip } from "@mui/material";
import React from "react";

const VendorChip = ({ status }: { status: VendorStatus }) => {
  return (
    <>
      <Chip
        label={status === "active" ? "Active" : "Inactive"}
        variant="filled"
        color={status === "active" ? "success" : "error"}
      />
    </>
  );
};

export default VendorChip;
