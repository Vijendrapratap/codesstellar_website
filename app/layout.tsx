import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StarBackground from "../components/StarBackground";
import CustomCursor from "../components/CustomCursor";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
    title: "Codesstellar | Innovating the Future",
    description: "Premier IT services in Mobile App Development, Blockchain, AI, and Gaming.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${outfit.variable} font-sans bg-stellar-dark selection:bg-stellar-gold selection:text-stellar-dark overflow-x-hidden`}>
                <div className="relative min-h-screen flex flex-col">
                    <CustomCursor />
                    <div className="bg-noise fixed inset-0 z-0 pointer-events-none opacity-50"></div>
                    <StarBackground />

                    {/* Subtle Gradient Spots for Atmosphere */}
                    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-5 pointer-events-none">
                        {/* Green Nebula */}
                        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-stellar-green/10 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse-slow"></div>
                        {/* Gold Nebula */}
                        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-stellar-gold/5 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
                    </div>

                    <Navbar />
                    <main className="flex-grow z-10 w-full">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
