
import User from '../moduls/user.js'

// all users
export const getAllUsers = async (req, res) => {
    const query = req.query.new
    try {
        const users = query ? await User.find().sort({ _id : -1 }).limit(4) : await User.find().sort({ _id : -1 })
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}

//update
export const updated = async (req, res) => {

}

//delete
export const deleted = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('user has been deleted')
    } catch (error) {
        res.status(500).json(error)
    }
}

//get single user
export const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//user statistic
export const getUserStatistic = async (req, res) => {}
