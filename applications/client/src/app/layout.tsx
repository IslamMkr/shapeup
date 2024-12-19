import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import Grid from "@mui/material/Grid2"
import type { Metadata } from "next"
// import { Inter } from "next/font/google"
import localFont from "next/font/local"

import StoreProvider from "./providers/StoreProvider"
import AuthGuard from "./guards/AuthGuard"
import Header from "./components/Header/Header"

import "./globals.css"

const MonaSans = localFont({ src: "../../public/fonts/Mona-Sans.woff2", variable: "--font-mona-sans" })

// If loading a variable font, you don't need to specify the font weight
// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
	title: "ShapeUp | Take control of your life",
	description:
		"ShapeUp is the ultimate app for tracking weight, managing your diet, and connecting with a fitness community. Start your journey today!",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${MonaSans.variable}`}>
				<AppRouterCacheProvider>
					<StoreProvider>
						<AuthGuard>
							<Grid container direction="column">
								<Header />
								<main>{children}</main>
							</Grid>
						</AuthGuard>
					</StoreProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	)
}
