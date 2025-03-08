import AssignVendorTable from "@/app/components/tables/assign-vendor-table";
import { Grid2, Stack, TextField } from "@mui/material";

export default function AdminLandingPage() {
  return (
    <>
      <Grid2 container>
        <Grid2 mb={3} size={{ xs: 12 }}>
          <Grid2
            container
            spacing={{
              md: 2,
            }}
          >
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextField
                name="search"
                placeholder="Search"
                label="Search"
                type="search"
                fullWidth
                variant="filled"
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Stack direction="row" spacing={2}>
                <TextField
                  name="budget"
                  placeholder="Filter by budget"
                  label="Filter by budget"
                  fullWidth
                  variant="filled"
                  select
                />
                <TextField
                  name="date"
                  placeholder="Filter by date"
                  label="Filter by date"
                  fullWidth
                  variant="filled"
                  select
                />
              </Stack>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
          <AssignVendorTable />
        </Grid2>
      </Grid2>
    </>
  );
}
