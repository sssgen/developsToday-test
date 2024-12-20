import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Car Dealer",
    description:
        "A car dealer application using Next.js. The application will allow users to filter vehicles by type and model year, and view the results on a separate page.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className='antialiased bg-gradient-to-r from-blue-500 to-teal-400 min-h-screen min-w-screen'>
                {children}
            </body>
        </html>
    );
}
