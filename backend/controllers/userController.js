const User = require("../models/userModel")
const bcrypt = require("bcrypt")

const updateUser = async (req, res)=> {
    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password, salt)

            }catch(error){
                return res.status(500).json(error.message)
            }
            try {
                await User.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                })
                res.status(200).json("Account has been updated")
            } catch (error) {
                return res.status(500).json(error.message)
            }
        }else{
            return res.status(403).json("You can update only your account")
        }
    }
}

const deleteUser = async (req, res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("Account has been deleted")
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }else{
        return res.status(403).json("You can delete only your account")
    }
}

const getUser = async (req, res)=> {
        try {
            const user = await User.findById(req.params.id)
            const {password, updatedAt, ...other} = user._doc
            res.status(200).json(other)
        } catch (error) {
            return res.status(500).json(error.message)
        }
}
const followUser = async (req, res)=> {
    if(req.body.userId !== req.params.id){
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push: {followers: req.body.userId}})
                await currentUser.updateOne({$push: {followings: req.param.id}})
                res.status(200).json("user has been followed")
            }else{
                res.status(403).json("you already follow this user")
            }
        } catch (error) {
            res.status(500).json(error.message)     
        }
    }else{
        res.status(403).json("you cant follow yourself")
    }
}

const unFollowUser = async (req, res)=> {
    if(req.body.userId !== req.params.id){
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull: {followers: req.body.userId}})
                await currentUser.updateOne({$pull: {followings: req.param.id}})
                res.status(200).json("user has been unfollowed")
            }else{
                res.status(403).json("you don't follow this user")
            }
        } catch (error) {
            res.status(500).json(error.message)     
        }
    }else{
        res.status(403).json("you cant unfollow yourself")
    }
}


module.exports = {
    updateUser,
    deleteUser,
    getUser,
    followUser,
    unFollowUser
}