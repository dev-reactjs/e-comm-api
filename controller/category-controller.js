import categoryModel from '../model/category-model'


let addCategory = (req, res, next) => {
    console.log(req.body)
    let CategoryDetail = categoryModel(req.body)
    CategoryDetail.save()
    .then(result => {
        console.log(`Category Added to Cart Successfully!! \n ${result}`)
        res.json({
            status: "Category Added to Cart Successfully",
            result
        })
    })
    .catch(err => {
        console.log(`Error While Adding Category to Cart!! \n ${err}`)
        res.status(500).json({
            status: "Error While Adding Category to Cart!!",
            err
        })
    })
}

let getCategory = (req, res, next) => {
    categoryModel.find(req.body)
    .select("-password -cartname")
    .then(result => {
        console.log(`Category Found!! \n ${result}`)
        res.json({
            status: "Category Found",
            result
        })
    })
    .catch(err => {
        console.log(`Error, Category Not Found!! \n ${err}`)
        res.status(500).json(err)
    })
}

let updateCategory = (req, res, next) => {
    categoryModel.findOneAndUpdate({_id: req.body.productId}, req.body, { runValidators: true })
    .then(result => {
        console.log(`Category Updated Successfully!! \n ${result}`)
        res.json({
            status: "Category Updated Successfully",
            result
        })
    })
    .catch(err => {
        console.log(`Error While Updating Category \n ${err}`)
        res.json({
            status: "Error While Updating Category",
            err
        })
    })
}

let deleteCategory = (req, res, next) => {
    categoryModel.findOneAndRemove({_id: req.body.categoryId})
    .select("-password -cartname")
    .then(result => {
        console.log(`Category Removed from Cart Successfully!! \n ${result}`)
        res.json({
            status: "Category Removed from Cart Successfully",
            result
        })
    })
    .catch(err => {
        console.log(`Error While Removed Category from Cart \n ${err}`)
        res.json({
            status: "Error While Removed Category from Cart",
            err
        })
    })
}

exports.addCategory = addCategory
exports.getCategory = getCategory
exports.deleteCategory = deleteCategory
exports.updateCategory = updateCategory