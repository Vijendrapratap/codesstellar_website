import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Codesstellar | Innovating the Future",
  description: "Premier IT services in Mobile App Development, Blockchain, AI, and Gaming.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
