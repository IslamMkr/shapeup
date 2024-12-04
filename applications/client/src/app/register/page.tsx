import { Grid2 as Grid } from "@mui/material"
import SignUpForm from "../components/SignUpForm/SignUpForm"

import styles from "./register.module.css"

const LoginPage = () => {
	return (
		<Grid className={styles.page}>
			<SignUpForm />
		</Grid>
	)
}

export default LoginPage
