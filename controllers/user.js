
import User from '../moduls/user.js'

// all users
export const getAllUsers = async (req, res) => {}

//update
export const updated = async (req, res) => {}

//delete
export const deleted = async (req, res) => {}

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
