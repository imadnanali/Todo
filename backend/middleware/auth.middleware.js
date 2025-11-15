import "dotenv/config";
import { User } from "../model/user.model.js";
import jwt from "jsonwebtoken";


const isAuthenticate = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(400).json({ message: "Not authroized!" });
        }

        const token = authHeader.split(" ")[1]

        if (!token) {
            return res.status(401).json({ message: "Token not found" });
        }

        const decode = jwt.verify(token, process.env.SECRET_KEY);

        const user = await User.findById(decode.userId).select("-password");

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        req.user = user;

        next();

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}


export default isAuthenticate