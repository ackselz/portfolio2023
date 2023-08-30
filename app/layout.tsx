import "./globals.css";
import type { Metadata } from "next";
import { Inter, Zilla_Slab } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});
export const zilla_slab = Zilla_Slab({
    subsets: ["latin"],
    weight: "600",
    variable: "--font-zilla-slab",
});

export const metadata: Metadata = {
    title: "Shao Chong Tan",
    description: "About me.",
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
            <body className={`${inter.variable} ${zilla_slab.variable}`}>
                {children}
            </body>
        </html>
    );
}
