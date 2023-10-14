import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "./components/shared/NavBar";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
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
      <body className={inter.variable} suppressHydrationWarning={true}>
        <Theme appearance="light" accentColor="yellow">
          <NavBar />
          <main className="p-5">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
