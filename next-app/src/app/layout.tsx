import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./site.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace",
  description: "Learn from the best and create your future with ByteSpace.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
