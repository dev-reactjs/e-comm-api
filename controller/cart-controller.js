import cartModel from '../model/user-product-model'


let addToCart = (req, res, next) => {
    console.log(req.body)
    let CartDetail = cartModel(req.body)
    CartDetail.save()
    .then(result => {
        console.log(`Product Added to Cart Successfully!! \n ${result}`)
        res.json({
            status: "Product Added to Cart Successfully",
            result
        })
    })
    .catch(err => {
        console.log(`Error While Adding Product to Cart!! \n ${err}`)
        res.status(500).json({
            status: "Error While Adding Product to Cart!!",
            err
        })
    })
}

let getCartItem = (req, res, next) => {
    cartModel.find(req.body)
    .select("-password -cartname")
    .then(result => {
        console.log(`Product Found!! \n ${result}`)
        res.json({
            status: "Product Found",
            result
        })
    })
    .catch(err => {
        console.log(`Error, Product Not Found!! \n ${err}`)
        res.status(500).json(err)
    })
}

let removeProductFromCart = (req, res, next) => {
    cartModel.findOneAndRemove({_id: req.body.cartId})
    .select("-password -cartname")
    .then(result => {
        console.log(`Product Removed from Cart Successfully!! \n ${result}`)
        res.json({
            status: "Product Removed from Cart Successfully",
            result
        })
    })
    .catch(err => {
        console.log(`Error While Removed Product from Cart \n ${err}`)
        res.json({
            status: "Error While Removed Product from Cart",
            err
        })
    })
}

exports.addToCart = addToCart
exports.getCartItem = getCartItem
exports.removeProductFromCart = removeProductFromCart