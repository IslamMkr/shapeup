import { Button, Grid2 as Grid } from "@mui/material"
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter"
import InsightsIcon from "@mui/icons-material/Insights"
import FastfoodIcon from "@mui/icons-material/Fastfood"
import PeopleIcon from "@mui/icons-material/People"
import BubbleChartIcon from "@mui/icons-material/BubbleChart"
import styles from "./page.module.css"
import typography from "@/app/styles/typography.module.css"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
	return (
		<Grid className={styles.page}>
			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
				style={{
					height: "calc(100vh - 56px)",
					gap: 40,
					padding: "0px 20px",
					background: "#ffffff",
				}}>
				<h1 style={{ maxWidth: 550, textAlign: "center", fontSize: 50, fontWeight: 1000 }}>
					Your Personal Weight & Diet Tracker with Community Support
				</h1>
				<p style={{ maxWidth: 550, textAlign: "center", fontSize: 20 }}>
					Track your progress, achieve your goals, and connect with a supportive community. ShapeUp makes fitness fun
					and achievable!
				</p>
				<Image
					src="/shapeup.png"
					alt="logo"
					width={100}
					height={90}
					style={{ borderRadius: 8, boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
				/>
				<Button
					variant="outlined"
					size="large"
					style={{ width: "fit-content", color: "#4db680", borderColor: "#4db680" }}>
					Join Our Community, Download Our APP
				</Button>
				<Grid container alignItems="center" style={{ gap: 6 }}>
					<p>Or, Join Our Web Community | </p>
					<Link href="/register" style={{ fontWeight: "bold", color: "#4db680" }}>
						Register
					</Link>
				</Grid>
			</Grid>

			<Grid
				container
				direction="column"
				alignItems="center"
				style={{ gap: 20, width: "100%", padding: "0px 20px 50px 20px" }}>
				<Grid
					container
					direction="column"
					style={{
						width: "100%",
						maxWidth: 550,
						gap: 10,
						background: "white",
						padding: 20,
						borderRadius: 8,
						boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
					}}>
					<Grid container alignItems="center" style={{ gap: 10 }}>
						<FitnessCenterIcon />
						<p className={typography.p}>Weight Tracking Made Easy</p>
					</Grid>
					<p className={typography.small}>Log your progress and celebrate milestones.</p>
				</Grid>
				<Grid
					container
					direction="column"
					style={{
						width: "100%",
						maxWidth: 550,
						gap: 10,
						background: "white",
						padding: 20,
						borderRadius: 8,
						boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
					}}>
					<Grid container alignItems="center" style={{ gap: 10 }}>
						<InsightsIcon />
						<p className={typography.p}>Comprehensive Diet Tracker</p>
					</Grid>
					<p className={typography.small}>Keep tabs on calories and nutrients effortlessly.</p>
				</Grid>
				<Grid
					container
					direction="column"
					style={{
						width: "100%",
						maxWidth: 550,
						gap: 10,
						background: "white",
						padding: 20,
						borderRadius: 8,
						boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
					}}>
					<Grid container alignItems="center" style={{ gap: 10 }}>
						<FastfoodIcon />
						<p className={typography.p}>Food Database</p>
					</Grid>
					<p className={typography.small}>Access thousands of food items with detailed nutrition information. </p>
				</Grid>
				<Grid
					container
					direction="column"
					style={{
						width: "100%",
						maxWidth: 550,
						gap: 10,
						background: "white",
						padding: 20,
						borderRadius: 8,
						boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
					}}>
					<Grid container alignItems="center" style={{ gap: 10 }}>
						<PeopleIcon />
						<p className={typography.p}>Community Support</p>
					</Grid>
					<p className={typography.small}>Share updates, get motivation, and grow together. </p>
				</Grid>
				<Grid
					container
					direction="column"
					style={{
						width: "100%",
						maxWidth: 550,
						gap: 10,
						background: "white",
						padding: 20,
						borderRadius: 8,
						boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
					}}>
					<Grid container alignItems="center" style={{ gap: 10 }}>
						<BubbleChartIcon />
						<p className={typography.p}>Insights & Analytics</p>
					</Grid>
					<p className={typography.small}>Visualize your health journey with clear charts and trends.</p>
				</Grid>
			</Grid>
		</Grid>
	)
}
