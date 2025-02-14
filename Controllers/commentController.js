// import model
const Post = require('../Models/postModel');
const Comment = require('../Models/commentModel');

exports.createComment = async(req, res) => {
    try{
        //fetch data from request body
        const {post, user, body} = req.body;

        //create a comment object
        const comment = new Comment({
            post, user, body
        });

        //save the new comment into the database
        const savedComment = await comment.save();

        //find the post by ID on ehich this comment is done and 
        // add this comment into the post's comment array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new: true} )
                .populate("comments")  //populate the comments array with comment document
                .exec();

                
        res.json({
            post: updatedPost,
        });

    }
    catch(error){
        res.status(500).json({
            success: false,
            message: "error while creating comment"
        });
    }
};

exports.deleteComment = async(req, res) => {
    try{
        const {comment, post} = req.body;

        const deletedComment = Comment.findOneAndDelete({_id: comment, post: post});

        //update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {comments: deletedComment._id}}, {new: true});


        res.status(200).json({
            message: "comment deleted Successfully",
        })
    }
    catch(error){
        res.status(400).json({
            message: "not able to delete comment",
        })
    }
};


