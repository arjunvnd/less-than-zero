import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Logo from "@/public/logo.jpg";

export function Header() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Image src={Logo} width={32} height={32} alt="Less than zero Logo" />
          <Typography
            variant="h6"
            component="h1"
            sx={{ flexGrow: 1, marginLeft: 2 }}
          >
            LessThanZero
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
