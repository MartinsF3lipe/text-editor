import type { Metadata } from "next";
import "./globals.css";
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const metadata: Metadata = {
  title: "Text Editor",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        aria-label={undefined}/>
      <body>
        {children}
      </body>
    </html>
  );
}
