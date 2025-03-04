import LoginForm from "@/app/components/common/login-form";
import { Grid2, Typography } from "@mui/material";

export default function Login() {
  return (
    <Grid2
      sx={{
        height: "100vh",
      }}
      container
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography gutterBottom variant="h4">
        Admin Login
      </Typography>
      <LoginForm />
    </Grid2>
  );
}
