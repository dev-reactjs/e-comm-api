import userModel from '../model/user-model'


let addUser = (req, res, next) => {
    console.log(req.body)
    let UserDetail = userModel(req.body)
    UserDetail.save()
    .then(result => {
        console.log(`User Added Successfully!! \n ${result}`)
        res.json({
            status: "User Added Successfully",
            result
        })
    })
    .catch(err => {
        console.log(`Error While Adding User!! \n ${err}`)
        res.status(500).json({
            status: "Error While Adding User!!",
            err
        })
    })
}

let getUser = (req, res, next) => {
    userModel.find({username: req.body.username, password: req.body.password})
    .select("-password -username")
    .then(result => {
        console.log(`User Found!! \n ${result}`)
        res.json({
            status: "User Found",
            result
        })
    })
    .catch(err => {
        console.log(`Error, User Not Found!! \n ${err}`)
        res.status(500).json(err)
    })
}

let updateUser = (req, res, next) => {
    userModel.findOneAndUpdate({_id: req.body.userId}, req.body, { runValidators: true })
    .select("-password -username")
    .then(result => {
        console.log(`User Updated Successfully!! \n ${result}`)
        res.json({
            status: "User Updated Successfully",
            result
        })
    })
    .catch(err => {
        console.log(`Error While Updating User \n ${err}`)
        res.json({
            status: "Error While Updating User",
            err
        })
    })
}
let deleteUser = (req, res, next) => {
    userModel.findOneAndRemove({_id: req.body.userId})
    .then(result => {
        console.log(`User Removed Successfully \n ${result}`)
        res.json({
            status: "User Removed Successfully",
            result
        })
    })
    .catch(err => {
        console.log(`Error While Removing User \n ${err}`)
        res.status(500).json({
            status: "Error While Removing User!!",
            err
        })
    })
}

exports.addUser = addUser
exports.getUser = getUser
exports.deleteUser = deleteUser
exports.updateUser = updateUser