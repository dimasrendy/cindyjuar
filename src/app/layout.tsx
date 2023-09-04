// import Head from "next/head";
import { inter } from "./fonts";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Wedding of C&J",
  description: "The Wedding of C&J",
  metadataBase: new URL('https://cindyjuarnikah.netlify.app/'),
  openGraph: {
    title: "The Wedding of C&J",
    description: "The Wedding of C&J",
    type: "website",
    images: {
      url: "/me.jpeg",
      width: 600,
      height: 800,
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
      {/* <Head>
        <title>The Wedding of Cindy & Juar</title>
        <meta name="description" content="The Wedding of Cindy & Juar" key="desc" />
        <meta property="og:title" content="The Wedding of Cindy & Juar" />
        <meta
          property="og:description"
          content="The Wedding of Cindy & Juar"
        />
        <meta
          property="og:image"
          content="./Background.jpeg"
        />
      </Head> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
