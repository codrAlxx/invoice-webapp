import chalk from "chalk";
import cookieParser from "cookie-parser";
import "dotenv/config"
import express from "express"
import morgan from "morgan";
import connectionToDB from "./config/connectDB.js";
import {morganMiddleware, systemLogs} from './utils/Logger.js'
import mongoSanitize from "express-mongo-sanitize";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import authRoutes from "./routes/authRoutes.js";



await connectionToDB();
const app = express();
const PORT = process.env.PORT || 1997

if(process.env.NODE_ENV === 'production') {
    app.use(morgan("dev"))
}

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(mongoSanitize());
app.use(morganMiddleware)   



app.get("/api/v1/test" , (req, res)=> {
    // console.log(req.url)
    res.json({Hi : "Welcome to my app"})
})


app.use("/api/v1/auth", authRoutes)

app.use(notFound);
app.use(errorHandler);


app.listen(PORT, () => {
	console.log(
		`${chalk.green.bold("✔")} 👍 Server running in ${chalk.yellow.bold(
			process.env.NODE_ENV
		)} mode on port ${chalk.blue.bold(PORT)}`
	);
	systemLogs.info(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
	);
});