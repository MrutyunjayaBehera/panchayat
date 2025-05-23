import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RootLayoutClient from "@/components/RootLayoutClient";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Panchayat",
    description: "A community platform",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-100`}>
                <RootLayoutClient>
                    {children}
                </RootLayoutClient>
            </body>
        </html>
    );
}
