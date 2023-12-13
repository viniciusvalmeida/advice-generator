import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: "800" });

export const metadata: Metadata = {
	title: "Advice Generator App",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${manrope.className} min-h-screen bg-neutral-darkBlue flex justify-center items-center`}
			>
				{children}
			</body>
		</html>
	);
}
