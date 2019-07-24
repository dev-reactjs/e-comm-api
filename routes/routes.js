import express from 'express'
// import htm from '../view/index.html'
import fs from 'fs'
import path from 'path'
import userRoutes from './user-routes'
import categoryRoutes from './category-routes'
import productRoutes from './product-routes'
let router = express.Router();
router.use("/user", userRoutes)
router.use("/category", categoryRoutes)
router.use(productRoutes)

router.use('/index', (req, res, next) => {
    fs.readFile('./view/index.html', (err, data) => {
        if(err){
            res.status(500).json(err)
        }
        res.sendFile(path.join(__dirname,'../view/index.html'))
    })    
})
router.use((req, res, next) => {
    res.status(500).json({
        status: "Page Not Found"
    })
})
module.exports = router