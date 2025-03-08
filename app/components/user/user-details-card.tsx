import { UserInformation } from "@/app/utils/mocks";
import { Grid2, Paper, Stack, Typography } from "@mui/material";

type UserDetailsProps = UserInformation;

export default function UserDetailsCard({
  name,
  email,
  budgetRange,
  pincode,
  phoneNumber,
}: UserDetailsProps) {
  return (
    <>
      <Paper sx={{ width: "100%", p: 4 }}>
        <Grid2 spacing={{ xs: 3, md: 0 }} container>
          <Grid2 size={{ md: 12 }}>
            <Typography sx={{ mb: { md: 3 } }} variant="h6">
              User Details
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Stack spacing={3} direction="column">
              <div>
                <Typography fontWeight={600}>Name:</Typography>
                <Typography>{name}</Typography>
              </div>
              <div>
                <Typography fontWeight={600}>Email:</Typography>
                <Typography>{email}</Typography>
              </div>
              <div>
                <Typography fontWeight={600}>Budget Range:</Typography>
                <Typography>{budgetRange}</Typography>
              </div>
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Stack spacing={3} direction="column">
              <div>
                <Typography fontWeight={600}>Phone Number:</Typography>
                <Typography>{phoneNumber}</Typography>
              </div>
              <div>
                <Typography fontWeight={600}>Pincode:</Typography>
                <Typography>{pincode}</Typography>
              </div>
            </Stack>
          </Grid2>
        </Grid2>
      </Paper>
    </>
  );
}
