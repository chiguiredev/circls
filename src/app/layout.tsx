import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/shareComponents/Header";
import { getServerSession } from "next-auth";
import Providers from "./providers";
import type { Session } from "next-auth";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Circls",
  description: "A karma app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session: Session | null = await getServerSession();

  return (
    <Providers session={session}>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </Providers>
  );
}
