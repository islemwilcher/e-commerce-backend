
import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
    {
        userName: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
)

export default mongoose.model('User', userSchema)