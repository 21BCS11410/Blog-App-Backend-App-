const Post = require('../Models/postModel');
const Like = require('../Models/likeModel');

// exports.likePost = async(req, res) => {
//     try{
//         const {post, user} = req.body;

//         const like = new Like({
//             post, user
//         });

//         const savedLike = await like.save();

//         //update the post collection 
//         const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id} }, {new: true})
//         // .populate("likes")
//         // .exec();
//         res.json({
//             post: updatedPost,
//         });
//     }
//     catch(error){
//         res.status(400).json({
//             message: "not able to like post",
//         })
//     }
// };

// exports.unlikePost = async(req, res) => {
//     try{
//         const {like, post} = req.body;

//         const deletedLike = Like.findOneAndDelete({_id: like, post: post});

//         //update the post collection
//         const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {liked: deletedLike._id}}, {new: true});


//         res.status(200).json({
//             message: "Unliked Successfully",
//         })
//     }
//     catch(error){
//         res.status(400).json({
//             message: "not able to unlike post",
//         })
//     }
// }


//like a post

exports.likePost = async (req,res) => {
    try {
        const {post, user} = req.body;
        const like = new Like({
            post, user,
        });
        const savedLike = await like.save();

        //update the post collection basis on this
        const udpatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id} }, {new :true})

        res.json({
            post:udpatedPost,
        });

    }
    catch(error) { 
        return res.status(400).json({
            error: "Error while Liking post",
        });
    }
}


//Unlike a post
exports.unlikePost = async (req,res) => {

    try{
        const{post, like} = req.body;
        //find and delete the like collection me se
        const deletedLike = await Like.findOneAndDelete({post:post, _id:like});

        //udpate the post collection
        const udpatedPost = await Post.findByIdAndUpdate(post,
                                                        {$pull: {likes: deletedLike._id} }, 
                                                        {new: true});

        res.json({
            post:udpatedPost,
        });

    }
    catch(error) {
        return res.status(400).json({
            error: "Error while Unliking post",
        });
    }

}


