"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { useAppSelector } from "@/lib/hooks"

import Grid from "@mui/material/Grid2"
import Image from "next/image"
import Link from "next/link"

import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

import styles from "./header.module.css"

const Header = () => {
	const pathname = usePathname()
	const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)

	const [isMenuOpen, setIsMenuOpen] = useState(false)

	useEffect(() => {
		setIsMenuOpen(false)
	}, [pathname])

	return (
		<header className={styles.header}>
			<Grid className={styles.headerContent}>
				<Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
					<Image src="/shapeup.png" alt="logo" width={36} height={32} style={{ borderRadius: 4 }} />
					<h1 style={{ fontSize: "20px" }}>Shape Up</h1>
				</Link>

				{!isAuthenticated && (
					<Grid>
						<Grid className={styles.mobileNavbar}>
							{!isMenuOpen ? (
								<MenuIcon style={{ cursor: "pointer" }} onClick={() => setIsMenuOpen(true)} />
							) : (
								<CloseIcon style={{ cursor: "pointer" }} onClick={() => setIsMenuOpen(false)} />
							)}
						</Grid>

						<Grid className={styles.navbar}>
							<Link href="/tools">Tools</Link>
							<Link href="/register">Register</Link>
						</Grid>
					</Grid>
				)}
			</Grid>
			{isMenuOpen && (
				<>
					{!isAuthenticated && (
						<Grid className={styles.mobileNavbarContent}>
							<Link href="/tools" className={styles.mobileLink}>
								Tools
							</Link>
							<Link href="/register" className={styles.mobileLink}>
								Register
							</Link>
						</Grid>
					)}
				</>
			)}
		</header>
	)
}

export default Header
