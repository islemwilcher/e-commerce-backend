
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

import User from '../moduls/user.js'

const secret = 'test'

//log in
export const signin = async ( req, res ) => {

}


//sign in
export const signup = async ( req, res ) => {
    const { email, password, userName } = req.body

    try {
        const oldUser = await User.findOne({ email })

        if(oldUser) return res.status(400).json({ message: 'User already exists.' })

        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await User.create({ email, password: hashedPassword, userName })

        const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: '2h' })

        res.status(200).json({ result, token })
    } catch (error) {
        res.status(500).json({ message: 'something went wrong' })

        console.log(error)
    }
    
}
