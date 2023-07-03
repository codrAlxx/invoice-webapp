import { Box, Container, Typography, Button, Link, styled, Grid } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FaHeartBroken, FaSadTear } from "react-icons/fa";
import error from './../images/error.png'

const CreateHomeButton = styled(Button)({
	borderColor: "black",
	borderRadius: "25px",
	border: "3px solid",
	"&:hover": {
		borderColor: "#000000",
		boxShadow: "none",
		border: "2px solid",
	},
});

const NotFound = () => {
	return (
	<Box
	sx={{
	  display: 'flex',
	  justifyContent: 'center',
	  alignItems: 'center',
	  minHeight: '100vh'
	}}
  >
	<Container maxWidth="md">
	  <Grid container spacing={2} alignItems={"center"}>
		<Grid xs={6}>
		  <Typography variant="h1" 
								fontFamily= "Apple Color Emoji"
								component="div"
								gutterBottom
								sx={{ color: "black" }}>
			404
		  </Typography>
		  <Typography variant="h6"
								component="div"
								gutterBottom
								sx={{ color: "black" }}>
			Aha! You see! You can be wrong!
		  </Typography>
		  <Typography variant="subtitle"
		  						fontSize="12px"
								component="div"
								gutterBottom
								sx={{ color: "grey" }}>
			(or it could be us)....
		  </Typography>
		  <Typography variant="h6" 
								component="div"
								gutterBottom
								sx={{ color: "black" }}>
			....either way you should probably
		  </Typography>
		  <CreateHomeButton
								variant="contained"
								color="success"
								size="large"
								sx={{ fontSize: "0.5rem", borderRadius: "25px" }}
							>
								<Link
									component={RouterLink}
									to="/dashboard"
									sx={{
										textDecoration: "none",
										color: "white",
										fontSize: "0.5rem",
									}}
								>
									Go Back to HOME page
								</Link>
		</CreateHomeButton>


		</Grid>
		<Grid xs={6}>
		  <img
			src={error}
			alt="Error image"
			width={500}
		  />
		</Grid>
	  </Grid>
	</Container>
  </Box>
	);
};

export default NotFound;