import asyncHandler from "express-async-handler";
import User from "../../models/userModel.js";

// $-title   Delete User Account
// $-path    DELETE /api/v1/user/:id
// $-auth    Private/Admin
// an admin user can delete any other user account
const deleteUserAccount = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);
	const userId = req.params.id;
	// console.log(userId)
	// console.log("Dete User Account hitted")
	if (user) {
		
		// const result = await user.remove();
		await User.findByIdAndDelete(userId);

		res.json({
			success: true,
			message: `User ${userId} deleted successfully`,
		});
	} else {
		res.status(404);
		throw new Error("user not found");
	}
});

export default deleteUserAccount;