import AssignVendorTable from "@/app/components/tables/assign-vendor-table";
import { Grid2 } from "@mui/material";

export default function AdminLandingPage() {
  return (
    <>
      <Grid2 container sx={{ p: 4 }}>
        <AssignVendorTable />
      </Grid2>
    </>
  );
}
