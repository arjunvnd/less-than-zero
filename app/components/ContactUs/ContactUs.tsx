import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid2, TextField } from "@mui/material";

export function ContactUs() {
  return (
    <Grid2 container sx={{ px: 4 }}>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Typography sx={{ mb: { xs: 2 } }} variant="h3">
          Something can go here
        </Typography>
      </Grid2>
      <Grid2 size={{ sm: 12, md: 6 }}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Get Your First Three Quotes for Free
            </Typography>
            <Typography component="div" gutterBottom>
              Contact us today to receive your first three quotes without any
              cost. Don&apos;t miss out on this exclusive offer, reach out now
              and take advantage of our free quote service!
            </Typography>
            <Grid2 container>
              <Grid2 size={12}>
                <TextField
                  label="Enter your email"
                  id="outlined-start-adornment"
                  sx={{ flex: 1, width: "100%" }}
                />
              </Grid2>
              <Grid2 size={12} sx={{ mt: 1 }}>
                <Button fullWidth size="large" variant="contained">
                  Contact Us
                </Button>
              </Grid2>
            </Grid2>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
}
