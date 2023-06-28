import passport from "passport";
import jwt from "jsonwebtoken";
import User from "../../models/userModel.js";

const googleLogin = 	async (req, res) => {
    const existingUser = await User.findById(req.user.id);

    const payload = {
        id: req.user.id,
        roles: existingUser.roles,
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        username: existingUser.username,
        provider: existingUser.provider,
        avatar: existingUser.avatar,
    };

    jwt.sign(
        payload,
        process.env.JWT_ACCESS_SECRET_KEY,
        { expiresIn: "20m" },
        (err, token) => {
            const jwt = `${token}`;

            const embedJWT = `
<html>
<script>
window.localStorage.setItem("googleToken",'${jwt}')
window.location.href='/dashboard'
</script>

</html>

`;
            res.send(embedJWT);
        }
    );
}

export default googleLogin;