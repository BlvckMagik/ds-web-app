import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../theme";
// import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Drako Schule admin",
  description: "Drako Schule admin app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ height: "calc(100vh)" }}
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <Header /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
