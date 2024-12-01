interface Route {
	path: string
	isProtected: boolean
}

const routes: Route[] = [
	{
		path: "/login",
		isProtected: false,
	},
	{
		path: "/",
		isProtected: true,
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
