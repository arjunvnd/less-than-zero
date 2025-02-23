import * as React from "react";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert, { AlertProps } from "@mui/material/Alert";

// TODO: Create a global snack bar

export default function SnackBarAlert({
  open,
  setOpen,
  severity,
  message,
}: {
  open: boolean;
  setOpen: (state: boolean) => void;
  severity: AlertProps["severity"];
  message: string;
}) {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
