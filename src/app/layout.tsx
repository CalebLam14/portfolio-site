import { Metadata } from "next";
import { Exo_2 } from "next/font/google";

import { AppConfig } from "../config/AppConfig";
import RootBodyLayout from "./RootBodyLayout";

import "../globals.scss";

import { Viewport } from "next/dist/lib/metadata/types/metadata-interface";
import NextTopLoader from "nextjs-toploader";

const exo2 = Exo_2({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Caleb Lam",
  description: "A software developer focused on backend and cloud development. Greetings!",
  openGraph: {
    url: "https://www.caleblamcodes.dev/",
    title: "Caleb Lam",
    description: "A software developer focused on backend development. Greetings!",
    images: [
      {
        url: AppConfig.ogImageURL,
        width: 630,
        height: 630,
        alt: "Caleb Lam logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: AppConfig.logoURL,
};

export const viewport: Viewport = {
  themeColor: "#043A9B",
  width: "device-width",
  initialScale: 1,
};

export interface RootProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootProps) {
  return (
    <html data-bs-theme="dark">
      <body>
        <div className={exo2.className}>
          <RootBodyLayout>
            <NextTopLoader color={AppConfig.hedronColor?.toString() ?? "#29D"} showSpinner={false} />
            {children}
          </RootBodyLayout>
        </div>
      </body>
    </html>
  );
}
