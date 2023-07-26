const router = require("express").Router()
const { createPost,updatePost,deletePost,likePost,postComment,getPost,getTimelinePost } = require("../controllers/postControllers")

//create a post
router.post("/", createPost)

//update a post
router.put("/:id", updatePost)

//delete a post
router.delete("/:id", deletePost)

//like a post
router.put("/:id/like", likePost)

//comment on a post
router.put("/:id/comment", postComment)

//get a post
router.get("/:id", getPost)

//get timeline posts
router.get("/timeline/:userId", getTimelinePost)

module.exports = router