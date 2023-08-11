import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
    try {
        console.log(req.params.id);
        const user = await User.findById(req.params.id);
        if (!user) { 
            return next(createError(404,"User does not exist"));
        }

        // We use req.userId because we assined payload.id as req.userId in jwt middleware
        if (req.userId !== user._id.toString()) {
            return res.status(403).send("You can delete only your account");
        }
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).send("User deleted");
        
    } catch (err) {
        
    }
}