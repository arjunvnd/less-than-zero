import { Grid2, Stack, TextField } from "@mui/material";
import React from "react";
import VendorManagementTable from "../tables/vendor-management-table";
import AddVendorDialog from "./add-vendor-dialog";

const VendorManagement = () => {
  return (
    <>
      <Grid2 container justifyContent="space-between">
        <Grid2>
          <Stack direction="row" spacing={2}>
            <TextField
              name="search"
              placeholder="Search by name or pincode"
              label="Search"
              type="search"
              fullWidth
              variant="filled"
            />
            <TextField
              select
              sx={{
                minWidth: 200,
              }}
              label="Status"
              defaultValue="all"
              slotProps={{
                select: {
                  native: true,
                },
              }}
              helperText="Filter by status"
              variant="filled"
            >
              <option key="all" value="all">
                All
              </option>
              <option key="active" value="active">
                Active
              </option>
              <option key="inactive" value="inactive">
                In Active
              </option>
            </TextField>
          </Stack>
        </Grid2>
        <Grid2>
          <AddVendorDialog />
        </Grid2>
      </Grid2>
      <VendorManagementTable />
    </>
  );
};

export default VendorManagement;
