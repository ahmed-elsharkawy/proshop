import express from 'express'
import asyncHandler from 'express-async-handler'
import Products from '../models/productModel.js';
const router = express.Router();

// @dsc     Fetch all products
// @route   Get /api/products
// @access  Public
router.get('/', asyncHandler(async(req, res) => {
    const products = await Products.find({})
    res.json(products)
}))

// @dsc     Fetch single proudct
// @route   Get /api/products/:id
// @access  Public
router.get('/:id', asyncHandler(async(req, res) => {
    const product = await Products.findById(req.params.id)
    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error('Product not found!')
    }
}))

export default router;