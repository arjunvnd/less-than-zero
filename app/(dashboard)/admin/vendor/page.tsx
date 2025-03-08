import VendorManagement from "@/app/components/common/vendor-management";
import { Typography } from "@mui/material";

export default function VendorPage() {
  return (
    <>
      <Typography gutterBottom variant="h5">
        Vendor Management
      </Typography>
      <VendorManagement />
    </>
  );
}
