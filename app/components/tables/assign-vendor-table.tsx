import { mockAssignVendorData } from "@/app/utils/mocks";
import paths from "@/app/utils/paths";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import dayjs from "dayjs";
import Link from "next/link";

// Example usage:
const mockData = [
  mockAssignVendorData(
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
  ),
  mockAssignVendorData(
    "Steve",
    "9876543210",
    "Steve@example.com",
    "₹10,000 - ₹15,000",
    "695001",
    new Date(),
    [
      { id: 1, name: "Vendor A" },
      { id: 2, name: "Vendor B" },
    ]
  ),
  mockAssignVendorData(
    "Mark",
    "9876543210",
    "Mark@example.com",
    "₹10,000 - ₹15,000",
    "695001",
    new Date(),
    [
      { id: 1, name: "Vendor A" },
      { id: 2, name: "Vendor B" },
    ]
  ),
];

export default function AssignVendorTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Budget Range</TableCell>
            <TableCell align="right">Pincode</TableCell>
            <TableCell align="right">Submission Date</TableCell>
            <TableCell align="center">Assign Vendor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockData.map((row) => {
            return (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.phoneNumber}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.budgetRange}</TableCell>
                <TableCell align="right">{row.pincode}</TableCell>
                <TableCell align="right">
                  {dayjs(row.submissionDate).format("DD/MM/YYYY")}
                </TableCell>
                <TableCell align="right">
                  <span className="mr-2">
                    {row.assignedVendors
                      .map((vendor) => vendor.name)
                      .join(" ,")}
                  </span>
                  <Link href={paths.assignVendorToUser(row.name)}>
                    <Button variant="contained" size="small">
                      Assign Vendor
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
