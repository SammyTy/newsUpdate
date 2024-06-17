import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700'],
  variable: '--font-lato'
});

export const metadata = {
  title: "newsupdate",
  description: "Get updated on the current news",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.variable}>{children}</body>
    </html>
  );
}
