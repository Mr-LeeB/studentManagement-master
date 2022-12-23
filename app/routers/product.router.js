const express = require('express');
const productRouter = express.Router();
const {getProductList, getProductById, getProductByCategory , addProduct, updateProduct, deleteProduct} = require('../controllers/product.controllers');
const {logFeature} = require('../middleware/logger/log-feature');
const { checkProductEmpty } = require('../middleware/validations/product.validation');

productRouter.get('/', logFeature, getProductList)

productRouter.get('/:id', getProductById)

productRouter.get('/category/:category', getProductByCategory)

productRouter.post('/', checkProductEmpty, addProduct)

productRouter.put('/:id', updateProduct)

productRouter.delete('/:id', deleteProduct)

module.exports = productRouter;