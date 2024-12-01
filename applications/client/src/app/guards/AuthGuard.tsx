"use client"

import { useAppSelector } from "@/lib/hooks"
import routes from "@/utils/routes"
import { redirect, usePathname } from "next/navigation"
import React from "react"
import NotFound from "../components/NotFound/NotFound"

interface AuthGuardProps {
	children: React.ReactNode
}

const AuthGuard = ({ children }: AuthGuardProps) => {
	const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)
	const pathname = usePathname()

	const currentRoute = routes.find((route) => route.path === pathname)

	if (currentRoute === undefined) {
		if (isAuthenticated) {
			return <NotFound />
		} else {
			redirect("login")
		}
	} else if (!currentRoute.isProtected && isAuthenticated) {
		redirect("/")
	} else if (currentRoute.isProtected && !isAuthenticated) {
		redirect("/login")
	} else {
		return <>{children}</>
	}
}

export default AuthGuard
