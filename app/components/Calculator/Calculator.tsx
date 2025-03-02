"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  Grid2,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  useMediaQuery,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { SavingsCard } from "./components";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import TodayIcon from "@mui/icons-material/Today";
import FactoryIcon from "@mui/icons-material/Factory";
import bg from "@/public/pexels-pixabay-356049.jpg";
import { calculateElectricityBill } from "./utils/calculate";
import { useTheme } from "@mui/material/styles";

export enum Phase {
  Single = "single",
  Three = "three",
}

export function Calculator() {
  const [values, setValues] = React.useState({
    units: "",
    phase: Phase.Single,
  });
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [billDetails, setBillDetails] = React.useState({
    billAmount: 0,
    panelsRequired: 0,
    dailyProduction: 0,
    panelCapacity: 0,
  });

  const calculate = () => {
    const {
      billDetails: { billAmount },
      solarDetails: { panelsRequired, dailyProduction, totalCapacity },
    } = calculateElectricityBill(values.units, values.phase);
    setBillDetails({
      billAmount,
      panelsRequired,
      dailyProduction,
      panelCapacity: totalCapacity,
    });
  };

  const handleUnitChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const units = e.target.value;
    if (Number(units) >= 0) {
      setValues({
        ...values,
        units: e.target.value,
      });
    }
  };

  const handlePhaseChange = (e: SelectChangeEvent<Phase>) => {
    setValues({
      ...values,
      phase: e.target.value as Phase,
    });
  };

  return (
    <Card
      sx={{ minWidth: 275, py: 6, px: { md: 3, xs: 2 } }}
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        boxShadow: "inset 0 0 0 1000px rgb(0 0 0 / 43%)",
      }}
      id="calculator"
    >
      <CardContent sx={{ px: { md: 3, xs: 0 } }}>
        <Grid2 container spacing={2}>
          <Grid2
            size={{
              xs: 12,
              lg: 6,
            }}
          >
            <Typography color="#fff" variant="h5" component="div" my={2}>
              Discover Your Solar Potential: Calculate Your Plan and Savings
            </Typography>
            <Typography color="#fff" component="div" my={2}>
              Please enter the number of units of electricity you have consumed
            </Typography>
            <Box display="flex">
              <TextField
                onChange={handleUnitChange}
                label="Units"
                placeholder="Enter your bill units"
                id="outlined-start-adornment"
                sx={{ flex: 1, width: "100%", backgroundColor: "#fff" }}
                type="number"
                variant="filled"
                value={values.units}
                slotProps={{
                  htmlInput: {
                    min: 0,
                    inputMode: "numeric",
                  },
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <ElectricBoltIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>
            <Box>
              <FormControl
                variant="filled"
                fullWidth
                sx={{ my: 2, backgroundColor: "#fff" }}
              >
                <InputLabel id="phase-select-label">Select Phase</InputLabel>
                <Select
                  labelId="phase-select-label"
                  fullWidth
                  variant="filled"
                  label="Select Phase"
                  sx={{ backgroundColor: "#fff" }}
                  value={values.phase}
                  onChange={handlePhaseChange}
                >
                  <MenuItem value={Phase.Single}>Single Phase</MenuItem>
                  <MenuItem value={Phase.Three}>Three Phase</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Button
                sx={{
                  display: "flex",
                }}
                size="large"
                variant="contained"
                fullWidth
                onClick={calculate}
              >
                Calculate
              </Button>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, lg: 6 }}>
            <Grid2 container spacing={2}>
              <Grid2 size={{ xs: 6 }}>
                <SavingsCard
                  title="Bill Amount"
                  value={billDetails.billAmount}
                  icon={
                    <CurrencyRupeeIcon
                      fontSize={matches ? "large" : "medium"}
                    />
                  }
                />
              </Grid2>
              <Grid2 size={{ xs: 6 }}>
                <SavingsCard
                  title="Panels Required"
                  value={billDetails.panelsRequired}
                  icon={
                    <SolarPowerIcon fontSize={matches ? "large" : "medium"} />
                  }
                />
              </Grid2>
              <Grid2 size={{ xs: 6 }}>
                <SavingsCard
                  title="Daily Production"
                  value={billDetails.dailyProduction}
                  icon={<TodayIcon fontSize={matches ? "large" : "medium"} />}
                />
              </Grid2>
              <Grid2 size={{ xs: 6 }}>
                <SavingsCard
                  title="Panel Capacity"
                  value={billDetails.panelCapacity}
                  icon={<FactoryIcon fontSize={matches ? "large" : "medium"} />}
                />
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
}
