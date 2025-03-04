"use client";
import { Button, Paper, Stack, TextField } from "@mui/material";

export default function LoginForm() {
  return (
    <Paper elevation={3} square={false} className="md:w-xl p-8">
      <form>
        <Stack>
          <TextField
            sx={{
              mb: 3,
            }}
            name="email"
            placeholder="Email/Username"
          />
          <TextField
            sx={{
              mb: 3,
            }}
            name="password"
            placeholder="Password"
          />
          <Button
            sx={{
              mb: 3,
            }}
            variant="contained"
            type="submit"
            size="large"
          >
            Login
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}
