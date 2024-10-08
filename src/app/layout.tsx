import type { Metadata } from "next";
import "./globals.css";
import { League_Gothic } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Background } from "@/components/ui/background";



const leGoFont = League_Gothic({ weight: ["400"], style: ["normal"], subsets: ["latin"] })

export const metadata: Metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (

      <html lang="en">
         <body className={`${leGoFont.className} overflow-x-hidden`}>
            <ThemeProvider
               attribute="class"
               defaultTheme="light"
               disableTransitionOnChange
            >
               <Background />
               {children}
            </ThemeProvider>
         </body>
      </html>
   );
}
