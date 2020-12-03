const Router = require('express');
const router = new Router();
const productController = require('../controller/ProductController');

router.post('/product', productController.createProduct)
router.get('/products', productController.getProducts)
router.put('/product', productController.updateProduct)
router.delete('/product/:id', productController.deleteProduct)

module.exports = router;