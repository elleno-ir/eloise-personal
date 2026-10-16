import { Pixelify_Sans } from "next/font/google";
import "./globals.css";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixelify",
});

export const metadata = {
  title: "Eloise | Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${pixelify.variable} font-sans antialiased bg-white text-slate-900 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}