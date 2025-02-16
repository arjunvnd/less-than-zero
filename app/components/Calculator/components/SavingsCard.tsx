import { Box, Card, CardContent, Typography } from "@mui/material";
import { ReactNode } from "react";

interface SavingsCardProps {
  title: string;
  icon: ReactNode;
  value: number;
}

export const SavingsCard = ({ title, icon, value }: SavingsCardProps) => {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: "flex", mb: 3 }}>
          {icon}
          <Typography sx={{ ml: 2 }} variant="h6">
            {title}
          </Typography>
        </Box>
        <Typography variant="h3" sx={{ fontWeight: "100" }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};
