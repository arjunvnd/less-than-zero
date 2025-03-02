"use client";

import { Grid2, Typography, useTheme } from "@mui/material";
// import { ContactUs } from "../ContactUs";

export default function Footer() {
  const {
    palette: { primary },
  } = useTheme();
  return (
    <Grid2
      container
      sx={{
        background: primary.main,
        px: 3,
        py: 4,
        position: "relative",
      }}
      component="footer"
    >
      {/* <Grid2
        sx={{
          position: "relative",
        }}
        size={{ xs: 12, md: 6 }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -320,
            bottom: 0,
          }}
        >
          <ContactUs />
        </Box>
      </Grid2> */}
      <Grid2 size={{ xs: 12, md: 6 }} display="flex" alignItems="center">
        <div>
          <Typography gutterBottom color="secondary" className="!font-bold">
            Email
          </Typography>
          <Typography gutterBottom color="secondary">
            less@lessthanzero.com
          </Typography>
          <Typography gutterBottom color="secondary" className="!font-bold">
            Mobile
          </Typography>
          <Typography gutterBottom color="secondary">
            1234567890
          </Typography>
          <Typography gutterBottom color="secondary" className="!font-bold">
            Address
          </Typography>
          <Typography gutterBottom color="secondary">
            Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Tenetur,
            eveniet Road
          </Typography>
        </div>
      </Grid2>
    </Grid2>
  );
}
