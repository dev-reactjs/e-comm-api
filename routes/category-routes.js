import express from 'express'
import categoryController from '../controller/category-controller'
import productController from '../controller/product-controller'

let router = express.Router()

router.post('/add-category', categoryController.addCategory)
router.get('/get-category', categoryController.getCategory)
router.post('/update-category', categoryController.updateCategory)
router.post('/delete-category', categoryController.deleteCategory)




module.exports = router