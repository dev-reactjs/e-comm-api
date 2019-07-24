import express from 'express'
import userController from '../controller/user-controller'
import productController from '../controller/product-controller'

let router = express.Router()

router.post('/add-product', productController.addProduct)
router.get('/get-products', productController.getProducts)
router.get('/get-product-category', productController.getProductCategory)
router.post('/update-product', productController.updateProduct)
router.post('/delete-product', productController.deleteProduct)




module.exports = router