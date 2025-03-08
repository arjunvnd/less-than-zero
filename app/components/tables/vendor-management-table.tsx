import { mockVendorData } from "@/app/utils/mocks";
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
import VendorChip from "../common/vendor-chip";

export default function VendorManagementTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Vendor Name</TableCell>
            <TableCell align="right">Contact Details</TableCell>
            <TableCell align="right">Service Area</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockVendorData.map((row) => {
            return (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">
                  {row.serviceArea.join(", ")}
                </TableCell>
                <TableCell align="right">
                  <VendorChip status={row.status} />
                </TableCell>
                <TableCell align="center">
                  <Button variant="contained" sx={{ mr: 2 }}>
                    Edit Vendor
                  </Button>
                  <Button variant="contained" color="error">
                    Delete Vendor
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
