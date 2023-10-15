import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "./components/shared/NavBar";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import { Theme } from "@radix-ui/themes";

import AuthProvider from "./auth/Provider";
import Providers from "./ThemeProvider";
import QueryProvider from "./QueryClientProvider";
const inter = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Created By Naimur Reza",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <QueryProvider>
          <AuthProvider>
            <Providers>
              <Theme accentColor="yellow">
                <NavBar />
                <main className="p-5">{children}</main>
              </Theme>
            </Providers>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
