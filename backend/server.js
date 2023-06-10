import chalk from "chalk";
import cookieParser from "cookie-parser";
import "dotenv/config"
import express from "express"
import morgan from "morgan";

const app = express();

if(process.env.NODE_ENV === 'production') {
    app.use(morgan("dev"))
}

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

app.get("app/v1/test" , (req, res)=> {
    res.json({Hi : "Welcome to my app"})
})

const PORT = process.env.PORT || 1997

app.listen( PORT , () => {
    console.log(`${chalk.green.bold("✔")} 👍 Server is running in ${chalk.yellow.bold(process.env.NODE_ENV)} on PORT ${chalk.blue.bold(PORT)}`);
})