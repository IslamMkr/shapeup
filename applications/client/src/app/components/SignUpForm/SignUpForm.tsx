import { Button, Grid2 as Grid, TextField } from "@mui/material"
import PasswordTextField from "@/app/components/PasswordTextField/PasswordTextField"
import typography from "@/app/styles/typography.module.css"
import Image from "next/image"

const SignUpForm = () => {
	return (
		<Grid container direction="column" style={{ gap: 50, padding: 50, backgroundColor: "white", width: "100%" }}>
			<Grid>
				<Image src="/shapeup.png" alt="logo" width={40} height={40} />
				<p className={typography.h3}>Sign up</p>
				<p className={typography.small}>Enter your details below to create your account and get started.</p>
				<p className={typography.small}>{`Start Your Journey Today — It's Free!`}</p>
			</Grid>
			<form>
				<Grid container direction="column" style={{ gap: 20 }}>
					<Grid container direction="column" style={{ gap: 10 }}>
						<TextField size="small" label="Firstname" variant="outlined" type="text" style={{ flex: 1 }} />
						<TextField size="small" label="Lastname" variant="outlined" type="text" style={{ flex: 1 }} />
					</Grid>
					<Grid container direction="column" style={{ gap: 10 }}>
						<TextField size="small" style={{ flex: 1 }} label="Email" variant="outlined" type="email" />
						<TextField size="small" style={{ flex: 1 }} label="Date of birth" variant="outlined" type="date" />
					</Grid>
					<Grid container direction="column" style={{ gap: 10 }}>
						<PasswordTextField id="password" label="Password" />
						<PasswordTextField id="confirm-password" label="Confirm password" />
					</Grid>
					<Grid container direction="row-reverse" style={{ marginTop: 30 }}>
						<Button
							variant="contained"
							color="primary"
							style={{ width: "fit-content", paddingLeft: 50, paddingRight: 50 }}>
							Confirm
						</Button>
					</Grid>
				</Grid>
			</form>

			<Grid container justifyContent="center" style={{ gap: 10 }}>
				<p className={typography.p}>Already have an account?</p>
				<p className={typography.p} style={{ cursor: "pointer", color: "#4db680" }}>
					Login
				</p>
			</Grid>
		</Grid>
	)
}

export default SignUpForm
