import { User } from "../model/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import "dotenv/config"



export const signIn = async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        return res.status(400).json({ messsage: "Fill all required fields" })
    }

    const existAcc = await User.findOne({ email })
    if (existAcc) {
        return res.status(400).json({ message: "Account already exist with this email!" })
    }

    const hashPass = await bcrypt.hash(password, 12)

    const user = await User.create({ name, email, password: hashPass })

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '3d' })

    res.status(200).json({ message: "New account created successfully", user, token })
}



export const logIn = async (req, res)=> {
    const { email, password } = req.body;

    if(!email || !password){
        res.status(400).json({message: "Email or password missed!"})
    }
    const user = await User.findOne({ email })

    if(!user){
        res.status(401).json({message: "Account not found with this email!"})
    }

    const passCompare = await bcrypt.compare(password, user.password);
    if(!passCompare){
        res.status(402).json({message: "Invalid email or password"})
    }

    const token = jwt.sign({userId: user._id}, process.env.SECRET_KEY, {expiresIn: '3d'})

    res.status(200).json({message: "user logged in", user, token})
}