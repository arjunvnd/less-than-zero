import { Phase } from "../Calculator";

export function calculateElectricityBill(units: string, phase: Phase) {
  const unitsConsumed = parseFloat(units);
  const connectionType: Phase = phase;

  const slabRates = [
    { limit: 50, rate: 3.3 },
    { limit: 50, rate: 4.15 },
    { limit: 50, rate: 5.25 },
    { limit: 50, rate: 7.1 },
    { limit: 50, rate: 8.35 },
    { limit: 50, rate: 6.55 },
    { limit: 50, rate: 7.4 },
    { limit: 50, rate: 7.75 },
    { limit: 100, rate: 8.05 },
    { limit: Infinity, rate: 9 },
  ];

  const fixedCharges = {
    single: [
      { limit: 40, charge: 0 },
      { limit: 50, charge: 45 },
      { limit: 100, charge: 75 },
      { limit: 150, charge: 95 },
      { limit: 200, charge: 130 },
      { limit: 250, charge: 145 },
      { limit: 300, charge: 190 },
      { limit: 350, charge: 215 },
      { limit: 400, charge: 235 },
      { limit: 500, charge: 265 },
      { limit: Infinity, charge: 290 },
    ],
    three: [
      { limit: 40, charge: 0 },
      { limit: 50, charge: 120 },
      { limit: 100, charge: 160 },
      { limit: 150, charge: 190 },
      { limit: 200, charge: 200 },
      { limit: 250, charge: 220 },
      { limit: 300, charge: 225 },
      { limit: 350, charge: 235 },
      { limit: 400, charge: 240 },
      { limit: 500, charge: 265 },
      { limit: Infinity, charge: 290 },
    ],
  };

  const meterRent = connectionType === Phase.Single ? 6 : 15;
  const fuelSurchargeRate = 0.1;
  const dutyRate = 0.1;

  const fixedChargeData = fixedCharges[connectionType];
  let fixedCharge = 0;
  for (const slab of fixedChargeData) {
    if (unitsConsumed <= slab.limit) {
      fixedCharge = slab.charge;
      break;
    }
  }

  let remainingUnits = unitsConsumed;
  let variableCharge = 0;
  let applicableRate = 0;

  if (unitsConsumed <= 250) {
    for (const slab of slabRates) {
      if (remainingUnits <= 0) break;
      const unitsInSlab = Math.min(remainingUnits, slab.limit);
      console.log("unit sla", unitsInSlab, remainingUnits, slab.rate);
      variableCharge += unitsInSlab * slab.rate;
      remainingUnits -= unitsInSlab;
      console.log("variable charge", variableCharge);
    }
  } else if (unitsConsumed > 250 && unitsConsumed <= 300) {
    applicableRate = 6.55;
    variableCharge = unitsConsumed * applicableRate;
  } else if (unitsConsumed > 300 && unitsConsumed <= 350) {
    applicableRate = 7.4;
    variableCharge = unitsConsumed * applicableRate;
  } else if (unitsConsumed > 350 && unitsConsumed <= 400) {
    applicableRate = 7.75;
    variableCharge = unitsConsumed * applicableRate;
  } else if (unitsConsumed > 400 && unitsConsumed <= 500) {
    applicableRate = 8.05;
    variableCharge = unitsConsumed * applicableRate;
  } else if (unitsConsumed > 500) {
    applicableRate = 9;
    variableCharge = unitsConsumed * applicableRate;
  }

  const duty = variableCharge * dutyRate;

  const fuelSurcharge = unitsConsumed * fuelSurchargeRate;
  const totalBill =
    fixedCharge + variableCharge + duty + meterRent + fuelSurcharge;

  const dailyUnitsRequired = unitsConsumed / 30;
  const panelProductionPerDay = 4;
  const panelsRequired = Math.ceil(dailyUnitsRequired / panelProductionPerDay);
  const totalCapacity = panelsRequired * 560;
  const totalCapacityKW = (totalCapacity / 1000).toFixed(2);

  const billDetails = {
    fixedCharge,
    variableCharge,
    duty,
    meterRent,
    fuelSurcharge,
    billAmount: Math.round(totalBill),
  };

  const solarDetails = {
    unitsConsumed,
    panelsRequired,
    dailyProduction: panelsRequired * panelProductionPerDay,
    totalCapacityKW,
    totalCapacity,
  };

  return {
    billDetails,
    solarDetails,
  };
}

const feild = {
  name: "entry.193734899",
  email: "entry.113074616",
  typeOfBuilding: "entry.63544061",
  ownedOrRented: "entry.294174387",
  billDuration: "entry.236568233",
  billAmount: "entry.109457986",
  lastBillAmount: "entry.1008318670",
  unitsConsumedInOneCycle: "entry.232192938",
  uploadYourLatestBill: "entry.2049971824",
  lessThanZero: "entry.269434138",
  scheduleCall: "entry.1893777474",
  phoneNumber: "entry.955030013",
  year: "entry.1490090909_year",
  month: "entry.1490090909_month",
  day: "entry.1490090909_day",
  hours: "entry.1490090909_hour",
  minute: "entry.1490090909_minute",
};
