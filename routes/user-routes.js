import express from 'express'
import userController from '../controller/user-controller'
import productController from '../controller/product-controller'

let router = express.Router()

router.post('/add-user', userController.addUser)
router.get('/get-user', userController.getUser)
router.post('/update-user', userController.updateUser)
router.post('/delete-user', userController.deleteUser)

router.post('/add-product', productController.addProduct)
router.get('/get-products', productController.getProducts)
router.post('/update-product', productController.updateProduct)
router.post('/delete-product', productController.deleteProduct)




module.exports = router