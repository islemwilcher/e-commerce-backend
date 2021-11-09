
import Product from '../moduls/product.js'

// create product
export const createProduct = async (req, res) => {
    const newProduct = new Product(req.body)

    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    } catch (error) {
        res.status(500).json(error)
    }
}

// all products
export const getAllProducts = async (req, res) => {
    const queryNew = req.query.new
    const queryCategory = req.query.category
    try {
        let products

        if(queryNew) {
            products = await Product.find().sort({ createdat: -1 }).limit(1)
        } else if(queryCategory) {
            products = await Product.find({
                categories: {
                    $in: [queryCategory]
                }
            })
        } else {
            products = await Product.find()
        }

        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error)
    }
}

//update Product
export const updateProduct = async (req, res) => { 
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.is,
            { $set: req.body },
            { new: true }
        )

        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json(error)
    }
}

//delete Product
export const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json('PRODUCT HAS BEEN DELETED')
    } catch (error) {
        res.status(500).json(error)
    }
}

//get single Product
export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error);
    }
}


