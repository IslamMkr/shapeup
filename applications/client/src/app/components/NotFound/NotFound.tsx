import Grid from "@mui/material/Grid2"
import { Button, Typography } from "@mui/material"
import { redirect } from "next/navigation"

const NotFound = () => {
	return (
		<Grid
			container
			direction="column"
			justifyContent="center"
			alignItems="center"
			style={{
				height: "100%",
				gap: 20,
			}}>
			<Typography variant="h1">404</Typography>
			<Typography variant="h3">Page not found</Typography>
			<Typography variant="h5">{`The page you are searching for isn't available.`}</Typography>

			<Button variant="contained" color="primary" onClick={() => redirect("/")}>
				Go back to home
			</Button>
		</Grid>
	)
}

export default NotFound
