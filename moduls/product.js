
import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
    {
        name:  { type: String, required: true, unique: true },
        img: { type: String, required: true },
        description: { type: String, required: true },
        categories: { type: Array, required: true },
        color: { type: Array, required: true },
        price:  { type: Number, required: true },
        inStock: { type: Boolean, default: true }
    },  
    { timestapms: true }
)

export default mongoose.model('Product', productSchema)