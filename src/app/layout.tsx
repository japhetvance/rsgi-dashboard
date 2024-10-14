
import React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./css/globals.css";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import customTheme from "@/utils/theme/custom-theme";
import { CustomizerContextProvider } from "./context/customizerContext";
import '../utils/i18n';
import SessionProviderComp from "./components/nextauth/SessionProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adminpro Starterkit - Nextjs",
  description: "Adminpro",
};

export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode;
  session:any
}) {
  return (
    
      <html lang="en">
        <head>
          <ThemeModeScript />
        </head>
        <body className={`${montserrat.className}`} >
        <Flowbite theme={{ theme: customTheme }}>
        <SessionProviderComp session={session}>
          <CustomizerContextProvider>
              {children}
          </CustomizerContextProvider>
          </SessionProviderComp>
          </Flowbite>
        </body>
      </html>
  );
}
