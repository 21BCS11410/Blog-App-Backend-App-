 const Post = require('../Models/postModel');

 exports.createPost = async(req, res) => {
    try{
        const {title, body} = req.body;
        const post = new Post({
            title, body
        });
        const savedPost = await post.save();

        res.json({
            post: savedPost,
        });
    }
    catch(error){
        res.status(400).json({
            message: "Error while creating post",
        });
    }
 };

 exports.getAllPosts = async(req, res) => {
    try{
        const posts = await Post.find()
                        .populate("comments").exec();
        
        res.json({
            posts,
        })
    }
    catch(error){
        res.status(400).json({
            message: "not able to fetch posts",
        })
    }
 }