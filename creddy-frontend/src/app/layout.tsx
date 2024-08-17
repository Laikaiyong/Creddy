import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import { KeylessAccountProvider } from "@/context/KeylessAccountContext";
import { Toaster } from "sonner";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Creddy",
	description: "Web3 Credentials for Academic Accredition",
	icons: [
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/creddy-favicon.png",
		},
	],
	openGraph: {
		title: "Creddy",
		description: "Web3 Credentials for Academic Accredition",
		images: ["/creddy-logo.png"],
	},
	twitter: {
		card: "summary",
		site: "Creddy",
		title: "Creddy",
		description: "Web3 Credentials for Academic Accredition",
		images: ["/creddy-logo.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Toaster
					richColors
					position='top-right'
					toastOptions={{
						style: {
							letterSpacing: "0.02em",
						},
						className: "toast",
						duration: 5000,
					}}
					closeButton
					expand={true}
				/>
				<KeylessAccountProvider>
					{children}
					<Footer />
				</KeylessAccountProvider>
			</body>
		</html>
	);
}
