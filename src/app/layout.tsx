import { inter } from "./fonts";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Wedding of C&J",
  description: "Sabtu, 16 September 2023",
  metadataBase: new URL('https://cindyjuarnikah.netlify.app/'),
  openGraph: {
    title: "The Wedding of C&J",
    description: "Sabtu, 16 September 2023",
    type: "website",
    images: {
      url: "/me.jpeg",
      width: 100,
      height: 100,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
