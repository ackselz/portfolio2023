import Background from "@/components/Background";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Shao Chong Tan",
    description: "About me.",
    metadataBase: null,
    openGraph: {
        title: "Shao Chong Tan's Portfolio",
        description: "About me.",
        url: "",
        siteName: "Shao Chong Tan",
        images: [
            {
                url: "/og-padded.png",
                width: 1920,
                height: 208,
            },
        ],
        locale: "en_SG",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={cn(inter.className, "subpixel-antialiased")}>
                <Background>{children}</Background>
                <Analytics />
            </body>
        </html>
    );
}
