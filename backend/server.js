import chalk from "chalk";
import cookieParser from "cookie-parser";
import "dotenv/config"
import express from "express"
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 1997

if(process.env.NODE_ENV === 'production') {
    app.use(morgan("dev"))
}

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())


app.get("/api/v1/test" , (req, res)=> {
    // console.log(req.url)
    res.json({Hi : "Welcome to my app"})
})




app.listen( PORT , () => {
    console.log(`${chalk.green.bold("✔")} 👍 Server is running in ${chalk.yellow.bold(process.env.NODE_ENV)} on PORT ${chalk.blue.bold(PORT)}`);
})