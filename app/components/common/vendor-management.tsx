import { Grid2, TextField } from "@mui/material";
import React from "react";
import VendorManagementTable from "../tables/vendor-management-table";
import AddVendorDialog from "./add-vendor-dialog";

const VendorManagement = () => {
  return (
    <>
      <Grid2 container>
        <Grid2 size={{ xs: 12 }}>
          <Grid2
            container
            spacing={{ xs: 2, md: 2 }}
            alignItems="center"
            mb={3}
          >
            <Grid2
              size={{
                xs: 12,
                md: 3,
              }}
            >
              <TextField
                fullWidth
                name="search"
                placeholder="Search by name or pincode"
                label="Search"
                type="search"
                variant="filled"
              />
            </Grid2>
            <Grid2
              size={{
                xs: 12,
                md: 3,
              }}
            >
              <TextField
                fullWidth
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
            </Grid2>
            <Grid2
              size={{
                xs: 12,
                md: 6,
              }}
              textAlign="right"
            >
              <AddVendorDialog />
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <VendorManagementTable />
        </Grid2>
      </Grid2>
    </>
  );
};

export default VendorManagement;
