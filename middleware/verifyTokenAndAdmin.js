
import verifyToken from './verifyToken.js'

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
        next()
        } else {
            res.status(403).json('YOU ARE NOT AUTHORIZED!')
        }
    })
}

export default verifyTokenAndAdmin;