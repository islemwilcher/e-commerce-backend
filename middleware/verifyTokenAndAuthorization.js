
import verifyToken from './verifyToken.js'

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
    next();
    } else {
    res.status(403).json("You are not alowed to do that!");
    }
});
};

export default verifyTokenAndAuthorization;