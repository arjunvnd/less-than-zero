"use client";
import { Button, Grid2, Typography, useTheme } from "@mui/material";
import SvgComponent from "./top-section-svg-component";
import Link from "next/link";

export default function TopSectionContainer() {
  const {
    palette: { secondary },
  } = useTheme();
  return (
    <Grid2
      container
      sx={{
        background: secondary.main,
      }}
    >
      <Grid2 display="flex" alignItems="center" size={{ xs: 12, md: 6 }}>
        <div className="p-6">
          <Typography
            color="primary"
            gutterBottom
            className="font-bold"
            variant="h3"
          >
            Solar Solutions Simplified
          </Typography>
          <Typography color="primary" gutterBottom className="!text-2xl">
            Seamless solar energy transformation for a brighter, greener future.
          </Typography>
          <Button
            sx={{
              mr: 2,
            }}
            variant="contained"
          >
            <Link href="#contact-us">Contact us</Link>
          </Button>
          <Button variant="outlined">
            <Link href="#calculator">Panel Estimator</Link>{" "}
          </Button>
        </div>
      </Grid2>
      <Grid2
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        size={{ md: 6, xs: 12 }}
      >
        <div className="w-2xs sm:w-3xs md:w-lg">
          <SvgComponent />
        </div>
      </Grid2>
    </Grid2>
  );
}
