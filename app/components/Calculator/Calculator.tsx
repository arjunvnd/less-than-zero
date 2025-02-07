import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

export function Calculator() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Calculate your number of units
        </Typography>
        <Typography component="div" gutterBottom>
          Please enter the number of units of electricity you have consumed
        </Typography>
        <Box display="flex">
          <TextField
            label="Enter your bill units"
            id="outlined-start-adornment"
            sx={{ flex: 1, width: "100%" }}
            type="number"
            slotProps={{
              htmlInput: {
                min: 0,
              },
            }}
          />
          <Button
            sx={{
              display: "flex",
              ml: 1,
            }}
            size="small"
            variant="contained"
          >
            Calculate
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
