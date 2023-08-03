const Post = require("../models/postModel")
const User = require("../models/userModel")

const createPost = async (req, res)=> {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const updatePost = async (req, res)=> {
    try {
        const post = await Post.findById(req.params.id)
        if(post.userId === req.body.userId){
            await post.updateOne({$set: req.body})
            res.status(200).json("Post updated")
        }else{
            res.status(403).json("you can update your post only")
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const deletePost = async (req, res)=> {
    try {
        const post = await Post.findById(req.params.id)
        if(post.userId === req.body.userId){
            await post.deleteOne()
            res.status(200).json("Post deleted")
        }else{
            res.status(403).json("you can  your post only")
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const likePost = async (req, res)=> {
    try {
        const post = await Post.findById(req.params.id)
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push: {likes: req.body.userId}})
            res.status(200).json("Post liked")
        }else{
            await post.updateOne({$pull: {likes: req.body.userId}})
            res.status(200).json("Post disliked")
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const postComment = async (req, res)=> {
    try{
        const comment = await Post.findById(req.params.id)
        await comment.updateOne({$push: {comments: req.body.comment}})
        res.status(200).json("Comment Added")
    }
    catch (error){
        res.status(500).json(error.message)
    }
}
const getPost = async (req, res)=> {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const getAllPost = async (req, res)=> {
    try {
        const user = await User.findOne({username: req.params.username})
        const posts = await Post.find({userId: user._id})
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const getTimelinePost = async (req, res)=> {
    try {
        const currentUser = await User.findById(req.params.userId)
        const userPosts = await Post.find({userId: currentUser._id})
        const friendsPosts = await Promise.all(
            currentUser.followings.map((friendId)=> {
                return Post.find({userId: friendId})
            })
        )
        res.status(200).json(userPosts.concat(...friendsPosts))
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = {
    createPost,
    updatePost,
    deletePost,
    likePost,
    postComment,
    getPost,
    getAllPost,
    getTimelinePost
}