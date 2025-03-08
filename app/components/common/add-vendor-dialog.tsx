"use client";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

const AddVendorDialog = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen} variant="contained">
        Add New Vendor
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="add-vendor-title"
      >
        <DialogTitle id="add-vendor-title">Add New Vendor</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              sx={{
                mb: 3,
              }}
              name="vendor-name"
              placeholder="Vendor Name"
              label="Vendor Name"
              type="text"
              fullWidth
              variant="filled"
            />
            <TextField
              sx={{
                mb: 3,
              }}
              name="phone-number"
              placeholder="Phone Number"
              label="Phone Number"
              type="tel"
              fullWidth
              variant="filled"
            />
            <TextField
              sx={{
                mb: 3,
              }}
              name="email"
              placeholder="Email"
              label="Email"
              type="text"
              fullWidth
              variant="filled"
            />
            <TextField
              sx={{
                mb: 3,
              }}
              name="pincode"
              placeholder="Pincodes"
              label="Pincodes"
              type="number"
              fullWidth
              variant="filled"
            />
            <TextField
              select
              fullWidth
              label="Status"
              defaultValue="active"
              slotProps={{
                select: {
                  native: true,
                },
              }}
              variant="filled"
            >
              <option key="active" value="active">
                Active
              </option>
              <option key="inactive" value="inactive">
                In Active
              </option>
            </TextField>
          </form>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default AddVendorDialog;
