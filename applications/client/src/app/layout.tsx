import type { Metadata } from "next"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import StoreProvider from "./providers/StoreProvider"
import AuthGuard from "./guards/AuthGuard"
import { Inter } from "next/font/google"
import "./globals.css"

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
	title: "ShapeUp | Take control of your life",
	description: "ShapeUp is a fitness app that helps you take control of your life.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable}`}>
				<AppRouterCacheProvider>
					<StoreProvider>
						<AuthGuard>{children}</AuthGuard>
					</StoreProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	)
}
