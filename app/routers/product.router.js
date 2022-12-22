const express = require('express');
const productRouter = express.Router();
const {getProductList, getProductById, addProduct, updateProduct, deleteProduct} = require('../controllers/product.controllers');
const {logFeature} = require('../middleware/logger/log-feature');
const { checkProductEmpty } = require('../middleware/validations/product.validation');


// Lấy danh sách học sinh
productRouter.get('/', logFeature, getProductList)

// Lấy thông tin chi tiết học sinh
productRouter.get('/:id', getProductById)

// Thêm học sinh
productRouter.post('/', checkProductEmpty, addProduct)

// Cập nhật học sinh
productRouter.put('/:id', updateProduct)

// Xóa học sinh
productRouter.delete('/:id', deleteProduct)

module.exports = productRouter;