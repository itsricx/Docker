const express = require('express')
const router = express.Router()


const ProductController = require('../controllers/products')


router.get('/products', ProductController.getProducts);
router.get('/products/:id', ProductController.getProducto);


module.exports = router