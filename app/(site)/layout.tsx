import type { Metadata } from "next";
import CssBaseline from "@mui/material/CssBaseline";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { StyledRoot } from "./StylesRoot";
import { Header } from "../components/Header";
import { Toolbar } from "@mui/material";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Less Than Zero",
  description: "Less Than Zero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider>
          <StyledRoot>
            <CssBaseline />
            <Header />
            <div>
              <Toolbar />
              {children}
            </div>
          </StyledRoot>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
