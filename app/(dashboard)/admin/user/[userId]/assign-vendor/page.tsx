import VendorSearch from "@/app/components/common/vendor-search";
import AssignVendorToUserTable from "@/app/components/tables/assign-vendor-to-user-table";
import UserDetailsCard from "@/app/components/user/user-details-card";
import { mockAssignVendorData } from "@/app/utils/mocks";
import { Button, Stack, Typography } from "@mui/material";

export default function AssignVendorPage() {
  const mockData = mockAssignVendorData(
    "John",
    "9876543210",
    "John@example.com",
    "₹10,000 - ₹15,000",
    "695001",
    new Date(),
    [
      { id: 1, name: "Vendor A" },
      { id: 2, name: "Vendor B" },
    ]
  );
  return (
    <>
      <Typography gutterBottom mb={2} variant="h5">
        Assign vendor to User
      </Typography>
      <UserDetailsCard
        name={mockData.name}
        phoneNumber={mockData.phoneNumber}
        budgetRange={mockData.budgetRange}
        email={mockData.email}
        pincode={mockData.pincode}
      />
      <div className="mt-3 mb-2">
        <Stack>
          <VendorSearch />
          <Button size="large" variant="contained" className="self-start !mb-2">
            Assign Selected Vendor
          </Button>
        </Stack>
      </div>
      <AssignVendorToUserTable />
    </>
  );
}
