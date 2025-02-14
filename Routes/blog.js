const express = require('express');
const router = express.Router();

//import controllers
const {createComment, deleteComment} = require('../Controllers/CommentController');
const {createPost, getAllPosts} = require('../Controllers/postController');
const {likePost, unlikePost} = require('../Controllers/likeController');


//create mapping
router.post("/comments/create", createComment);
router.delete("/comments/delete", deleteComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.delete("/likes/unlike", unlikePost);




module.exports = router;
