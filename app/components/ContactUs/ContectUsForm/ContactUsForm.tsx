"use client";

import { useActionState, useEffect, useState } from "react";
import { contactUs } from "@/app/actions";
import {
  Button,
  CardContent,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import SnackBarAlert from "../../SnackBarAlert/SnackBarAlert";

export function ContactUsForm() {
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [formState, contactUsAction] = useActionState(contactUs, {
    success: false,
  });

  useEffect(() => {
    if (formState.success) {
      setShowSnackBar(true);
    } else if (!formState.success && formState.serverError) {
      setShowSnackBar(true);
    }
  }, [formState.success, formState.serverError]);

  return (
    <form action={contactUsAction}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom align="center">
          Contact Us
        </Typography>
        <Typography component="div" mb={3} align="center">
          Contact us today to receive your first three quotes without any cost.
          Don&apos;t miss out on this exclusive offer, reach out now and take
          advantage of our free quote service!
        </Typography>
        <Grid2 container>
          <Grid2 size={12} mb={2}>
            <TextField
              label="Name"
              id="outlined-start-adornment"
              sx={{ flex: 1, width: "100%" }}
              name="userName"
              required
              error={!!formState?.errors?.userName}
              helperText={formState?.errors?.userName}
              defaultValue={formState?.fields?.userName}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              placeholder="Enter your name"
            />
          </Grid2>
          <Grid2 size={12} mb={2}>
            <TextField
              label="Email"
              id="outlined-start-adornment"
              sx={{ flex: 1, width: "100%" }}
              name="email"
              required
              error={!!formState?.errors?.email}
              helperText={formState?.errors?.email}
              defaultValue={formState?.fields?.email}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              placeholder="Enter your email"
            />
          </Grid2>
          <Grid2 size={12} mb={2}>
            <TextField
              label="Phone Number"
              id="outlined-start-adornment"
              sx={{ flex: 1, width: "100%" }}
              name="phoneNumber"
              required
              error={!!formState?.errors?.phoneNumber}
              helperText={formState?.errors?.phoneNumber}
              defaultValue={formState?.fields?.phoneNumber}
              type="tel"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
                htmlInput: {
                  maxLength: 12,
                },
              }}
              placeholder="Enter your phone number"
            />
          </Grid2>
          <Grid2 size={12} mb={2}>
            <TextField
              label="Average Monthly Bill"
              id="outlined-start-adornment"
              sx={{ flex: 1, width: "100%" }}
              name="monthlyBill"
              helperText={formState?.errors?.monthlyBill}
              defaultValue={formState?.fields?.monthlyBill}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
                htmlInput: {
                  min: 0,
                },
              }}
              type="number"
              placeholder="Enter your average monthly bill"
            />
          </Grid2>
          {/* <Grid2 size={12} mb={2}>
            <DateTimePicker
              label="When can we contact you"
              sx={{ flex: 1, width: "100%" }}
              name="callMeAt"
              disablePast
              slotProps={{
                textField: {
                  placeholder: "When can we contact you",
                  slotProps: {
                    inputLabel: {
                      shrink: true,
                    },
                  },
                },
              }}
              defaultValue={formState?.fields?.callMeAt}
            />
          </Grid2> */}
          <Grid2 size={12} sx={{ mt: 1 }}>
            <Button fullWidth size="large" variant="contained" type="submit">
              Contact Us
            </Button>
          </Grid2>
        </Grid2>
      </CardContent>
      <SnackBarAlert
        open={showSnackBar}
        setOpen={setShowSnackBar}
        severity={formState.serverError ? "error" : "success"}
        message={
          formState.serverError
            ? "Sorry we are facing some technical issues."
            : "Thanks we will get back to you shortly"
        }
      />
    </form>
  );
}
