import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Shao Chong Tan",
    description: "About me.",
    openGraph: {
        title: "Shao Chong Tan's Portfolio",
        description: "About me.",
        // url: "https://shaochong.dev",
        siteName: "Shao Chong Tan",
        images: [
            {
                url: "/og.png",
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
            <body className={inter.className}>{children}</body>
        </html>
    );
}
