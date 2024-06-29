import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export const metadata: Metadata = {
  title: "Rest Country API",
  description:
    "A simple app to search for countries using the Rest Country API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className} root`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
