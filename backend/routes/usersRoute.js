const router = require("express").Router();
const {updateUser,deleteUser, getUser, followUser, unFollowUser} = require("../controllers/userController")

//update
router.put("/:id", updateUser)

//get
router.get("/:id", getUser)

// //delete
router.delete("/:id", deleteUser)

// //follow
router.put("/:id/follow", followUser)

// //unfollow
router.put("/:id/unfollow", unFollowUser)

module.exports = router