"use client"

import { useState } from "react"
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"

interface PasswordTextFieldProps {
	id: string
	label: string
}

const PasswordTextField = ({ id, label }: PasswordTextFieldProps) => {
	const [showPassword, setShowPassword] = useState<boolean>(false)

	return (
		<FormControl sx={{ m: 1 }} variant="outlined" size="small" style={{ margin: 0 }}>
			<InputLabel htmlFor={`outlined-adornment-${id}`}>{label}</InputLabel>
			<OutlinedInput
				size="small"
				id={`outlined-adornment-${id}`}
				type={showPassword ? "text" : "password"}
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label={showPassword ? "hide the password" : "display the password"}
							onClick={() => setShowPassword(!showPassword)}
							onMouseDown={(e) => e.preventDefault()}
							onMouseUp={(e) => e.preventDefault()}
							edge="end">
							{showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				}
				label={label}
			/>
		</FormControl>
	)
}

export default PasswordTextField
