import type { Metadata } from "next";
import "./globals.css";
import { Poppins }  from "next/font/google"

import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700']
});

export const metadata: Metadata = {
  title: "Text Editor",
  description: "Editor text simple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <ToastContainer position="bottom-left" autoClose={3000} aria-label={undefined}/>
        {children}
      </body>
    </html>
  );
}
