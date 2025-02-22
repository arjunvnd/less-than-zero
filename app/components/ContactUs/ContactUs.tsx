import * as React from "react";
import Card from "@mui/material/Card";
import { Grid2 } from "@mui/material";
import { ContactUsForm } from "./ContectUsForm";

export function ContactUs() {
  return (
    <Grid2 container sx={{ px: 4 }} justifyContent="center">
      <Grid2 size={{ xs: 12, sm: 12, md: 8 }}>
        <Card>
          <ContactUsForm />
        </Card>
      </Grid2>
    </Grid2>
  );
}
