
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

import User from '../moduls/user.js'


//log in
export const signin = async ( req, res ) => {
    const { userName, password } = req.body

    try {
        const oldUser = await User.findOne({ userName })

        if(!oldUser) return res.status(404).json({ message: "User doesn't exist" })

        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password)

        if(!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' })

        const token = jwt.sign({ userName: oldUser.userName, id: oldUser._id }, process.env.secret, { expiresIn: '1d' })

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}


//sign up
export const signup = async ( req, res ) => {
    const { email, password, userName } = req.body

    try {
        const oldUser = await User.findOne({ email })

        if(oldUser) return res.status(400).json({ message: 'User already exists.' })

        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await User.create({ email, password: hashedPassword, userName })

        const token = jwt.sign( { email: result.email, id: result._id }, process.env.secret, { expiresIn: '1d' })

        res.status(200).json({ result, token })
    } catch (error) {
        res.status(500).json({ message: 'something went wrong' })

        console.log(error)
    }
    
}
