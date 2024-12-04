interface Route {
	path: string
	isProtected: boolean
}

const routes: Route[] = [
	{
		path: "/register",
		isProtected: false,
	},
	{
		path: "/tools",
		isProtected: false,
	},
	{
		path: "/",
		isProtected: false,
	},
	{
		path: "/home",
		isProtected: true,
	},
	{
		path: "/notfound",
		isProtected: false,
	},
]

export default routes
