import mongoose from 'mongoose'
let Schema = mongoose.Schema

let userProductSchema = Schema({
    name: {
        type: String,
        required: [true, "Product name is required"]
    },
    brand: {
        type: String,
        required: [true, "Brand is required"]
    },
    category: {
        type: String,
        required: [true, "Brand is required"]
    },
    model: {
        type: String,
        required: [true, "Model Name is required"]
    },
    price: {
        type: Number,
        required: [true, 'Price is required']
    },
    quantity: {
        type: Number, 
        required: [true, 'Quantity is required']
    },
    productId: {type: Schema.Types.ObjectId, ref: 'products'},
    colors: [String]
})

let userProductModel = mongoose.model('userProducts', userProductSchema)

module.exports = userProductModel