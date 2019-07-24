import mongoose from 'mongoose'
let Schema = mongoose.Schema

let categorySchema = Schema({
    categoryName: {
        type: String, index: {unique: true, dropDups: true},
        required: [true, "Category name is required"]
    },
})

let categoryModel = mongoose.model('categorys', categorySchema)

module.exports = categoryModel