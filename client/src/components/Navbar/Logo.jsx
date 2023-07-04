import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Logo = () => {
	return (
		<Stack direction="row" spacing={1} alignItems="center">
			<Link component={RouterLink} to="/" sx={{ textDecoration: "none" }}>
				<CurrencyRupeeIcon
					sx={{
						display: { xs: "none", md: "flex" },
						mr: 1,
						fontSize: 50,
						color: "#07f011",
						cursor: "pointer",
					}}
				/>
			</Link>
			<Typography
				variant="poster"
				component="div"
				sx={{
					flexGrow: 1,
					cursor: "pointer",
					fontSize: "32px",
					variant: "poster",
					fontWeight: 500,
					display: { xs: "none", md: "flex" },
				}}
			>
				<Link
					component={RouterLink}
					to="/"
					sx={{ textDecoration: "none", color: "white" }}
				>
					INVOICE
				</Link>
			</Typography>
		</Stack>
	);
};

export default Logo;