import express from "express";
import registerUser from "../controllers/auth/registerController.js";
import verifyUserEmail from "../controllers/auth/verifyEmailController.js";
import loginUser from "../controllers/auth/loginController.js";
import { loginLimiter } from "../middleware/apiLimiter.js";

const router = express.Router();

console.log("In auth routes")
router.post("/register", registerUser);

router.get("/verify/:emailToken/:userId", verifyUserEmail);
router.post("/login", loginLimiter, loginUser);

router.get("/authTest" , (req, res)=> {
    // console.log(req.url)
    res.json({Hi : "Welcome to my auth Test "})
})


export default router;