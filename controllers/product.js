
import CryptoJs from "crypto-js"
import jwt from "jsonwebtoken"

import Product from '../moduls/product.js'

// all products
export const getAllProducts = async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json(error)
    }
}

//update Product
export const updateProduct = async (req, res) => {
    
    try {
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


