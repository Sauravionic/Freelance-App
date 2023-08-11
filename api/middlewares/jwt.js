import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyToken = (req, res, next) => { 
    const token = req.cookies.accessToken;
    if (!token) return next(createError(401, "You are not authenticated"));
    
    jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
        if (err) return next(createError(403, "Token is not valid"));
        req.userId = payload.id;
        req.isSeller = payload.isSeller;

        //Using next here so that it can go to the next function which has been defined like deleteUser etc a verifyToken is just a middleware
        next();
    })
}