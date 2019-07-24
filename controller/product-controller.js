import productModel from '../model/product-model'

let addProduct = (req, res, next) => {
    let productDetail = productModel(req.body)
    productDetail.save()
    .then(result => {
        console.log(`Product Added Successfully!! \n ${result}`)
        res.json({
            status: "Product Added Successfully",
            result
        })
    })
    .catch(err => {
        console.log(`Error While Adding Product!! \n err`)
        res.status(500).json({
            status: "Error While Adding Product!!",
            err
        })
    })
}

let getProducts = (req, res, next) => {
    productModel.find(req.body)
    .then(result => {
        console.log(`Product Found!! \n result`)
        res.json({
            status: "Product Found",
            result
        })
    })
    .catch(err => {
        console.log(`Error, Product Not Found!! \n err`)
        res.status(500).json(err)
    })
}

let getProductCategory = (req, res, next) => {
    productModel.find({category: req.body.category})
    .then(result => {
        console.log(`Product Found!! \n result`)
        res.json({
            status: "Product Found",
            result
        })
    })
    .catch(err => {
        console.log(`Error, Product Not Found!! \n err`)
        res.status(500).json(err)
    })
}

let updateProduct = (req, res, next) => {
    productModel.findOneAndUpdate({_id: req.body.productId}, req.body, { runValidators: true })
    .then(result => {
        console.log(`Product Updated Successfully!! \n ${result}`)
        res.json({
            status: "Product Updated Successfully",
            result
        })
    })
    .catch(err => {
        console.log(`Error While Updating Product \n ${err}`)
        res.json({
            status: "Error While Updating Product",
            err
        })
    })
}
let deleteProduct = (req, res, next) => {
    productModel.findOneAndRemove({_id: req.body.productId})
    .then(result => {
        console.log(`Product Removed Successfully \n ${result}`)
        res.json({
            status: "Product Removed Successfully",
            result
        })
    })
    .catch(err => {
        console.log(`Error While Removing Product \n ${err}`)
        res.status(500).json({
            status: "Error While Removing Product!!",
            err
        })
    })
}

exports.addProduct = addProduct
exports.getProducts = getProducts
exports.deleteProduct = deleteProduct
exports.updateProduct = updateProduct
exports.getProductCategory = getProductCategory