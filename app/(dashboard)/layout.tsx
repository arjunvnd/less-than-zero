import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./dashboard-global.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { StyledRoot } from "../(site)/StylesRoot";
import { CssBaseline, Toolbar } from "@mui/material";
import { Header } from "../components/Header";

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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider>
          <StyledRoot>
            <CssBaseline />
            <Header />
            <div className="app-container p-6">
              <Toolbar />
              {children}
            </div>
          </StyledRoot>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
