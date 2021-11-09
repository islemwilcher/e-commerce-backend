
import CryptoJs from "crypto-js"
import jwt from "jsonwebtoken"

import User from '../moduls/user.js'


//log in
export const signin = async ( req, res ) => {

    try {
        const user = await User.findOne({
            userName: req.body.userName
        })

        !user && res.status(401).json('User Name is NOT VALID')

        const hashedPassword = CryptoJs.AES.decrypt(
            user.password,
            process.env.SEC_RET
        )

        const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8)

        const inputPassword = req.body.password

        originalPassword != inputPassword && res.status(401).json('WRONG PASSWORD!')

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        },
        process.env.SEC_RET,
        { expiresIn: '1d' }
        )

        const { password, ...others } = user._doc

        res.status(200).json({ ...others, accessToken })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}


//sign up
export const signup = async ( req, res ) => {

    const newUser = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: CryptoJs.AES.encrypt(
            req.body.password,
            process.env.SEC_RET
        ).toString(),
    })

    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(500).json({ message: 'something went wrong' })
    }
    
}
